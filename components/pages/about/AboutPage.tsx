import React from 'react'
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { AboutPayload } from '@/types'
import Link from 'next/link'

export interface AboutPageProps {
  data: AboutPayload | null
}

export function About({ data }: AboutPageProps) {
  const { edaGroup, iszsziGroup } = data ?? {}

  return (
    <>
      <div className=" flex flex-col gap-36">
        <article
          id="Eda"
          className="pl-4 pr-4 mb-16 lg:mb-0 lg:flex lg:flex-row  lg:gap-x-14 lg:justify-center lg:pt-32  "
        >
          {edaGroup && (
            <>
              <section className="md:w-2/3 lg:w-1/3 ">
                <div className="mt-8 mb-8 text-volcano-dust flex gap-8 items-baseline ">
                  <h1 className="text-6xl">{edaGroup.headingEda}</h1>
                  <h2 className="">{edaGroup.headingCaption}</h2>
                </div>
                <CustomPortableText
                  value={edaGroup.bioEda as PortableTextBlock[]}
                />
              </section>

              <section className="lg:pt-4 lg:w-1/3">
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
        {/* <div className="">
          <Link href="#Iszszi" className="p-4 float-right">
            isz szi studio ↓
          </Link>
        </div> */}

        <article
          id="Iszszi"
          className="pl-4 pr-4 lg:flex lg:flex-row lg:gap-x-14  lg:justify-center lg:pb-64 "
        >
          {iszsziGroup && (
            <>
              <section className="md:w-2/3 lg:w-1/3 ">
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
