import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { ProjectListItem } from '@/components/pages/home/ProjectListItem'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { SketchListItem } from './SketchListItem'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents

  const { showcaseProjects = [] } = data ?? {}
  const { showcaseSketches = [] } = data ?? {}

  return (
    <>
      <div className="">
        {/* Showcase projects */}{' '}
        {showcaseProjects && showcaseProjects.length > 0 && (
          <div className="">
            {showcaseProjects.map((project, key) => {
              const href = resolveHref(project?._type, project?.slug)
              if (!href) {
                return null
              }
              return (
                <Link
                  key={key}
                  href={href}
                  data-sanity={encodeDataAttribute?.([
                    'showcaseProjects',
                    key,
                    'slug',
                  ])}
                >
                  <ProjectListItem project={project} odd={key % 2} />
                </Link>
              )
            })}
          </div>
        )}
      </div>
      <div className="">
        {/* Showcase sketches */}{' '}
        {showcaseSketches && showcaseSketches.length > 0 && (
          <div className="">
            {showcaseSketches.map((sketch, key) => {
              const href = resolveHref(sketch?._type, sketch?.slug)
              if (!href) {
                return null
              }
              return (
                <Link
                  key={key}
                  href={href}
                  data-sanity={encodeDataAttribute?.([
                    'showcaseSketches',
                    key,
                    'slug',
                  ])}
                >
                  <SketchListItem sketch={sketch} odd={key % 2} />
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
