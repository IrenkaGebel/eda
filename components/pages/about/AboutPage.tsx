import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { PagePayload } from '@/types'

export interface AboutPageProps {
  data: PagePayload | null
}

export function About({ data }: AboutPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { body, overview, title } = data ?? {}

  return (
    <div>
      <div className="mb-14">
        {/* Body */}
        {body && (
          <CustomPortableText
            paragraphClasses="font-serif max-w-3xl text-gray-600 text-xl"
            value={body}
          />
        )}
      </div>
      <div className="absolute left-0 w-screen" />
    </div>
  )
}

export default About
