import 'server-only'

import * as queryStore from '@sanity/react-loader'
import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'
import {
  ABOUT_QUERY,
  collaborators_QUERY,
  COLOPHON_QUERY,
  homePageQuery,
  pagesBySlugQuery,
  projectBySlugQuery,
  settingsQuery,
  sketchesBySlugQuery,
} from '@/sanity/lib/queries'
import { token } from '@/sanity/lib/token'
import {
  AboutPayload,
  CollaboratorsPayload,
  ColophonPayload,
  HomePagePayload,
  PagePayload,
  ProjectPayload,
  SettingsPayload,
  SketchesPayload,
} from '@/types'

const serverClient = client.withConfig({
  token,
  stega: {
    // Enable stega if it's a Vercel preview deployment, as the Vercel Toolbar has controls that shows overlays
    enabled: process.env.VERCEL_ENV === 'preview',
  },
})

/**
 * Sets the server client for the query store, doing it here ensures that all data fetching in production
 * happens on the server and not on the client.
 * Live mode in `sanity/presentation` still works, as it uses the `useLiveMode` hook to update `useQuery` instances with
 * live draft content using `postMessage`.
 */
queryStore.setServerClient(serverClient)

const usingCdn = serverClient.config().useCdn
// Automatically handle draft mode
export const loadQuery = ((query, params = {}, options = {}) => {
  const {
    perspective = draftMode().isEnabled ? 'previewDrafts' : 'published',
  } = options
  // Don't cache by default
  let revalidate: NextFetchRequestConfig['revalidate'] = 0
  // If `next.tags` is set, and we're not using the CDN, then it's safe to cache
  if (!usingCdn && Array.isArray(options.next?.tags)) {
    revalidate = false
  } else if (usingCdn) {
    revalidate = 1
  }
  return queryStore.loadQuery(query, params, {
    ...options,
    next: {
      revalidate,
      ...(options.next || {}),
    },
    perspective,
    // @TODO add support in `@sanity/client/stega` for the below
    // stega: {enabled: draftMode().isEnabled}
  })
}) satisfies typeof queryStore.loadQuery

/**
 * Loaders that are used in more than one place are declared here, otherwise they're colocated with the component
 */

export function loadSettings() {
  return loadQuery<SettingsPayload>(
    settingsQuery,
    {},
    { next: { tags: ['settings', 'home', 'page', 'project'] } },
  )
}

export function loadHomePage() {
  return loadQuery<HomePagePayload | null>(
    homePageQuery,
    {},
    { next: { tags: ['home', 'project', 'sketches'] } },
  )
}

export function loadProject(slug: string) {
  return loadQuery<ProjectPayload | null>(
    projectBySlugQuery,
    { slug },
    { next: { tags: [`project:${slug}`] } },
  )
}

export function loadAbout() {
  return loadQuery<AboutPayload | null>(
    ABOUT_QUERY,
    {},
    { next: { tags: [`about`] } },
  )
}

export function loadColophon() {
  return loadQuery<ColophonPayload | null>(
    COLOPHON_QUERY,
    {},
    { next: { tags: [`colophon`] } },
  )
}

export function loadCollaborators() {
  return loadQuery<CollaboratorsPayload | null>(
    collaborators_QUERY,
    {},
    { next: { tags: [`collaborators`] } },
  )
}

export function loadSketches(slug: string) {
  return loadQuery<SketchesPayload | null>(
    sketchesBySlugQuery,
    { slug },
    { next: { tags: [`sketches:${slug}`] } },
  )
}
export function loadPage(slug: string) {
  return loadQuery<PagePayload | null>(
    pagesBySlugQuery,
    { slug },
    { next: { tags: [`page:${slug}`] } },
  )
}
