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
  const { project, odd } = props

  return (
    <div className={` ${odd && ''}`}>
      <div className="left-0 sm">
        <ImageBox
          image={project.coverImage}
          alt={`Cover image from ${project.title}`}
          classesWrapper=""
        />
      </div>
      <div className="">
        <TextBox project={project} />
      </div>
    </div>
  )
}

function TextBox({ project }: { project: showcaseProjects }) {
  return (
    <div className="flex-col ">
      <div>
        {/* Title */}
        <div className="">{project.title}</div>
        {/* Overview  */}
        <div className="">
          <CustomPortableText value={project.overview as PortableTextBlock[]} />
        </div>
      </div>
      {/* Tags */}
      <div className="">
        {project.tags?.map((tag, key) => (
          <div className="" key={key}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}
