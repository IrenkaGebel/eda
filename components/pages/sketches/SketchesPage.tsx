'use client'
import type { EncodeDataAttributeCallback } from '@sanity/react-loader'
import Link from 'next/link'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { SketchesPayload } from '@/types'

export interface SketchesPageProps {
  data: SketchesPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function SketchesPage({ data, encodeDataAttribute }: SketchesPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const {
    title,
    sketchesInfo,
    coverImage,
    gallery,
    referenceToProject,
    linkImage,
  } = data ?? {}

  return (
    <div className="text-xl font-light italic">
      <div className="flex flex-col justify-items-center p-8">
        {title}

        {sketchesInfo && (
          <CustomPortableText paragraphClasses="" value={sketchesInfo} />
        )}
      </div>
      {/* reference to sketches as 'view process' and 'link image' */}
      {referenceToProject?.slug.current && (
        <Link href={'/projects/' + referenceToProject.slug.current}>
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

export default SketchesPage
