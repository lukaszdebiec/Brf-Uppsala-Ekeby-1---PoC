import type { Metadata } from 'next'
import { ArrowRight, WashingMachine, Home, Hammer, Flame, BedDouble, KeyRound, AlertTriangle } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Boka tvättstuga & lokaler | Brf Uppsala Ekeby 1',
  description:
    'Boka tvättstuga, kvarterslokal, snickarlokal, bastu eller uthyrningsrum i Brf Uppsala Ekeby 1.',
}

const bookable = [
  { icon: WashingMachine, label: 'Tvättstuga', sub: 'Reykjaviksgatan & Köpenhamnsgatan' },
  { icon: Home, label: 'Kvarterslokal', sub: 'För fest och sammankomster' },
  { icon: Hammer, label: 'Snickarlokal', sub: 'För dina projekt' },
  { icon: Flame, label: 'Bastu', sub: 'Boka din tid' },
  { icon: BedDouble, label: 'Uthyrningsrum', sub: 'Reykjaviksgatan 128' },
]

export default function BokaPage() {
  return (
    <>
      <PageHero
        eyebrow="Boka"
        title="Bokning av tvättstuga och lokaler"
        description="Varje hushåll har två taggar som vid lägenhetsöverlåtelse lämnas över till nya ägaren. Med taggen bokar du föreningens gemensamma lokaler."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {bookable.map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-base font-semibold text-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-primary/30 bg-primary/5 p-6 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Boka online
            </h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-muted-foreground">
              För att boka tvättstuga, kvarterslokal, snickarlokal, bastu eller uthyrningsrum
              klickar du på länken nedan. Vill du hellre boka på plats kan du enkelt göra det
              på skärmen utanför respektive tvättstuga.
            </p>
          </div>
          <a
            href="#"
            className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:mt-0"
          >
            Boka här
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Bra att tänka på
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Eftersom kvarterslokalen på Köpenhamnsgatan är belägen så att kringboende kan bli
              störda får t.ex. diskotek inte anordnas i denna lokal. Lokalen bör inte användas
              efter kl. 23.00.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Tveka inte att be din granne om hjälp om du känner dig osäker, eller vänd dig
              till någon av oss i styrelsen.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <KeyRound className="h-5 w-5 text-primary" aria-hidden="true" />
              <h2 className="font-heading text-lg font-semibold text-foreground">
                Taggar
              </h2>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Om du förlorat din tagg och vill beställa en ny, eller bara vill ha en extra
              tagg, kostar det 230 kr. Meddela föreningen via e-post och betala till
              föreningens konto i Handelsbanken: clearingnummer 6514, kontonummer 756 206 588.
              Betalningen måste göras som en banköverföring. Ange lägenhetsnummer (1–100), inte
              den fyrsiffriga kombinationen.
            </p>
          </div>
        </div>

        <div className="mt-8 flex items-start gap-3 rounded-xl border border-accent/50 bg-accent/30 p-6">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
          <div>
            <h2 className="font-heading text-base font-semibold text-accent-foreground">
              Förlust av tagg
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-accent-foreground/80">
              Vid förlust av tagg, meddela styrelsen via e-post{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
                {CONTACT_EMAIL}
              </a>{' '}
              så att vi kan ta bort den ur systemet. Annars kan en obehörig upphittare komma in
              i föreningens lokaler. Du kan meddela oss numret på den tagg du har kvar, så tar
              vi bort den andra.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
