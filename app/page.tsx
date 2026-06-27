import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Mail, WashingMachine, Users, Info } from 'lucide-react'
import { news, formatDate } from '@/lib/news'
import { CONTACT_EMAIL } from '@/lib/site'

const quickLinks = [
  {
    label: 'Boka tvättstuga & lokaler',
    description: 'Boka tvättstuga, kvarterslokal, bastu och mer.',
    href: '/boka',
    icon: WashingMachine,
  },
  {
    label: 'Viktig information',
    description: 'Felanmälan, parkering, ventilation och skötsel.',
    href: '/viktig-information',
    icon: Info,
  },
  {
    label: 'Styrelsen',
    description: 'Kontaktuppgifter till styrelse och valberedning.',
    href: '/styrelsen',
    icon: Users,
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <div className="relative h-[58vh] min-h-[420px] w-full overflow-hidden">
          <Image
            src="/ekeby-hero.png"
            alt="Bostadsområdet i Ekeby med ljusa hus omgivna av grönska och björkar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 md:pb-14">
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-background/80">
                Bostadsrättsförening · Ekeby, Uppsala
              </p>
              <h1 className="max-w-2xl font-heading text-4xl font-semibold text-balance text-background md:text-5xl">
                Välkommen till Brf Uppsala Ekeby 1
              </h1>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-background/85">
                100 lägenheter på Köpenhamnsgatan och Reykjaviksgatan, omgivna av grönska
                ett stenkast från naturreservatet Hågadalen–Nåsten.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/boka"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Boka tvättstuga & lokaler
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/valkommen"
                  className="inline-flex items-center gap-2 rounded-full bg-background/90 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-background"
                >
                  Om föreningen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-secondary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <link.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {link.label}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {link.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Läs mer
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* News feed */}
      <section className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Aktuellt
            </p>
            <h2 className="mt-1 font-heading text-2xl font-semibold text-foreground md:text-3xl">
              På gång just nu
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col gap-6 lg:col-span-2">
            {news.map((post) => (
              <article
                key={post.id}
                className="rounded-xl border border-border bg-card p-6 md:p-8"
              >
                <div className="flex flex-wrap items-center gap-3 text-sm">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 font-medium text-secondary-foreground">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                    {formatDate(post.date)}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-balance text-foreground">
                  {post.title}
                </h3>
                <div className="mt-3 space-y-3 leading-relaxed text-muted-foreground">
                  {post.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-border bg-sidebar p-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Saknar du information?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Är det någon information du saknar på hemsidan? Maila styrelsen och berätta!
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Mail className="h-4 w-4" />
                Kontakta styrelsen
              </a>
            </div>

            <div className="mt-4 rounded-xl border border-accent/50 bg-accent/30 p-6">
              <h3 className="font-heading text-lg font-semibold text-accent-foreground">
                Bra att veta
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-accent-foreground/80">
                Varje hushåll har två taggar som vid lägenhetsöverlåtelse lämnas över till nya
                ägaren. Bokning sker via skärmen utanför respektive tvättstuga eller online.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
