import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

export interface AboutPayload {
  _type: string
  slug: string
  _id: string
  title: string
  edaGroup: edaGroup
  iszsziGroup: iszsziGroup
}
export interface edaGroup {
  _type: string
  headingEda: string
  bioEda: PortableTextBlock[]
  headingContact: string
  contactEda: PortableTextBlock[]
  headingWork: string
  workEda: PortableTextBlock[]
}

export interface iszsziGroup {
  _type: string
  headingIszszi: string
  bioIszszi: PortableTextBlock[]
  headingContactIszszi: string
  contactIszszi: PortableTextBlock[]
  headingWorkIszszi: string
  workIszszi: PortableTextBlock[]
}

export interface ColophonPayload {
  _type: string
  slug: string
  _id: string
  title: string
  info: PortableTextBlock[]
  revision: string
  typeUsed: string
}

export interface CollaboratorsPayload {
  _type: string
  slug: string
  _id: string
  title: string
  intro: PortableTextBlock[]
  parts: parts
}
export interface parts {
  _type: string
  headingOne: string
  contentOne: PortableTextBlock[]
  headingTwo: string
  contentTwo: PortableTextBlock[]
  headingThree: string
  contentThree: PortableTextBlock[]
  headingFour: string
  contentFour: PortableTextBlock[]
}

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface ShowcaseProject {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface ShowcaseSketches {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}

export interface ShowcaseiszsziStudio {
  _type: string
  coverImage?: Image
  overview?: PortableTextBlock[]
  slug?: string
  tags?: string[]
  title?: string
}
// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: ShowcaseProject[]
  showcaseSketches?: ShowcaseSketches[]
  showcaseiszsziStudio?: ShowcaseiszsziStudio[]
  title?: string
}

export interface PagePayload {
  body?: PortableTextBlock[]
  name?: string
  overview?: PortableTextBlock[]
  title?: string
  slug?: string
}

export interface ProjectPayload {
  client?: string
  coverImage?: Image
  description?: PortableTextBlock[]
  duration?: {
    start?: string
    end?: string
  }
  overview?: PortableTextBlock[]
  site?: string
  slug: string
  tags?: string[]
  title?: string
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
