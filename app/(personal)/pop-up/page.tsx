import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import CollaboratorsPage from '@/components/pages/Collaborators/CollaboratorsPage'
import { loadCollaborators } from '@/sanity/loader/loadQuery'

export const metadata: Metadata = {
  title: 'pop-up',
}

export default async function CollaboratorsRoute() {
  const initial = await loadCollaborators()

  if (!initial.data) {
    notFound()
  }

  return <CollaboratorsPage data={initial.data} />
}
