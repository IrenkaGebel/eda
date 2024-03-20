'use client'
import type { PortableTextBlock } from '@portabletext/types'

import { CustomPortableText } from '@/components/shared/CustomPortableText'
import ImageBox from '@/components/shared/ImageBox'
import { showcaseSketches } from '@/types'

interface SketchProps {
  sketch: showcaseSketches
  odd: number
}

export function SketchListItem(props: SketchProps) {
  const { sketch, odd } = props

  return (
    <div className={` ${odd && ''}`}>
      <div className="left-0 sm">
        <ImageBox
          image={sketch.coverImage}
          alt={`Cover image from ${sketch.title}`}
          classesWrapper=""
        />
      </div>
      <div className="">
        <TextBox sketch={sketch} />
      </div>
    </div>
  )
}

function TextBox({ sketch }: { sketch: showcaseSketches }) {
  return (
    <div className="flex-col ">
      <div>
        {/* Title */}
        <div className="">{sketch.title}</div>
      </div>
      {/* Tags */}
      <div className="">
        {sketch.tags?.map((tag, key) => (
          <div className="" key={key}>
            #{tag}
          </div>
        ))}
      </div>
    </div>
  )
}
