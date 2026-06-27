import type { Metadata } from 'next'
import { Building2, Trees, ShoppingBag, Lightbulb } from 'lucide-react'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Välkommen | Brf Uppsala Ekeby 1',
  description:
    'Om Brf Uppsala Ekeby 1 – en förening med 100 lägenheter i Ekeby väster om Uppsala, byggda 1981.',
}

const facts = [
  { icon: Building2, label: '100 lägenheter', sub: 'Köpenhamnsgatan & Reykjaviksgatan' },
  { icon: Trees, label: 'Nära naturen', sub: 'Hågadalen–Nåsten naturreservat' },
  { icon: ShoppingBag, label: 'Ekeby Bruk', sub: 'Vårdcentral, apotek & restauranger' },
  { icon: Lightbulb, label: 'Byggt 1981', sub: 'HSB Uppsala, inflyttning hösten 1981' },
]

export default function ValkommenPage() {
  return (
    <>
      <PageHero
        eyebrow="Välkommen"
        title="En trygg och grön förening i Ekeby"
        description="Brf Uppsala Ekeby 1 ligger i stadsdelen Ekeby, cirka 3 km väster om Uppsala centrum. Föreningen består av 100 lägenheter med adresser på Köpenhamnsgatan och Reykjaviksgatan."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-border bg-card p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-primary">
                <fact.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <p className="mt-4 font-heading text-base font-semibold text-foreground">
                {fact.label}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{fact.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <article className="space-y-4 leading-relaxed text-muted-foreground lg:col-span-2">
            <h2 className="font-heading text-2xl font-semibold text-foreground">
              Vår historia
            </h2>
            <p>
              Bebyggelsen av åkermarken vid Ekeby Bruk påbörjades 1980. Byggherre var HSB
              Uppsala och generalentreprenör var Diös AB. Våra hus stod klara för inflyttning
              hösten 1981.
            </p>
            <p>
              Husen på Reykjaviksgatan ligger i kvarteret Hafnarfjord och husen på
              Köpenhamnsgatan i kvarteret Köpenhamn. Det är vi tillsammans som kan skapa ett
              bra boende.
            </p>
            <h2 className="pt-4 font-heading text-2xl font-semibold text-foreground">
              Närområdet
            </h2>
            <p>
              Ett stenkast från föreningen ligger Ekeby Bruk där det bland annat finns
              vårdcentral, apotek, Friskis &amp; Svettis och restauranger. I närområdet finns
              också en kvartersbutik, ett flertal förskolor samt grundskola.
            </p>
            <p>
              För de naturintresserade finns naturreservatet Hågadalen–Nåsten alldeles inpå
              knuten. Vintertid är det bara att knäppa på skidorna och ge sig ut i spåret.
            </p>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-xl border border-accent/50 bg-accent/30 p-6">
              <h2 className="font-heading text-lg font-semibold text-accent-foreground">
                Påverka ditt boende
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-accent-foreground/80">
                Har du förslag på förbättrande åtgärder lämnar du dem till styrelsen. Motioner
                inför årsstämman lämnas till styrelsen i god tid före årsmötet, enligt
                stadgarna.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
