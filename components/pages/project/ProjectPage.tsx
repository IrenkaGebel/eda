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
    referenceToProcess,
    linkImage,
    coverImage,
    gallery,
  } = data ?? {}

  return (
    <div>
      <div className="text-xl">
        <p>{title}</p>
        <p>{projectDetails}</p>
      </div>
      {projectInfo && (
        <CustomPortableText paragraphClasses="" value={projectInfo} />
      )}
      <ImageBox
        data-sanity={encodeDataAttribute?.('coverImage')}
        image={coverImage}
        alt=""
        classesWrapper=" "
      />
    </div>
  )
}

export default ProjectPage
