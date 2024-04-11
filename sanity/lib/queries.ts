import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    overview,
    showcaseProjects[]->{
      _type,
      coverImage,
      "slug": slug.current,
      tags,
      title,
      projectDetails,
      isItIszSzi,
    },
    showcaseSketches[]->{
      _type,
      coverImage,
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
    title,
    "slug": slug.current,
    isItIszSzi,
    referenceToSketches,
    linkImage,
    projectInfo,
    coverImage,
    gallery,
    
  }
`
export const sketchesBySlugQuery = groq`
  *[_type == "sketches" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    referenceToProject,
    linkImage,
    sketchesInfo,
    coverImage,
    gallery,    
  }
`

export const ABOUT_QUERY = groq`*[_type == "about"][0]{
  _id,
  title,
  slug,
  edaGroup,
  iszsziGroup,
}`

export const COLOPHON_QUERY = groq`*[_type == "colophon"][0]{
  _id,
  title,
  info,
  typeUsed,
  revision,
}`

export const Collaborators_QUERY = groq`*[_type == "Collaborators"][0]{
  _id,
  title,
  intro,
  parts,
}`

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
