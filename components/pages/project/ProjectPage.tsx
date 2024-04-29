'use client'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { ProjectPayload } from '@/types'
import { urlForImage } from '@/sanity/lib/utils'

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
    <div className="text-xl font-light italic">
      <div className="flex flex-col justify-items-center pt-8 pr-8 pl-8 pb-16">
        {title}
        {date}
        {forWhomAndWhere && (
          <CustomPortableText paragraphClasses="" value={forWhomAndWhere} />
        )}
        {projectInfo && (
          <CustomPortableText paragraphClasses="" value={projectInfo} />
        )}
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
              width="120"
            />
          </Link>
        )}
      </div>
      <div className="pt-16 pb-8 pr-4 pl-4 flex justify-center ">
        {/* cover image */}
        <ImageBox
          data-sanity={encodeDataAttribute?.('coverImage')}
          image={coverImage}
          alt=""
          classesWrapper=" "
        />
      </div>
      <div className="pt-16 pb-8 pr-4 pl-4"> {/* gallery */}</div>
    </div>
  )
}

export default ProjectPage
