// 'use client'
// import { EncodeDataAttributeCallback } from '@sanity/react-loader'
// import React, { useState } from 'react'

// import { CustomPortableText } from '@/components/shared/CustomPortableText'
// import { CollaboratorsPayload } from '@/types'

// export interface CollaboratorsPageProps {
//   data: CollaboratorsPayload | null
//   encodeDataAttribute?: EncodeDataAttributeCallback
// }

// export function Collaborators({ data }: CollaboratorsPageProps) {
//   const [showSection, setShowSection] = useState(false)
//   const { intro, parts } = data ?? {}
//   const toggleSection = () => {
//     setShowSection(!showSection)
//   }
//   return (
//     <>
//       {/* intro */}
//       <div className="p-8">
//         <article className="text-5xl font-light italic pt-4 pb-16 ">
//           <CustomPortableText value={intro} />
//         </article>

//         {parts && (
//           <>
//             {/* part 1 */}

//             <div className="flex flex-row justify-between border border-black">
//               <button className="p-4" onClick={toggleSection}>
//                 {parts.headingOne}
//               </button>
//               <h2 className="p-4 text-slate-600"> {parts.wordCountOne}</h2>
//             </div>
//             {showSection && (
//               <section className="p-4 text-justify">
//                 <CustomPortableText
//                   paragraphClasses=""
//                   value={parts.contentOne}
//                 />
//               </section>
//             )}
//             {/* part 2 */}
//             <div className="flex flex-row justify-between border border-black">
//               <button className="p-4" onClick={toggleSection}>
//                 {parts.headingTwo}
//               </button>
//               <h2 className="p-4 text-slate-600"> {parts.wordCountTwo}</h2>
//             </div>
//             {showSection && (
//               <section className="p-4 text-justify">
//                 <CustomPortableText
//                   paragraphClasses=""
//                   value={parts.contentTwo}
//                 />
//               </section>
//             )}
//             {/* part 3 */}
//             <div className="flex flex-row justify-between border border-black">
//               <button className="p-4" onClick={toggleSection}>
//                 {parts.headingThree}
//               </button>
//               <h2 className="p-4 text-slate-600"> {parts.wordCountThree}</h2>
//             </div>
//             {showSection && (
//               <section className="p-4 text-justify">
//                 <CustomPortableText
//                   paragraphClasses=""
//                   value={parts.contentThree}
//                 />
//               </section>
//             )}
//             {/* part 4 */}
//             <div className="flex flex-row justify-between border border-black">
//               <button className="p-4" onClick={toggleSection}>
//                 {parts.headingFour}
//               </button>
//               <h2 className="p-4 text-slate-600"> {parts.wordCountFour}</h2>
//             </div>
//             {showSection && (
//               <section className="p-4 text-justify">
//                 <CustomPortableText
//                   paragraphClasses=""
//                   value={parts.contentFour}
//                 />
//               </section>
//             )}
//           </>
//         )}
//       </div>
//     </>
//   )
// }
// export default Collaborators
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
      <div className="p-4">
        <div className="flex flex-row justify-between border border-black">
          <button className="p-4" onClick={() => toggleSection(sectionId)}>
            {heading}
          </button>
          <h2 className="p-4 text-slate-600"> {wordCount}</h2>
        </div>
        {showSections[sectionId] && (
          <section className="p-4 text-justify">
            <CustomPortableText value={content} />
          </section>
        )}
      </div>
    </>
  )

  return (
    <>
      <div className="p-8">
        {data && (
          <>
            <article className="text-5xl font-light italic pt-4 pb-16 ">
              <CustomPortableText value={data.intro} />
            </article>

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
          </>
        )}
      </div>
    </>
  )
}

export default Collaborators
