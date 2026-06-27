export const CONTACT_EMAIL = 'brf.uppsalaekeby1@gmail.com'

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const navItems: NavItem[] = [
  { label: 'Aktuellt', href: '/' },
  { label: 'Välkommen', href: '/valkommen' },
  { label: 'Boka tvättstuga & lokaler', href: '/boka' },
  {
    label: 'Viktig information',
    href: '/viktig-information',
    children: [
      { label: 'Felanmälan', href: '/viktig-information/felanmalan' },
      { label: 'Parkering', href: '/viktig-information/parkering' },
      { label: 'Ventilation', href: '/viktig-information/ventilation' },
      { label: 'Fastighetsskötsel', href: '/viktig-information/fastighetsskotsel' },
      { label: 'Hiss', href: '/viktig-information/hiss' },
      { label: 'Skadedjur', href: '/viktig-information/skadedjur' },
      { label: 'Vatten och avlopp', href: '/viktig-information/vatten-och-avlopp' },
    ],
  },
  { label: 'Styrelsen', href: '/styrelsen' },
  { label: 'Coop-tomten', href: '/coop-tomten' },
]
