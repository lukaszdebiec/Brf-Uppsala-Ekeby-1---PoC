import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ChevronRight, Mail } from 'lucide-react'
import { InfoIcon } from '@/components/info-icon'
import { infoTopics, getInfoTopic } from '@/lib/info'
import { CONTACT_EMAIL } from '@/lib/site'

export function generateStaticParams() {
  return infoTopics.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const topic = getInfoTopic(slug)
  if (!topic) return { title: 'Viktig information | Brf Uppsala Ekeby 1' }
  return {
    title: `${topic.title} | Brf Uppsala Ekeby 1`,
    description: topic.summary,
  }
}

export default async function InfoTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const topic = getInfoTopic(slug)
  if (!topic) notFound()

  return (
    <>
      <section className="border-b border-border bg-sidebar">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:py-16">
          <nav className="mb-5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/viktig-information" className="transition-colors hover:text-foreground">
              Viktig information
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-foreground">{topic.title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <InfoIcon name={topic.icon} className="h-6 w-6" />
            </span>
            <h1 className="font-heading text-3xl font-semibold text-balance text-foreground md:text-4xl">
              {topic.title}
            </h1>
          </div>
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
            {topic.summary}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="space-y-8">
          {topic.sections.map((section, i) => (
            <div key={i}>
              {section.heading && (
                <h2 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-3 leading-relaxed text-muted-foreground">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-border bg-card p-6 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Har du frågor?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Kontakta styrelsen så hjälper vi dig.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:mt-0"
          >
            <Mail className="h-4 w-4" />
            Kontakta styrelsen
          </a>
        </div>

        <Link
          href="/viktig-information"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till Viktig information
        </Link>
      </section>
    </>
  )
}
