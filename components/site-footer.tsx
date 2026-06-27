import Link from 'next/link'
import { Mail, MapPin, Trees } from 'lucide-react'
import { CONTACT_EMAIL, navItems } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-sidebar">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Trees className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-semibold text-foreground">
              Brf Uppsala Ekeby 1
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            En bostadsrättsförening med 100 lägenheter i stadsdelen Ekeby, cirka 3 km väster
            om Uppsala centrum.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-foreground">Genvägar</h2>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-sm font-semibold text-foreground">Kontakt</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>Köpenhamnsgatan & Reykjaviksgatan, Ekeby, Uppsala</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="break-all transition-colors hover:text-foreground"
              >
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Brf Uppsala Ekeby 1. Alla rättigheter förbehållna.
        </p>
      </div>
    </footer>
  )
}
