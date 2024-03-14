'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between bg-blue-200 relative">
        <div className="italic p-2">
          <Link href="/">
            <h1>home (of) eda</h1>
          </Link>
        </div>
        <div className="flex gap-2 p-2 ">
          <nav>
            <Link href="/about">about</Link>
          </nav>
          <nav>
            <Link href="/for-Collaborators">for collaborators</Link>
          </nav>
          <nav>
            <Link href="/colophon">colophon</Link>
          </nav>
        </div>
      </div>
    </>
  )
}
