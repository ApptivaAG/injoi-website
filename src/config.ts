import type {
  CallToAction,
  SiteMapGroup,
  I18nSiteMap,
  Language,
  MetaData,
  Product,
  I18nFooterInfo,
  FooterInfo,
} from './types'

const productDe: Product = {
  description: 'Self-Order|Pay für Gastro',
  claim: 'Ihre Gäste bestellen und bezahlen ohne Wartezeit.',
  name: 'injoi',
  image: '/assets/logo/injoi_free.svg',
}

const productFr: Product = {
  description: 'Self-Order|Pay pour la Gastronomie',
  claim: 'Vos clients commandent et paient sans attendre.',
  name: 'injoi',
  image: '/assets/logo/injoi_free.svg',
}

const productEn: Product = {
  description: 'Self-Order|Pay for Gastronomy',
  claim: 'Your guests order and pay without waiting.',
  name: 'injoi',
  image: '/assets/logo/injoi_free.svg',
}
const productIt: Product = {
  description: 'Self-Order|Pay for Gastronomy',
  claim: 'Your guests order and pay without waiting.',
  name: 'injoi',
  image: '/assets/logo/injoi_free.svg',
}
export const metaData: MetaData = {
  de: productDe,
  fr: productFr,
  en: productEn,
  it: productIt,
}

export const callToActionLinks: Record<Language, CallToAction[]> = {
  de: [
    { href: '/de/demo/', text: 'Demo ausprobieren' },
  ],
  fr: [
    { href: '/fr/démo/', text: 'Essayez la démo' },
  ],
  en: [
    { href: '/en/demo/', text: 'Try demo' },
  ],
  it: [],
}

export const generalTitle = ({ name }: Product) => `${name}`

export interface NavigationItem {
  href: string
  title: string
  description?: string
}

export interface NavigationGroup {
  title: string
  items: NavigationItem[]
}

export type NavigationTree = (NavigationItem | NavigationGroup)[]

export type Navigation = Record<Language, NavigationTree>

const navigationDe: NavigationTree = [
  {
    title: 'Produkt',
    items: [
      {
        title: 'Digitale Speisekarte',
        href: '/de/digitale-speisekarte/',
        description:
          'Präsentieren Sie mit unserer digitalen Speisekarte Ihr Angebot im besten Licht.',
      },
      {
        title: 'Bestell-App',
        href: '/de/restaurant-bestell-app/',
        description: 'Entdecken Sie unsere Restaurant Bestell App.',
      },
      {
        href: '/de/funktionsumfang/',
        title: 'Funktionsumfang',
        description: 'Detaillierte Auflistung aller Funktionen von injoi.',
      },
      {
        href: '/de/blog/',
        title: 'Blog',
        description: 'Der neuste Gossip, der gerade die Runden macht.',
      },
      // {
      //   href: '/de/demo/',
      //   title: 'Demo',
      //   description:
      //     'Machen Sie eine Bestellung und erfahren dabei den Zahlungsablauf.',
      // },
    ],
  },
  {
    title: 'Über',
    items: [ 
      {
        title: 'Uns',
        href: '/de/ueber-uns/',
        description: 'Was treibt uns an? Worauf legen wir wert?',
      },
      {
        href: '/de/team/',
        title: 'Team',
        description: 'Wer versteckt sich hinter der Persona?',
      },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //       description: 'Der neuste Gossip, der gerade die Runden macht.',
  //     },
    ],
  },
  //{
    //title: 'Preise',
    //href: '/de/preise/',
  //},
  {
    href: '/de/demo/', 
    title: 'Demo ausprobieren',
  },
  {
    href: '/de/termin/',
    title: 'Termin vereinbaren',
  },
  {
    href: '/de/kontakt/',
    title: 'Kontakt',
  },
]
const navigationFr: NavigationTree = [
  {
    title: 'Produit',
    items: [
      {
        title: 'Menu Numérique',
        href: '/fr/menu-numerique/',
        description:
          'Présentez votre offre sous son meilleur avec notre menu digital.',
      },
      {
        title: 'Application de commande',
        href: '/fr/application-de-commande-de-restaurant/',
        description: 'Découvrez notre application de commande de restaurant.',
      },
      {
        href: '/fr/fonctions/',
        title: 'Étendue des fonctions',
        description: 'Liste détaillée de toutes les fonctionnalités de injoi.',
      },
      {
        href: '/fr/blog/',
        title: 'Blog',
        description: 'Les derniers potins font le tour en ce moment.',
      },
      // {
      //   href: '/de/demo/',
      //   title: 'Demo',
      //   description:
      //     'Machen Sie eine Bestellung und erfahren dabei den Zahlungsablauf.',
      // },
    ],
  },
  {
    title: 'À propos',
    items: [
      {
        title: 'De nous',
        href: '/fr/a-propos-de-nous/',
        description: "Qu'est-ce qui nous motive? Qu'est-ce qu'on valorise?",
      },
      {
        href: '/fr/team/',
        title: 'Team',
        description: 'Qui se cache derrière le personnage?',
      },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //       description: 'Der neuste Gossip, der gerade die Runden macht.',
  //     },
    ],
  },
  //{
    //title: 'Preise',
    //href: '/de/preise/',
  //},
  {
    href: '/fr/démo/', 
    title: 'Essayez la démo',
  },
  {
    href: '/fr/rencontre/',
    title: 'Prendre rendez-vous',
  },
  {
    href: '/fr/contacter/',
    title: 'Contacter',
  },
]
const navigationEn: NavigationTree = [
  {
    title: 'Product',
    items: [
      {
        title: 'Digital menu',
        href: '/en/digital-menu/',
        description:
          'Present your offer in the best light with our digital menu.',
      },
      {
        title: 'Order app',
        href: '/en/restaurant-order-app/',
        description: 'Discover our restaurant order app.',
      },
      {
        href: '/en/functions/',
        title: 'Functions',
        description: 'Detailed listing of all features of injoi.',
      },
      {
        href: '/en/blog/',
        title: 'Blog',
        description: 'The newest gossip making the rounds right now.',
      },
      // {
      //   href: '/de/demo/',
      //   title: 'Demo',
      //   description:
      //     'Machen Sie eine Bestellung und erfahren dabei den Zahlungsablauf.',
      // },
    ],
  },
  {
    title: 'About',
    items: [
      {
        title: 'Us',
        href: '/en/about-us/',
        description: 'What drives us? What do we value?',
      },
      {
        href: '/en/team/',
        title: 'Team',
        description: 'Who is hiding behind the persona?',
      },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //       description: 'Der neuste Gossip, der gerade die Runden macht.',
  //     },
    ],
  },
  //{
    //title: 'Preise',
    //href: '/de/preise/',
  //},
  {
    href: '/en/demo/', 
    title: 'Try Demo',
  },
  {
    href: '/en/appointment/',
    title: 'Make an appointment',
  },
  {
    href: '/en/contact/',
    title: 'Contact',
  },
]

export const globalNavigation: Navigation = {
  de: navigationDe,
  fr: navigationFr,
  en: navigationEn,
  it: []
}

const siteMapDe: SiteMapGroup[] = [
  {
    title: 'Produkt',
    items: [
      {
        title: 'Digitale Speisekarte',
        href: '/de/digitale-speisekarte/',
      },
      {
        title: 'Restaurant Bestell App',
        href: '/de/restaurant-bestell-app/',
      },
      {
        title: 'Funktionsumfang',
        href: '/de/funktionsumfang/',
      },
      //{
        //title: 'Preise',
        //href: '/de/preise/',
      //},
      {
        href: '/de/demo/',
        title: 'Demo',
      },
    ],
  },
  {
    title: 'Über',
    items: [
      {
        title: 'Uns',
        href: '/de/ueber-uns/',
      },
      {
        href: '/de/team/',
        title: 'Team',
      },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //     },
  //     {
  //       href: '/de/kontakt/',
  //       title: 'Kontakt',
  //     },
    ],
  },
  {
    title: 'Highlights',
    items: [
      {
        title: 'Take Away und Delivery',
        href: '/de/takeaway-delivery/',
      },
      {
        title: 'Online Speisekarte',
        href: '/de/online-speisekarte/',
      },
      {
        title: 'Gäste-Rufsystem',
        href: '/de/gaeste-rufsystem/',
      },
      {
        title: 'injoi oder Orderman',
        href: '/de/orderman/',
      },
    ],
  },
  {
    title: 'Dokumentation',
    items: [
      {
        title: 'Bestell- und Zahlungsablauf',
        href: '/de/bestell-und-zahlungs-ablauf-gastro-betriebe/',
      },
      {
        title: 'Inbetriebnahme von injoi',
        href: '/de/dokumentation/inbetriebnahme-injoi/',
      },
      {
        title: 'Speisekarte bearbeiten',
        href: '/de/dokumentation/speisekarten-angebot-bearbeiten/',
      },
      {
        title: 'Online Speisekarte erstellen',
        href: '/de/dokumentation/online-speisekarte-erstellen/',
      },
      {
        title: 'Online Speisekarte gestalten',
        href: '/de/dokumentation/online-speisekarte-gestalten/',
      },
    ],
  },
]

const siteMapFr: SiteMapGroup[] = [
  {
    title: 'Produit',
    items: [
      {
        title: 'Menu numérique',
        href: '/fr/menu-numerique/',
      },
      {
        title: 'Application de commande de restaurant',
        href: '/fr/application-de-commande-de-restaurant/',
      },
      {
        title: 'Étendue des fonctions',
        href: '/fr/fonctions/',
      },
      //{
        //title: 'Preise',
        //href: '/de/preise/',
      //},
      {
        href: '/fr/démo/',
        title: 'Démo',
      },
    ],
  },
  {
    title: 'À propos',
    items: [
      {
        title: 'De nous',
        href: '/fr/a-propos-de-nous/',
      },
      {
        href: '/fr/team/',
        title: 'Team',
      },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //     },
  //     {
  //       href: '/de/kontakt/',
  //       title: 'Kontakt',
  //     },
    ],
  },
  // {
  //   title: 'Highlights',
  //   items: [
  //     {
  //       title: 'A emporter et livraison',
  //       href: '/fr/takeaway-delivery/',
  //     },
  //     {
  //       title: 'Menu online',
  //       href: '/fr/online-speisekarte/',
  //     },
  //     {
  //       title: "Système d'appel invité",
  //       href: '/fr/gaeste-rufsystem/',
  //     },
  //     {
  //       title: 'injoi ou alors Orderman',
  //       href: '/fr/orderman/',
  //     },
  //   ],
  // },
  // {
  //   title: 'Documentation',
  //   items: [
  //     {
  //       title: 'Processus de commande et processus de paiement',
  //       href: '/fr/bestell-und-zahlungs-ablauf-gastro-betriebe/',
  //     },
  //     {
  //       title: 'Mise en service de injoi',
  //       href: '/fr/dokumentation/inbetriebnahme-injoi/',
  //     },
  //     {
  //       title: 'Modifier le menu',
  //       href: '/fr/dokumentation/speisekarten-angebot-bearbeiten/',
  //     },
  //     {
  //       title: 'Online Speisekarte erstellen',
  //       href: '/de/dokumentation/online-speisekarte-erstellen/',
  //     },
  //     // {
  //     //   title: 'Online Speisekarte gestalten',
  //     //   href: '/de/dokumentation/online-speisekarte-gestalten/',
  //     // },
  //   ],
  // },
]

const siteMapEn: SiteMapGroup[] = [
  {
    title: 'Product',
    items: [
      {
        title: 'Digital menu',
        href: '/en/digital-menu/',
      },
      {
        title: 'Restaurant order app',
        href: '/en/restaurant-order-app/',
      },
      {
        title: 'Functions',
        href: '/en/functions/',
      },
      //{
        //title: 'Preise',
        //href: '/de/preise/',
      //},
      {
        href: '/en/demo/',
        title: 'Try Demo',
      },
    ],
  },
  {
    title: 'About',
    items: [
      {
        title: 'Us',
        href: '/en/about-us/',
      },
      {
        href: '/en/team/',
        title: 'Team',
      },
  //     {
  //       href: '/de/blog/',
  //       title: 'Blog',
  //     },
  //     {
  //       href: '/de/kontakt/',
  //       title: 'Kontakt',
  //     },
    ],
  },
  // {
  //   title: 'Highlights',
  //   items: [
  //     {
  //       title: 'A emporter et livraison',
  //       href: '/fr/takeaway-delivery/',
  //     },
  //     {
  //       title: 'Menu online',
  //       href: '/fr/online-speisekarte/',
  //     },
  //     {
  //       title: "Système d'appel invité",
  //       href: '/fr/gaeste-rufsystem/',
  //     },
  //     {
  //       title: 'injoi ou alors Orderman',
  //       href: '/fr/orderman/',
  //     },
  //   ],
  // },
  // {
  //   title: 'Documentation',
  //   items: [
  //     {
  //       title: 'Processus de commande et processus de paiement',
  //       href: '/fr/bestell-und-zahlungs-ablauf-gastro-betriebe/',
  //     },
  //     {
  //       title: 'Mise en service de injoi',
  //       href: '/fr/dokumentation/inbetriebnahme-injoi/',
  //     },
  //     {
  //       title: 'Modifier le menu',
  //       href: '/fr/dokumentation/speisekarten-angebot-bearbeiten/',
  //     },
  //     {
  //       title: 'Online Speisekarte erstellen',
  //       href: '/de/dokumentation/online-speisekarte-erstellen/',
  //     },
  //     // {
  //     //   title: 'Online Speisekarte gestalten',
  //     //   href: '/de/dokumentation/online-speisekarte-gestalten/',
  //     // },
  //   ],
  // },
]

export const siteMap: I18nSiteMap = {
  de: siteMapDe,
  fr: siteMapFr,
  en: siteMapEn,
  it: [],
}

const footerDe: FooterInfo = {
  aProductOf: 'Ein Produkt von',
  city: 'Luzern • Schweiz',
  inquiries: 'Anfragen',
  newsletter: 'Newsletter abonnieren',
  or: 'oder',
  appointment: {
    title: 'Termin buchen',
    url: '/de/termin/',
  },
}

const footerFr: FooterInfo = {
  aProductOf: 'Un produit de',
  city: 'Luzern • Suisse',
  inquiries: 'Demandes',
  newsletter: "S'inscrire à la Newsletter",
  or: 'ou alors',
  appointment: {
    title: 'prenez rendez-vous',
    url: '/fr/rencontre/',
  },
}

const footerEn: FooterInfo = {
  aProductOf: 'A product of',
  city: 'Lucerne • Switzerland',
  inquiries: 'Inquiries',
  newsletter: 'Subscribe to newsletter',
  or: 'or',
  appointment: {
    title: 'book an appointment',
    url: '/en/appointment/',
  },
}

export const footer: I18nFooterInfo = {
  de: footerDe,
  fr: footerFr,
  en: footerEn,
  it: footerEn,
}
