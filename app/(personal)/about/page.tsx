import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import AboutPage from '@/components/pages/about/AboutPage'
import { loadAbout } from '@/sanity/loader/loadQuery'

export const metadata: Metadata = {
  title: 'about',
}

export default async function AboutRoute() {
  const initial = await loadAbout()

  if (!initial.data) {
    notFound()
  }

  return <AboutPage data={initial.data} />
}
