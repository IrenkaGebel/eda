import type { PortableTextBlock } from '@portabletext/types'
import { Reference } from 'react'
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
  wordCountOne: string
  contentOne: PortableTextBlock[]
  headingTwo: string
  wordCountTwo: string
  contentTwo: PortableTextBlock[]
  headingThree: string
  wordCountThree: string
  contentThree: PortableTextBlock[]
  headingFour: string
  wordCountFour: string
  contentFour: PortableTextBlock[]
}

export interface MenuItem {
  _type: string
  slug?: string
  title?: string
}

export interface showcaseProjects {
  _type: string
  coverImage?: Image
  slug?: string
  title?: string
  projectDetails: string
  projectInfo: PortableTextBlock[]
  isItIszSzi: boolean
}

export interface showcaseSketches {
  _type: string
  coverImage?: Image
  slug?: string
  title?: string
  sketchesInfo: PortableTextBlock[]
}

export interface HomePagePayload {
  footer?: PortableTextBlock[]
  overview?: PortableTextBlock[]
  showcaseProjects?: showcaseProjects[]
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
  title: string
  projectDetails: string
  slug: string
  isItIszSzi: boolean
  referenceToProcess: Reference
  linkImage: Image
  projectInfo?: PortableTextBlock[]
  coverImage?: Image
  gallery: Image
}

export interface SketchesPayload {
  title: string
  slug: string
  referenceToProject: Reference
  linkImage: Image
  processInfo?: PortableTextBlock[]
  coverImage?: Image
  gallery: Image
}

export interface SettingsPayload {
  footer?: PortableTextBlock[]
  menuItems?: MenuItem[]
  ogImage?: Image
}
