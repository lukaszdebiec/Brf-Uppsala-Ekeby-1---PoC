export type InfoSection = {
  heading?: string
  paragraphs: string[]
}

export type InfoTopic = {
  slug: string
  title: string
  summary: string
  icon: 'wrench' | 'car' | 'wind' | 'broom' | 'arrowupdown' | 'bug' | 'droplet'
  sections: InfoSection[]
}

export const infoTopics: InfoTopic[] = [
  {
    slug: 'felanmalan',
    title: 'Felanmälan',
    summary: 'Så anmäler du fel i din lägenhet eller i föreningens gemensamma utrymmen.',
    icon: 'wrench',
    sections: [
      {
        paragraphs: [
          'Upptäcker du ett fel i fastigheten eller i gemensamma utrymmen ber vi dig anmäla det så snart som möjligt. Akuta fel som riskerar skada på person eller egendom ska anmälas omgående.',
          'Fel i de gemensamma utrymmena, till exempel trapphus, tvättstugor, hissar och återvinningsrum, anmäler du till styrelsen via e-post. Beskriv felet, var det finns och gärna hur länge det funnits.',
        ],
      },
      {
        heading: 'Vad du själv ansvarar för',
        paragraphs: [
          'Som bostadsrättshavare ansvarar du för det inre underhållet av din lägenhet. Vid osäkerhet om vad som är föreningens respektive ditt ansvar, kontakta styrelsen så hjälper vi dig att reda ut det.',
        ],
      },
    ],
  },
  {
    slug: 'parkering',
    title: 'Parkering',
    summary: 'Information om parkeringsplatser och regler för parkering inom området.',
    icon: 'car',
    sections: [
      {
        paragraphs: [
          'Inom området finns parkeringsplatser för boende. För frågor om lediga platser, kö eller hyra av plats, kontakta styrelsen via e-post.',
          'Tänk på att inte parkera så att utryckningsfordon, sopbilar eller fastighetsskötsel hindras. Gångvägar och vändytor ska hållas fria.',
        ],
      },
    ],
  },
  {
    slug: 'ventilation',
    title: 'Ventilation',
    summary: 'Tips för god ventilation och skötsel av ventiler och fläktar.',
    icon: 'wind',
    sections: [
      {
        paragraphs: [
          'För ett bra inomhusklimat är det viktigt att ventilationen fungerar som den ska. Håll till- och frånluftsdon rena och täck dem inte över.',
          'Rengör köksfläktens filter regelbundet och se till att badrummets frånluftsventil inte är igensatt. Vid problem med ventilationen, gör en felanmälan till styrelsen.',
        ],
      },
    ],
  },
  {
    slug: 'fastighetsskotsel',
    title: 'Fastighetsskötsel',
    summary: 'Om skötsel av gårdar, trapphus och föreningens gemensamma ytor.',
    icon: 'broom',
    sections: [
      {
        paragraphs: [
          'Föreningen ansvarar för skötsel av gårdar, grönytor, trapphus och övriga gemensamma utrymmen. Vi hjälps åt att hålla det rent och trivsamt genom att inte ställa privata föremål i trapphus och gemensamma ytor.',
          'Synpunkter på skötseln eller önskemål om åtgärder lämnas till styrelsen.',
        ],
      },
    ],
  },
  {
    slug: 'hiss',
    title: 'Hiss',
    summary: 'Vad du gör om hissen krånglar eller om någon fastnar.',
    icon: 'arrowupdown',
    sections: [
      {
        paragraphs: [
          'Om hissen står stilla eller krånglar, gör en felanmälan till styrelsen. I hissen finns kontaktuppgifter till jouren om någon skulle fastna – följ instruktionerna i hisskorgen.',
          'Överbelasta inte hissen och blockera inte dörrarna, det kan göra att hissen stannar.',
        ],
      },
    ],
  },
  {
    slug: 'skadedjur',
    title: 'Skadedjur',
    summary: 'Så agerar du vid misstanke om skadedjur i lägenheten eller fastigheten.',
    icon: 'bug',
    sections: [
      {
        paragraphs: [
          'Vid misstanke om skadedjur, till exempel möss, råttor eller insekter, är det viktigt att agera snabbt. Anmäl till styrelsen så att åtgärder kan sättas in via föreningens avtal.',
          'Förebygg genom att förvara mat ordentligt, hålla rent och inte ställa ut sopor i förråd eller trapphus.',
        ],
      },
    ],
  },
  {
    slug: 'vatten-och-avlopp',
    title: 'Vatten och avlopp',
    summary: 'Råd för att undvika stopp och vattenskador i avloppen.',
    icon: 'droplet',
    sections: [
      {
        paragraphs: [
          'Spola inte ned något annat än toalettpapper i toaletten. Fett, våtservetter och liknande orsakar stopp i avloppen och kan leda till kostsamma skador.',
          'Upptäcker du läckage, fukt eller stopp – stäng av vattnet om möjligt och gör en felanmälan till styrelsen omgående. Vid akut vattenläcka, agera snabbt för att begränsa skadan.',
        ],
      },
    ],
  },
]

export function getInfoTopic(slug: string) {
  return infoTopics.find((t) => t.slug === slug)
}
