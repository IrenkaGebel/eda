'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="flex flex-row justify-between bg-open-sky text-volcano-dust relative sticky top-0 font-medium text-sm">
        <div className="italic p-2">
          <Link href="/">
            <h1>home (of) eda</h1>
          </Link>
        </div>
        <div className="flex gap-6 p-2 ">
          <nav>
            <Link href="/about">about</Link>
          </nav>
          <nav>
            <Link href="/Collaborators">for collaborators</Link>
          </nav>
          <nav>
            <Link href="/colophon">colophon</Link>
          </nav>
        </div>
      </div>
    </>
  )
}
