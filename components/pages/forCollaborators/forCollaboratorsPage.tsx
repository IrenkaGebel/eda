import React from 'react'

import { forCollaboratorsPayload } from '@/types'

export interface forCollaboratorsPageProps {
  data: forCollaboratorsPayload | null
}

export function forCollaborators({ data }: forCollaboratorsPageProps) {
  const { title } = data ?? {}

  return (
    <>
      <p>aaaa</p>
    </>
  )
}
export default forCollaborators
