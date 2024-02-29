import type { PortableTextBlock } from '@portabletext/types'
import type { Image } from 'sanity'

import about from '@/sanity/schemas/documents/about'

export interface EdaGroup {
  bio: PortableTextBlock[]
  contact: PortableTextBlock[]
}

export interface AboutPayload {
  _type: string
  slug: string
  _id: string
  title: string
  edaGroup: EdaGroup
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
