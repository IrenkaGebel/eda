'use client'
import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { showcaseProjects } from '@/types'

interface ProjectProps {
  project: showcaseProjects
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props

  return (
    <div className="text-3xl font-light lg:justify-center">
      <div className="flex flex-wrap pr-8 pl-8 lg:pr-32 lg:pl-32 gap-4  ">
        <h1 className="italic">{project.title}</h1>
        <div className="text-sm font-normal ">{project.date} </div>
        {/* for whom and where */}
        <div>
          {project.forWhomAndWhere && (
            <CustomPortableText value={project.forWhomAndWhere} />
          )}
        </div>

        {/* projectInfo */}
        <div className="">
          {project.projectInfo && (
            <CustomPortableText value={project.projectInfo} />
          )}
        </div>
      </div>
      {/* coverImage */}
      <div className="flex justify-center pb-16 pt-8 ">
        <div className="w-72">
          <ImageBox
            image={project.coverImage}
            alt={`Cover image from ${project.title}`}
            size="(max-width: 768px) 100vw, (max-width: 1000px) 80vw, 40vw"
          />
        </div>
      </div>
    </div>
  )
}
