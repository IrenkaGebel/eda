'use client'
import { EncodeDataAttributeCallback } from '@sanity/react-loader'
import React from 'react'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { CollaboratorsPayload } from '@/types'

export interface CollaboratorsPageProps {
  data: CollaboratorsPayload | null
  encodeDataAttribute?: EncodeDataAttributeCallback
}

export function Collaborators({ data }: CollaboratorsPageProps) {
  const { intro, parts } = data ?? {}

  return (
    <>
      <article>
        <CustomPortableText value={intro} />
      </article>
      <article id="collaborators">
        {parts && (
          <>
            <h1>{parts.headingOne}</h1>
            <h2>{parts.wordCountOne}</h2>
            <section>
              <CustomPortableText
                paragraphClasses=""
                value={parts.contentOne}
              />
            </section>

            <h1>{parts.headingTwo}</h1>
            <h2>{parts.wordCountTwo}</h2>
            <section>
              <CustomPortableText
                paragraphClasses=""
                value={parts.contentTwo}
              />
            </section>

            <h1>{parts.headingThree}</h1>
            <h2>{parts.wordCountThree}</h2>
            <section>
              {' '}
              <CustomPortableText
                paragraphClasses=""
                value={parts.contentThree}
              />
            </section>

            <h1>{parts.headingFour}</h1>
            <h2>{parts.wordCountFour}</h2>
            <section>
              <CustomPortableText
                paragraphClasses=""
                value={parts.contentFour}
              />
            </section>
          </>
        )}
      </article>
    </>
  )
}
export default Collaborators
