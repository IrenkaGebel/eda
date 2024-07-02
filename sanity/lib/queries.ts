import { groq } from 'next-sanity'

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    showcaseProjects[]->{
      _type,
      coverImage,
      "slug": slug.current,
      tags,
      title,
      date,
      forWhomAndWhere,
      projectInfo,
      additionalInfo,
      isItIszSzi,
      coverImage {
      _key,
      _type,
      asset->{
        "aspectRatio": metadata.dimensions.aspectRatio,
        url,
      }
    },
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
    referenceToSketches->{
      slug
    },
    linkImage,
    projectInfo,
    additionalInfo,
    date,
    forWhomAndWhere,
    coverImage {
      _key,
      _type,
      asset->{
        "aspectRatio": metadata.dimensions.aspectRatio,
        url,
      }
    },
    gallery{
      images[]{
        _key,
        _type,
        asset->{
          "aspectRatio": metadata.dimensions.aspectRatio,
          url,
        }
      }
    },
    
  }
`
export const sketchesBySlugQuery = groq`*[_type == "sketches" && slug.current == $slug][0] {
    _id,
    title,
    date,
    "slug": slug.current,
    referenceToProject->{
      slug
    },
    linkImage,
    sketchesInfo,
    coverImage {
      _key,
      _type,
      asset->{
        "aspectRatio": metadata.dimensions.aspectRatio,
        url,
      }
    },
    gallery{
      images[]{
        _key,
        _type,
        asset->{
          "aspectRatio": metadata.dimensions.aspectRatio,
          url,
        }
      }
    },
    }`

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

export const collaborators_QUERY = groq`*[_type == "collaborators"][0]{
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
