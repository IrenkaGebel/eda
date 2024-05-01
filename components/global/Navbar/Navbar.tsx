'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="z-50 flex flex-row justify-between bg-open-sky md:bg-transparent text-volcano-dust relative sticky top-0 font-medium text-sm ">
        <div className="italic pl-4 pt-2 lg:w-20 ">
          <Link className="p-2" href="/">
            <h1>home (of) eda</h1>
          </Link>
        </div>
        <div className="flex gap-6 p-2 md:flex md:flex-col md:gap-1 md:pr-4 md:text-right">
          <nav>
            <Link className="p-2" href="/about">
              about
            </Link>
          </nav>
          <nav>
            <Link className="p-2" href="/collaborators">
              for collaborators
            </Link>
          </nav>
          <nav>
            <Link className="p-2" href="/colophon">
              colophon
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
