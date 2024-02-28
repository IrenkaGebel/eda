'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between bg-blue-200 ">
        <div className="italic p-2">
          <Link href="/">
            <h1>home (of) eda</h1>
          </Link>
        </div>
        <div className="flex gap-2 p-2 ">
          <nav>
            <Link href="/about/page">about</Link>
          </nav>
          <nav>
            <Link href="/for-Collaborators/page">for collaborators</Link>
          </nav>
          <nav>
            <Link href="/colophon/page">colophon</Link>
          </nav>
        </div>
      </div>
    </>
  )
}
