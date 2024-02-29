import { CustomPortableText } from '@/components/shared/CustomPortableText'
import type { AboutPayload, PagePayload } from '@/types'

export interface AboutPageProps {
  data: AboutPayload | null
}

export function About({ data }: AboutPageProps) {
  const { title } = data ?? {}

  console.log(data)

  return <div className="pt-16 ">{title}</div>
  //   {edaGroup && (
  //     <h1>{edaGroup.title}</h1>
  //     <p>{edaGroup.bio}</p>
  //   )}
}

export default About
