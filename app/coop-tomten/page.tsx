import type { Metadata } from 'next'
import { ExternalLink, FileText } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Coop-tomten | Brf Uppsala Ekeby 1',
  description:
    'Information om detaljplanen för Coop-tomten (kv. Hindsgavl) och hur du kan överklaga.',
}

export default function CoopTomtenPage() {
  return (
    <>
      <PageHero
        eyebrow="Coop-tomten"
        title="Höghus i Ekeby – detaljplanen för Coop-tomten"
        description="Pressmeddelande och information till boende om detaljplanen för Coop-tomten (kv. Hindsgavl)."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <article className="space-y-4 leading-relaxed text-muted-foreground">
          <p>
            Den 20 oktober beslutar plan- och byggnadsnämnden om detaljplanen för Coop-tomten
            (kv. Hindsgavl). Förslaget är detsamma som tidigare – nämnden har inte lyssnat på
            de boendes synpunkter.
          </p>
          <p>
            Alla som tidigare lämnat yttrande till plan- och byggnadsnämnden har nu rätt att
            överklaga nämndens beslut till Mark- och miljödomstolen. Du kan utgå från ditt
            tidigare yttrande och komplettera det.
          </p>
          <p>
            Granskningshandlingen, där stadsbyggnadsförvaltningen bemöter våra och dina
            argument, finns på uppsala.se. Planbeskrivning och plankarta kan du få av mig.
          </p>
          <p>
            Överklagandet ska skickas till plan- och byggnadsnämnden senast tre veckor efter
            nämndens beslut, vilket betyder senast den 10 november. Nämnden skickar vidare till
            Mark- och miljödomstolen som sorterar under Nacka tingsrätt. Får vi avslag där går
            vi vidare till Mark- och miljööverdomstolen som sorterar under Svea hovrätt.
          </p>
          <p>Vid frågor, kontakta styrelsen.</p>
        </article>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://www.uppsala.se/hindsgavl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ExternalLink className="h-4 w-4" />
            uppsala.se/hindsgavl
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <FileText className="h-4 w-4" />
            Begär planbeskrivning
          </a>
        </div>
      </section>
    </>
  )
}
