'use client'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ProjectPayload } from '@/types'

export interface ProjectPageProps {
  data: ProjectPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function ProjectPage({ data, encodeDataAttribute }: ProjectPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    title,
    date,
    forWhomAndWhere,
    projectInfo,
    additionalInfo,
    referenceToSketches,
    linkImage,
    coverImage,
    gallery,
  } = data ?? {}

  return (
    <div className="text-3xl font-light ">
      <div className="flex flex-wrap justify-items-center pt-16 pr-8 pl-8 pb-4 lg:pl-16 lg:pr-16">
        <h1 className="italic">{title}</h1>
        <h2 className="text-sm p-2 font-normal">{date}</h2>
        {forWhomAndWhere && (
          <CustomPortableText paragraphClasses="" value={forWhomAndWhere} />
        )}
        {projectInfo && (
          <CustomPortableText paragraphClasses="" value={projectInfo} />
        )}
      </div>
      <div className="p-8 lg:pt-0 lg:pl-16 lg:pr-16 pb-32">
        {additionalInfo && (
          <CustomPortableText paragraphClasses="" value={additionalInfo} />
        )}
      </div>

      {/* reference to sketches as 'view process' and 'link image' */}
      <div className="rotate-90 w-32 w-screen flex flex-col items-center justify-center text-sm gap-1">
        {referenceToSketches?.slug.current && (
          <Link href={'/sketches/' + referenceToSketches.slug.current}>
            view process{' '}
          </Link>
        )}
        {referenceToSketches?.slug.current && (
          <Link href={'/sketches/' + referenceToSketches.slug.current}>
            <ImageBox
              data-sanity={encodeDataAttribute?.('linkImage')}
              image={linkImage}
              alt=""
              classesWrapper=" "
              width={144}
              size="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 40vw"
            />
          </Link>
        )}
      </div>
      {/* cover image */}
      <div className="pt-32 pb-16 flex justify-center pr-4 pl-4">
        <ImageBox
          data-sanity={encodeDataAttribute?.('coverImage')}
          image={coverImage}
          alt=""
          classesWrapper=" "
          width={560}
          size="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 40vw"
        />
      </div>
      {/* gallery */}
      <div className="flex flex-col items-center gap-16 pb-16 pr-4 pl-4">
        {gallery?.images &&
          gallery.images.map((img) => {
            return (
              <div key={img._key}>
                <ImageBox
                  data-sanity={encodeDataAttribute?.('gallery')}
                  image={img}
                  alt=""
                  classesWrapper=""
                  width={560}
                  size="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 40vw"
                />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default ProjectPage
