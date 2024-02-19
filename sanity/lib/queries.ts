import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    showcaseSketches[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    showcaseiszsziStudio[]->{
      _type,
      coverImage,
      overview,
      "slug": slug.current,
      tags,
      title,
    },
    title,
  }
`

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    body,
    overview,
    title,
    "slug": slug.current,
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`
export const sketchBySlugQuery = groq`
  *[_type == "sketch" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`
export const iszsziStudioBySlugQuery = groq`
  *[_type == "iszsziStudio" && slug.current == $slug][0] {
    _id,
    client,
    coverImage,
    description,
    overview,
    site,
    "slug": slug.current,
    tags,
    title,
  }
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    footer,
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    ogImage,
  }
`
