import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import ColophonPage from '@/components/pages/colophon/ColophonPage'
import { loadColophon } from '@/sanity/loader/loadQuery'

export const metadata: Metadata = {
  title: 'credits',
}

export default async function ColophonRoute() {
  const initial = await loadColophon()

  if (!initial.data) {
    notFound()
  }

  return <ColophonPage data={initial.data} />
}
