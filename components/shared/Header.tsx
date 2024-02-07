import { CustomPortableText } from '@/components/shared/CustomPortableText'

interface HeaderProps {

  title?: string
}
export function Header(props: HeaderProps) {
  const { title} = props
  return (
    <div className="text-sm">
      {/* Title */}
      {title && (
        <div className="left-0 tracking-tight md:text-5xl">
          {title}
        </div>
      )}
      {/* Description */}
    </div>
  )
}
