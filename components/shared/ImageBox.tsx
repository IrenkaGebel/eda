import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt?: string
  width?: number
  height?: number
  size?: string
  classesWrapper?: string
  'data-sanity'?: string
}

export default function ImageBox({
  image,
  alt = 'Cover image',
  width = 1000,
  height = 1000,
  size = '',
  classesWrapper,
  ...props
}: ImageBoxProps) {
  const imageUrl = image && urlForImage(image)?.url()

  return (
    <div className={`${classesWrapper}`} data-sanity={props['data-sanity']}>
      {imageUrl && (
        <Image
          className={` ${classesWrapper}`}
          alt={alt}
          width={width}
          height={height}
          sizes={size}
          src={imageUrl}
          objectFit="cover"
        />
      )}
    </div>
  )
}
