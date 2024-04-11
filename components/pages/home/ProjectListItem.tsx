'use client'
import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import type { showcaseProjects } from '@/types'

interface ProjectProps {
  project: showcaseProjects
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div className="">
      <div className="left-0 sm">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper=""
        />
      </div>
    </div>
  )
}
