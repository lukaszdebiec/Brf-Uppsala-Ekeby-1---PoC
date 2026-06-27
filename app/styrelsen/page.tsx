import type { Metadata } from 'next'
import { Mail, User } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Styrelsen | Brf Uppsala Ekeby 1',
  description: 'Styrelse och valberedning för Brf Uppsala Ekeby 1.',
}

const board = [
  { name: 'Serdar Gürbüz', role: 'Ordförande', address: 'Reykjaviksgatan 124' },
  { name: 'Patrik Johansson', role: 'Sekreterare', address: 'Reykjaviksgatan 124' },
  { name: 'Stefan Blom', role: 'Ledamot', address: 'Reykjaviksgatan 120' },
  { name: 'Tomas Engvall', role: 'Ledamot', address: 'Köpenhamnsgatan 5' },
  { name: 'Trina Dobbs', role: 'Ledamot', address: 'Köpenhamnsgatan 11' },
  { name: 'Linus Ericson Åkerlund', role: 'Ledamot', address: 'Reykjaviksgatan 126' },
]

const nomination = [
  { name: 'Ingmar Fröjd', role: 'Sammankallande', address: 'Köpenhamnsgatan 5' },
  { name: 'Lena Källgren Rommel', role: 'Ledamot', address: 'Köpenhamnsgatan 3' },
  { name: 'Christer Solander', role: 'Ledamot', address: 'Reykjaviksgatan 134' },
]

function PersonCard({
  name,
  role,
  address,
}: {
  name: string
  role: string
  address: string
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
        <User className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="font-heading text-base font-semibold text-foreground">{name}</p>
        <p className="text-sm font-medium text-primary">{role}</p>
        <p className="mt-1 text-sm text-muted-foreground">{address}</p>
      </div>
    </div>
  )
}

export default function StyrelsenPage() {
  return (
    <>
      <PageHero
        eyebrow="Styrelsen"
        title="Styrelse 2026"
        description="Styrelsen ansvarar för föreningens förvaltning och drift. Hör gärna av dig om du har frågor eller förslag."
      />

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="rounded-xl border border-border bg-sidebar p-6 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Styrelsens e-post
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Skicka frågor, förslag eller felanmälan till styrelsen.
            </p>
          </div>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:mt-0"
          >
            <Mail className="h-4 w-4" />
            {CONTACT_EMAIL}
          </a>
        </div>

        <h2 className="mt-12 font-heading text-2xl font-semibold text-foreground">
          Styrelsen består av
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {board.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>

        <h2 className="mt-12 font-heading text-2xl font-semibold text-foreground">
          Valberedning
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {nomination.map((person) => (
            <PersonCard key={person.name} {...person} />
          ))}
        </div>
      </section>
    </>
  )
}
