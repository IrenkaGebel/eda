'use client'

import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { resolveHref } from '@/sanity/lib/utils'
import type { HomePagePayload } from '@/types'

import ImageBox from '@/components/shared/ImageBox'
import sketches from '@/sanity/schemas/documents/sketches'

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
      <div className="pb-64">
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
                  <div className="text-3xl font-light ">
                    <div className={` ${!filter ? 'lg:hidden' : 'lg:block'}`}>
                      <div className="flex flex-wrap justify-items-center pr-8 pl-8 pt-8 pb-4 lg:flex lg:justify-end lg:pr-16 lg:pb-8 lg:relative ">
                        {project.title}
                        <div className="text-sm p-2 font-normal ">
                          {project.date}{' '}
                        </div>
                        {project.forWhomAndWhere && (
                          <CustomPortableText
                            paragraphClasses=""
                            value={project.forWhomAndWhere}
                          />
                        )}
                      </div>
                    </div>

                    <div className="pl-8 pr-8 lg:hidden">
                      {' '}
                      {project.projectInfo && (
                        <CustomPortableText
                          paragraphClasses=""
                          value={project.projectInfo}
                        />
                      )}
                    </div>

                    <div
                      className="flex justify-center pb-32 pt-12 
                    lg:flex lg:flex-col lg:justify-start lg:ml-8 lg:p-2"
                    >
                      <div className={imageWidthClass}>
                        <ImageBox
                          image={project.coverImage}
                          alt={`Cover image from ${project.title}`}
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
