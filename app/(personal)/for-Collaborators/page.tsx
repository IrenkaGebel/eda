import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { loadForCollaborators } from '@/sanity/loader/loadQuery'

export const metadata: Metadata = {
  title: 'forCollaborators',
}

export default async function forCollaboratorsRoute() {
  const initial = await loadForCollaborators()

  if (!initial.data) {
    notFound()
  }

  return <forCollaboratorsPage data={initial.data} />
}
