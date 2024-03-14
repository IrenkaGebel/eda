import React from 'react'

import { ColophonPayload } from '@/types'

export interface ColophonPageProps {
  data: ColophonPayload | null
}

export function Colophon({ data }: ColophonPageProps) {
  const { title, info, revision, typeUsed } = data ?? {}

  return (
    console.log(data),
    (
      <>
        {revision}
        {typeUsed}
      </>
    )
  )
}
export default Colophon
