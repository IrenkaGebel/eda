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
      <CustomPortableText value={info as PortableTextBlock[]} />
      <p>{revision}</p>
      <p>{typeUsed}</p>
    </>
  )
}
export default Colophon
