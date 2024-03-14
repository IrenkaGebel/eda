import React from 'react'

import { ColophonPayload } from '@/types'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import { PortableTextBlock } from 'sanity'

export interface ColophonPageProps {
  data: ColophonPayload | null
}

export function Colophon({ data }: ColophonPageProps) {
  const { title, info, revision, typeUsed } = data ?? {}

  return (
    console.log(data),
    (
      <>
        <CustomPortableText value={info as PortableTextBlock[]} />
        {revision}
        {typeUsed}
      </>
    )
  )
}
export default Colophon
