import Link from 'next/link'

export default function Filterbar() {
  return (
    <>
      <div className="flex justify-between-8 bg-yellow-200 left-0 bottom-0 absolute text-xs">
        <div className="p-2">
          <Link href="#ShowcaseProjects">PROJECTS</Link>
        </div>
        <div className="p-2">
          <Link href="#showcaseSketches">SKETCHES</Link>
        </div>
        <div className="p-2">
          <Link href="#showcaseIszszi">ISZ SZI STUDIO</Link>
        </div>
        <button className="italic underline p-2">all</button>
      </div>
    </>
  )
}
