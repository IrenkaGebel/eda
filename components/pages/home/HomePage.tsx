'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { ProjectListItem } from './ProjectListItem'

export interface HomePageProps {
  data: HomePagePayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function HomePage({ data, encodeDataAttribute }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents

  const { showcaseProjects } = data ?? {}

  return (
    <>
      <div className="pb-32 m-2 max-w-fit cursor-pointer ">
        {' '}
        {showcaseProjects && showcaseProjects.length > 0 && (
          <div className="flex flex-col">
            {showcaseProjects.map((project, key) => {
              const href = resolveHref(project?._type, project?.slug)
              if (!href) {
                return null
              }

              return (
                <>
                  <Link
                    key={key}
                    href={href}
                    data-sanity={encodeDataAttribute?.([
                      'showcaseProjects',
                      key,
                      'slug',
                    ])}
                    className="flex flex-col lg:hover:ring-8 ring-butter-bun mt-4 mb-4 lg:m-6 p-2 rounded width-screen height-screen"
                  >
                    <ProjectListItem project={project} />
                  </Link>
                </>
              )
            })}
          </div>
        )}
      </div>
    </>
  )
}

export default HomePage
