import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { loadCollaborators } from '@/sanity/loader/loadQuery'
import CollaboratorsPage from '@/components/pages/Collaborators/CollaboratorsPage'

export const metadata: Metadata = {
  title: 'Collaborators',
}

export default async function CollaboratorsRoute() {
  const initial = await loadCollaborators()

  if (!initial.data) {
    notFound()
  }

  return <CollaboratorsPage data={initial.data} />
}
