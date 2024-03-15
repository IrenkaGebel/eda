import React from 'react'
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { AboutPayload } from '@/types'

export interface AboutPageProps {
  data: AboutPayload | null
}

export function About({ data }: AboutPageProps) {
  const { edaGroup, iszsziGroup } = data ?? {}

  return (
    <>
      <article id="Eda">
        {edaGroup && (
          <>
            <section className="">
              <h1>{edaGroup.headingEda}</h1>

              <CustomPortableText
                value={edaGroup.bioEda as PortableTextBlock[]}
              />
            </section>
            <section>
              <h1 className="">{edaGroup.headingContact}</h1>

              <CustomPortableText
                value={edaGroup.contactEda as PortableTextBlock[]}
              />
            </section>
            <section>
              <h1 className="">{edaGroup.headingWork}</h1>

              <CustomPortableText
                value={edaGroup.workEda as PortableTextBlock[]}
              />
            </section>
          </>
        )}
      </article>

      <article id="Iszszi">
        {iszsziGroup && (
          <>
            <section>
              <h1 className="">{iszsziGroup.headingIszszi}</h1>

              <CustomPortableText
                value={iszsziGroup.bioIszszi as PortableTextBlock[]}
              />
            </section>
            <section>
              <h1 className="">{iszsziGroup.headingContactIszszi}</h1>

              <CustomPortableText
                value={iszsziGroup.contactIszszi as PortableTextBlock[]}
              />
            </section>
            <section>
              <h1 className="">{iszsziGroup.headingWorkIszszi}</h1>

              <CustomPortableText
                value={iszsziGroup.workIszszi as PortableTextBlock[]}
              />
            </section>
          </>
        )}
      </article>
    </>
  )
}

export default About
