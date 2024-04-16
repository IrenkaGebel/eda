import { toPlainText } from '@portabletext/react'
import { Metadata, ResolvingMetadata } from 'next'
import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

import SketchesPage from '@/components/pages/sketches/SketchesPage'
import { urlForOpenGraphImage } from '@/sanity/lib/utils'
import { generateStaticSlugs } from '@/sanity/loader/generateStaticSlugs'
import { loadSketches } from '@/sanity/loader/loadQuery'

type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { data: sketches } = await loadSketches(params.slug)
  const ogImage = urlForOpenGraphImage(sketches?.coverImage)

  return {
    title: sketches?.title,
    description: sketches?.sketchesInfo
      ? toPlainText(sketches.sketchesInfo)
      : (await parent).description,
    openGraph: ogImage
      ? {
          images: [ogImage, ...((await parent).openGraph?.images || [])],
        }
      : {},
  }
}

export function generateStaticParams() {
  return generateStaticSlugs('sketches')
}

export default async function ProjectSlugRoute({ params }: Props) {
  const initial = await loadSketches(params.slug)

  // if (draftMode().isEnabled) {
  //   return <SketchesPreview params={params} initial={initial} />
  // }

  if (!initial.data) {
    notFound()
  }

  return <SketchesPage data={initial.data} />
}
