import React from 'react'
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { CollaboratorsPayload } from '@/types'

export interface CollaboratorsPageProps {
  data: CollaboratorsPayload | null
}

export function Collaborators({ data }: CollaboratorsPageProps) {
  const { intro, parts } = data ?? {}

  return (
    <>
      console.log(data);
      <article>
        <CustomPortableText value={intro as PortableTextBlock[]} />
      </article>
      <article id="collaborators">
        {parts && (
          <>
            <h1>{parts.headingOne}</h1>
            <h2>{parts.wordCountOne}</h2>
            <section>
              <CustomPortableText
                value={parts.contentOne as PortableTextBlock[]}
              />
            </section>

            <h1>{parts.headingTwo}</h1>
            <h2>{parts.wordCountTwo}</h2>
            <section>
              <CustomPortableText
                value={parts.contentTwo as PortableTextBlock[]}
              />
            </section>

            <h1>{parts.headingThree}</h1>
            <h2>{parts.wordCountThree}</h2>
            <section>
              {' '}
              <CustomPortableText
                value={parts.contentThree as PortableTextBlock[]}
              />
            </section>

            <h1>{parts.headingFour}</h1>
            <h2>{parts.wordCountFour}</h2>
            <section>
              <CustomPortableText
                value={parts.contentFour as PortableTextBlock[]}
              />
            </section>
          </>
        )}
      </article>
    </>
  )
}
export default Collaborators
