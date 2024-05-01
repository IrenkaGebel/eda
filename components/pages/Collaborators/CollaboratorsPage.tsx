'use client'
import React, { useState } from 'react'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { CollaboratorsPayload } from '@/types'

export interface CollaboratorsPageProps {
  data: CollaboratorsPayload | null
}

export function Collaborators({ data }: CollaboratorsPageProps) {
  const [showSections, setShowSections] = useState<{ [key: string]: boolean }>(
    {},
  )

  const toggleSection = (sectionId: string) => {
    setShowSections((prevState) => ({
      ...prevState,
      [sectionId]: !prevState[sectionId],
    }))
  }

  const renderSection = (
    sectionId: string,
    heading: string,
    wordCount: string,
    content: any,
  ) => (
    <>
      <div className="p-4 lg:w-5/12">
        <div
          className=" border border-black flex flex-row justify-between"
          onClick={() => toggleSection(sectionId)}
        >
          <button className="p-4">{heading}</button>
          <h2 className="p-4 text-slate-600"> {wordCount}</h2>
        </div>
        {showSections[sectionId] && (
          <section className="p-4 text-justify ">
            <CustomPortableText value={content} />
          </section>
        )}
      </div>
    </>
  )

  return (
    <>
      <div className="p-8 lg:mb-36 lg:p-0 place-items-center">
        {data && (
          <>
            <article className="z-40 text-5xl font-light italic pt-4 pb-16 lg:ml-12 lg:mr-12 lg:text-4xl ">
              <CustomPortableText value={data.intro} />
            </article>
            <div className="">
              {/* <div className="lg:border lg:border-black lg:rotate-90 lg:pt-2  lg:border-l-0 lg:border-r-0 lg:border-slate-60 "></div> */}
            </div>
            <div className="lg:flex lg:flex-col items-center lg:gap-4 ">
              {data.parts && (
                <>
                  {renderSection(
                    'part1',
                    data.parts.headingOne,
                    data.parts.wordCountOne,
                    data.parts.contentOne,
                  )}

                  {renderSection(
                    'part2',
                    data.parts.headingTwo,
                    data.parts.wordCountTwo,
                    data.parts.contentTwo,
                  )}

                  {renderSection(
                    'part3',
                    data.parts.headingThree,
                    data.parts.wordCountThree,
                    data.parts.contentThree,
                  )}

                  {renderSection(
                    'part4',
                    data.parts.headingFour,
                    data.parts.wordCountFour,
                    data.parts.contentFour,
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Collaborators
