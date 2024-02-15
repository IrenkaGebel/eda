import { CustomPortableText } from '@/components/shared/CustomPortableText'
import about from '@/sanity/schemas/documents/about'

interface HeaderProps {

  title?: string
}
export function Header(props: HeaderProps) {
  const { title} = props
  return (
    <div className="text-sm">
      {/* Title */}
      {title && (
        <div className="left-0 ">
          {title}
        </div>
      )}
      {/* Description */}
    </div>
  )
}
