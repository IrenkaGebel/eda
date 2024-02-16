import '@/styles/index.css'

import { toPlainText } from '@portabletext/react'
import { Metadata, Viewport } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { Suspense } from 'react'

import { Navbar } from '@/components/global/Navbar/Navbar'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { loadHomePage, loadSettings } from '@/sanity/loader/loadQuery'
import { ColophonPage } from '@/components/pages/colophon/colophonPage'
import { ForCollaboratorsPage } from '@/components/pages/forCollaborators/forCollaboratorsPage'
import { AboutPage } from '@/components/pages/about/aboutPage'

const LiveVisualEditing = dynamic(
  () => import('@/sanity/loader/LiveVisualEditing'),
)

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: settings }, { data: homePage }] = await Promise.all([
    loadSettings(),
    loadHomePage(),
  ])

  const ogImage = urlForOpenGraphImage(settings?.ogImage)
  return {
    title: homePage?.title
      ? {
          template: `%s | ${homePage.title}`,
          default: homePage.title || 'Personal website',
        }
      : undefined,
    description: homePage?.overview
      ? toPlainText(homePage.overview)
      : undefined,
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#000',
}

export default async function IndexRoute({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="flex flex-row gap-x-4">
        <span className="">
          <Navbar />
        </span>
        <AboutPage />
        <ForCollaboratorsPage />
        <ColophonPage />

        <div className="">
          <Suspense>{children}</Suspense>
        </div>
      </div>
      {draftMode().isEnabled && <LiveVisualEditing />}
    </>
  )
}
