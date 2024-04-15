'use client'

import ImageBox from '@/components/shared/ImageBox'
import type { showcaseProjects } from '@/types'

interface ProjectProps {
  project: showcaseProjects
  odd: number
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div className="flex justify-center">
      <div className="">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          size={'80vw'}
        />
      </div>
    </div>
  )
}
