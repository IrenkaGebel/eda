'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import { ProjectListItem } from './ProjectListItem'
import ImageBox from '@/components/shared/ImageBox'

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
              const imageWidthClass = clsx({
                'w-96':
                  (filter === 'project' && by === null && isProject) ||
                  (filter === 'project' &&
                    by === 'isz-szi-studio' &&
                    isProject &&
                    isItIszSzi) ||
                  (filter === 'sketches' && isSketches),
                'w-44':
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
                  <div className="flex flex-col items-center text-3xl p-4 ">
                    {project.title}
                    {project.projectDetails}

                    {project.projectInfo && (
                      <CustomPortableText
                        paragraphClasses=""
                        value={project.projectInfo}
                      />
                    )}

                    {/* <ProjectListItem
                      className={imageWidthClass}
                      project={project}
                      odd={key % 2}
                    /> */}
                    <div className="flex justify-center">
                      <div className={imageWidthClass}>
                        <ImageBox
                          image={project.coverImage}
                          alt={`Cover image from ${project.title}`}
                          size={'70vw'}
                        />
                      </div>
                    </div>
                  </div>
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
