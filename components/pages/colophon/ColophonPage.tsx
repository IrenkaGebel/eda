import React from 'react'

import { ColophonPayload } from '@/types'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { PortableTextBlock } from 'sanity'

export interface ColophonPageProps {
  data: ColophonPayload | null
}

export function Colophon({ data }: ColophonPageProps) {
  const { info, revision, typeUsed } = data ?? {}

  return (
    <>
      <div className="text-coral-sweets p-4 h-dvh text-right flex flex-col justify-evenly">
        <div className=" ">
          {' '}
          <CustomPortableText value={info as PortableTextBlock[]} />
        </div>
        <div>
          <p>{revision}</p>
        </div>
        <div>
          <p>{typeUsed}</p>
        </div>
      </div>
    </>
  )
}
export default Colophon
