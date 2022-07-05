import { Language, MetaData, Product } from './types'

const productDe: Product = {
  description: 'Self-Order|Pay für Gastro',
  claim: 'Gastgeben auf dem nächsten Level.',
  name: 'Gaston',
}
const productEn: Product = {
  description: 'Self-Order|Pay for Gastronomy',
  claim: 'Hospitality on the next level.',
  name: 'Gaston',
}
export const metaData: MetaData = {
  de: productDe,
  en: productEn,
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

export type GlobalNavigation = Record<Language, NavigationTree>

const navigationDe: NavigationTree = [
  {
    title: 'Produkt',
    items: [
      {
        href: '/de/bestell-und-zahlungs-ablauf-gastro-betriebe/',
        title: 'Bestell- und Zahlungsablauf',
        description:
          'Beschreibung, wie das Bestellen und Bezahlen aus der Sicht eines Gastrobetriebs mit Gaston funktioniert.',
      },
      {
        href: '/de/funktionsumfang/',
        title: 'Funktionsumfang',
        description: 'Detaillierte Auflistung aller Funktionen von Gaston.',
      },
      {
        title: 'Bestell-App',
        href: '/de/restaurant-bestell-app/',
        description: 'Entdecken Sie unsere Restaurant Bestell App.',
      },
      {
        href: '/de/demo/',
        title: 'Demo',
        description:
          'Machen Sie eine Bestellung und erfahren dabei den Zahlungsablauf.',
      },
    ],
  },
  {
    title: 'Über',
    items: [
      {
        href: '/de/team/',
        title: 'Team',
        description: 'Wer versteckt sich hinter der Persona?',
      },
      {
        href: '/de/blog/',
        title: 'Blog',
        description: 'Der neuste Gossip, der gerade die Runden macht.',
      },
      {
        title: 'Mission',
        href: '/de/mission/',
        description: 'Was ist unsere Mission? Was treibt uns?',
      },
    ],
  },
  {
    title: 'Preise',
    href: '/de/preise/',
  },
  {
    href: '/de/kontakt/',
    title: 'Kontakt',
  },
]

const navigationEn: NavigationTree = [
  {
    title: 'Demo',
    href: '/en/demo/',
  },
  {
    title: 'About',
    items: [
      {
        title: 'Team',
        href: '/en/team/',
        description: 'Who is hiding behind the persona?',
      },
      {
        title: 'Blog',
        href: '/en/blog/',
        description: 'The latest gossip doing the rounds.',
      },

      {
        title: 'Mission',
        href: '/en/mission/',
        description: 'What is our mission? What drives us?',
      },
    ],
  },
  { title: 'Contact', href: '/en/contact/' },
]

export const globalNavigation: GlobalNavigation = {
  de: navigationDe,
  en: navigationEn,
}
