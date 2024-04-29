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
      <div className="flex flex-col justify-items-center gap-4 pt-8 pr-8 pl-8 pb-16">
        {title}

        {sketchesInfo && (
          <CustomPortableText paragraphClasses="" value={sketchesInfo} />
        )}
      </div>
      {/* reference to sketches as 'view process' and 'link image' */}
      <div className="rotate-90 w-32 w-screen flex flex-col items-center justify-center text-sm gap-1">
        {referenceToProject?.slug.current && (
          <Link href={'/projects/' + referenceToProject.slug.current}>
            view project{' '}
          </Link>
        )}
        {referenceToProject?.slug.current && (
          <Link href={'/projects/' + referenceToProject.slug.current}>
            <ImageBox
              data-sanity={encodeDataAttribute?.('linkImage')}
              image={linkImage}
              alt=""
              classesWrapper=" "
              width="144"
            />
          </Link>
        )}
      </div>
      <div className="pt-16 pr-4 pl-4 pb-8">
        {' '}
        {/* cover image */}
        <ImageBox
          data-sanity={encodeDataAttribute?.('coverImage')}
          image={coverImage}
          alt=""
          classesWrapper=" "
        />
      </div>
      <div className="pt-8 pr-4 pl-4 pb-16">
        {' '}
        {/* gallery */}
        <ImageBox
          data-sanity={encodeDataAttribute?.('gallery')}
          image={gallery}
          alt=""
          classesWrapper=" "
        />
      </div>
    </div>
  )
}

export default SketchesPage
