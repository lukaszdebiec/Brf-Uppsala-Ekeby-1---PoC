'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { ChevronDown, Menu, X, Trees } from 'lucide-react'
import { navItems } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openGroup, setOpenGroup] = useState<string | null>(null)

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Trees className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-semibold text-foreground">
              Brf Uppsala Ekeby 1
            </span>
            <span className="text-xs text-muted-foreground">Bostadsrättsförening i Ekeby</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Huvudmeny">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
                    isActive(item.href) && 'text-foreground',
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-0 top-full w-60 translate-y-1 rounded-lg border border-border bg-popover p-1.5 opacity-0 shadow-lg transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-md px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground',
                  isActive(item.href) && 'bg-secondary text-foreground',
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav
          className="border-t border-border bg-background lg:hidden"
          aria-label="Mobilmeny"
        >
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-border/60 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    className={cn(
                      'block flex-1 py-3 text-sm font-medium',
                      isActive(item.href) ? 'text-primary' : 'text-foreground',
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className="p-2 text-muted-foreground"
                      onClick={() =>
                        setOpenGroup((g) => (g === item.href ? null : item.href))
                      }
                      aria-label="Visa undermeny"
                    >
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform',
                          openGroup === item.href && 'rotate-180',
                        )}
                      />
                    </button>
                  )}
                </div>
                {item.children && openGroup === item.href && (
                  <ul className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block py-2 text-sm text-muted-foreground"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
