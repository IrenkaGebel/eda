import React from 'react'
import { PortableTextBlock } from 'sanity'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { ColophonPayload } from '@/types'

export interface ColophonPageProps {
  data: ColophonPayload | null
}

export function Colophon({ data }: ColophonPageProps) {
  const { info, revision, typeUsed } = data ?? {}

  return (
    <>
      <div className="text-coral-sweets p-2 h-dvh text-right flex flex-col justify-evenly text-base font-light">
        <div className=" ">{info && <CustomPortableText value={info} />}</div>
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
