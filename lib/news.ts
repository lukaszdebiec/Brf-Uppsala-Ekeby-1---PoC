export type NewsPost = {
  id: string
  date: string // ISO yyyy-mm-dd
  title: string
  category: string
  paragraphs: string[]
}

export const news: NewsPost[] = [
  {
    id: '2026-06-13-tvattstugor',
    date: '2026-06-13',
    title: 'Byte av golvbrunnar i tvättstugorna',
    category: 'Tvättstuga',
    paragraphs: [
      'Hej alla! Under vecka 26 och 27, de två närmaste veckorna efter midsommarhelgen, kommer våra tvättstugor på Reykjaviksgatan och Köpenhamnsgatan att byta golvbrunnar.',
      'Tvättmöjligheterna kan vara lite begränsade under dessa två veckor på grund av bilning av betong runt golvbrunn, damm samt gjutning av nya brunnar. Annars ska det gå bra att tvätta som vanligt.',
      'Styrelsen hoppas på förståelse då det kan bli lite besvärligt under arbetet i respektive tvättstuga.',
      'Vänliga hälsningar, Styrelsen',
    ],
  },
  {
    id: '2026-05-23-tack',
    date: '2026-05-23',
    title: 'Stort tack för insatsen i rabatterna!',
    category: 'Gården',
    paragraphs: [
      'Till er som var med och bidrog till att förbättra våra gårdars rabatter – stort tack!',
      'Om någon vill förbättra mer finns jord kvar. Skottkärror, spadar och krattor finns tillgängliga på samma plats som under lördagen, från och med söndag förmiddag.',
      'Styrelsen',
    ],
  },
  {
    id: '2026-05-18-arbetsdag',
    date: '2026-05-18',
    title: 'Hjälp oss fylla rabatterna – frivillig arbetsdag 23 maj',
    category: 'Gården',
    paragraphs: [
      'Tack för alla synpunkter! Vi har fått in många fina idéer och önskemål om gårdarna. Nu sätter vi igång: vi har beställt jord till båda gårdarna och behöver din hjälp med att fylla upp rabatterna.',
      'Lördag 23 maj – kom när det passar dig! Vi sätter igång vid 10.00. Vi tillhandahåller skottkärror och spadar. Ta med arbetskläder och gott humör!',
      'Varför ska jag hjälpa till? Genom att göra vissa saker själva håller vi nere kostnaderna för föreningen – det gynnar alla boende. Det här är din möjlighet att bidra till en trivsammare och vackrare närmiljö för alla i huset.',
      'Vi ses den 23 maj – välkommen! BRF Uppsala Ekeby 1, Styrelsen',
    ],
  },
  {
    id: '2026-05-03-elavbrott',
    date: '2026-05-03',
    title: 'Elavbrott i området',
    category: 'Drift',
    paragraphs: [
      'Vattenfall meddelar vid 16-tiden att de har elavbrott i området och att strömmen kan komma och gå under en period. Vid 18.40 meddelar de att strömmen är tillbaka.',
      'Föreningen kommer under morgondagen, måndag, att kontrollera sin utrustning så att allt fungerar som det är tänkt.',
      'Vänliga hälsningar, Styrelsen',
    ],
  },
  {
    id: '2026-02-14-sopsortering',
    date: '2026-02-14',
    title: 'Ny sopsortering i föreningen',
    category: 'Återvinning',
    paragraphs: [
      'Under våren kommer föreningens olika återvinningsrum, med början på Reykjaviksgatan, att få olika sorteringskärl. Köpenhamnsgatans återvinningsrum ska byggas om under våren och därefter placeras olika sorteringskärl ut.',
      'Tills dess får man lämna in övriga fraktioner, förutom brännbart och matavfall som redan finns, på närmaste återvinningscentral – till exempel Librobäck återvinningscentral på Söderforsgatan 7.',
      'Det är bra att redan nu planera för uppdelning av olika fraktioner: matavfall, restavfall (brännbart), plastförpackningar, pappersförpackningar, metallförpackningar, glasförpackningar samt tidningar och papper. Farligt avfall, elektronik, grovsopor, byggavfall och möbler lämnas även fortsättningsvis på återvinningscentral.',
      'Vänliga hälsningar, Styrelsen',
    ],
  },
  {
    id: '2024-08-22-tagg',
    date: '2024-08-22',
    title: 'Förlust av tagg',
    category: 'Säkerhet',
    paragraphs: [
      'Vid förlust av tagg, meddela styrelsen via e-post så att vi kan ta bort den ur systemet. Annars kan en obehörig upphittare komma in i föreningens lokaler.',
      'Du kan meddela oss numret på den tagg du har kvar, så tar vi bort den andra.',
    ],
  },
]

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('sv-SE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
