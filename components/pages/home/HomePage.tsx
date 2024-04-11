'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { ProjectListItem } from './ProjectListItem'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const filter = searchParams.get('filter')
  const by = searchParams.get('by')

  // Default to an empty object to allow previews on non-existent documents

  const { showcaseProjects } = data ?? {}

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
              const isProject = project._type === 'project'
              const isSketches = project._type === 'sketches'
              const isItIszSzi = project.isItIszSzi === true
              const fontSizeClass = clsx({
                'text-xl':
                  (filter === 'project' && by === null && isProject) ||
                  (filter === 'project' &&
                    by === 'isz-szi-studio' &&
                    isProject &&
                    isItIszSzi) ||
                  (filter === 'sketches' && isSketches),
                'text-sm':
                  (filter === 'project' && by === null && !isProject) ||
                  (filter === 'project' &&
                    by === 'isz-szi-studio' &&
                    !(isProject && isItIszSzi)) ||
                  (filter === 'sketches' && !isSketches) ||
                  (filter === null && by === null),
              })
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
                  <h1 className={fontSizeClass}>{project.title}</h1>
                  <ProjectListItem project={project} odd={key % 2} />
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
