import { AboutPagePayload } from '@/types'

import { CustomPortableText } from './shared/CustomPortableText'

type AboutLayoutProps = {
  data: AboutPagePayload | null
}

export async function AboutLayout({ data }: AboutLayoutProps) {
  const { _id, title, slug, content } = data ?? {}

  return (
    <div className="pt-header container mx-auto font-medium">
      <div className="about w-full flex flex-row gap-8">
        <div className="w-1/3 space-y-8">
          {highlightedContent && (
            <p className="text-2xl">{highlightedContent}</p>
          )}
          {content && <CustomPortableText value={content} />}
        </div>
      </div>
    </div>
  )
}
