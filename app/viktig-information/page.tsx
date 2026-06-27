import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { InfoIcon } from '@/components/info-icon'
import { infoTopics } from '@/lib/info'

export const metadata: Metadata = {
  title: 'Viktig information | Brf Uppsala Ekeby 1',
  description:
    'Viktig information för boende i Brf Uppsala Ekeby 1: felanmälan, parkering, ventilation, fastighetsskötsel, hiss, skadedjur samt vatten och avlopp.',
}

export default function ViktigInformationPage() {
  return (
    <>
      <PageHero
        eyebrow="Viktig information"
        title="Information för dig som bor här"
        description="Här samlar vi praktisk information som är bra att känna till som boende i föreningen. Välj ett ämne för att läsa mer."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {infoTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/viktig-information/${topic.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <InfoIcon name={topic.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {topic.title}
              </h2>
              <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
                {topic.summary}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Läs mer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
