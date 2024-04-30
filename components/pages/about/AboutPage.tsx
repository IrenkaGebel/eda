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
      <div className="flex flex-col gap-y-28 lg:snap-y lg:snap-mandatory lg:overflow-y-scroll">
        <article
          id="Eda"
          className="p-4 lg:flex lg:flex-row  lg:gap-x-14 lg:justify-center lg:h-screen lg:x-screen lg:snap-always lg:snap-start "
        >
          {edaGroup && (
            <>
              <section className="lg:w-1/3 ">
                <div className="mt-8 mb-8 text-volcano-dust flex gap-8 items-baseline ">
                  <h1 className="text-6xl">{edaGroup.headingEda}</h1>
                  <h2 className="">{edaGroup.headingCaption}</h2>
                </div>
                <CustomPortableText
                  value={edaGroup.bioEda as PortableTextBlock[]}
                />
              </section>

              <section className="lg:pt-4">
                <h1 className="mt-8 mb-8 text-volcano-dust text-5xl">
                  {edaGroup.headingContact}
                </h1>

                <CustomPortableText
                  value={edaGroup.contactEda as PortableTextBlock[]}
                />

                <h1 className="mt-8 mb-8 text-volcano-dust text-5xl">
                  {edaGroup.headingWork}
                </h1>

                <CustomPortableText
                  value={edaGroup.workEda as PortableTextBlock[]}
                />
              </section>
            </>
          )}
        </article>

        <article
          id="Iszszi"
          className="p-4 lg:flex lg:flex-row lg:gap-x-14 lg:justify-center lg:h-screen lg:x-screen lg:pt-24 lg:snap-always lg:snap-start"
        >
          {iszsziGroup && (
            <>
              <section className="lg:w-1/3 lg:ml-8">
                <h1 className="mt-8 mb-8 text-6xl text-volcano-dust  ">
                  {iszsziGroup.headingIszszi}
                </h1>

                <CustomPortableText
                  value={iszsziGroup.bioIszszi as PortableTextBlock[]}
                />
              </section>

              <section className="pb-32 lg:pt-4 lg:w-1/3">
                <h1 className="text-5xl text-volcano-dust mt-8 mb-8 ">
                  {iszsziGroup.headingContactIszszi}
                </h1>

                <CustomPortableText
                  value={iszsziGroup.contactIszszi as PortableTextBlock[]}
                />

                <h1 className="text-5xl text-volcano-dust mt-8 mb-8  ">
                  {iszsziGroup.headingWorkIszszi}
                </h1>

                <CustomPortableText
                  value={iszsziGroup.workIszszi as PortableTextBlock[]}
                />
              </section>
            </>
          )}
        </article>
      </div>
    </>
  )
}

export default About
