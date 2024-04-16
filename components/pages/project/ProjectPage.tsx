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
    projectDetails,
    projectInfo,
    referenceToSketches,
    linkImage,
    coverImage,
    gallery,
  } = data ?? {}

  return (
    <div className="text-xl font-light italic">
      <div className="flex flex-col justify-items-center p-8">
        {title}
        {projectDetails}{' '}
        {projectInfo && (
          <CustomPortableText paragraphClasses="" value={projectInfo} />
        )}
      </div>
      {/* reference to sketches as 'view process' and 'link image' */}
      {referenceToSketches?.slug.current && (
        <Link href={'/sketches/' + referenceToSketches.slug.current}>
          view process{' '}
          <ImageBox
            data-sanity={encodeDataAttribute?.('linkImage')}
            image={linkImage}
            alt=""
            classesWrapper=" "
          />
        </Link>
      )}

      {/* cover image */}
      <ImageBox
        data-sanity={encodeDataAttribute?.('coverImage')}
        image={coverImage}
        alt=""
        classesWrapper=" "
      />
      {/* gallery */}
      <ImageBox
        data-sanity={encodeDataAttribute?.('gallery')}
        image={gallery}
        alt=""
        classesWrapper=" "
      />
    </div>
  )
}

export default ProjectPage
