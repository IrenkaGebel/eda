'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <div className="z-50 flex flex-row justify-between bg-butter-bun md:bg-transparent text-volcano-dust relative sticky top-0 font-medium text- ">
        <div className="italic pl-4 pt-2 lg:w-20 ">
          <Link className="" href="/">
            <h1>home (of) eda</h1>
          </Link>
        </div>
        <div className="flex p-2 gap-0.5 sm:gap-6 md:flex md:flex-col md:gap-0.5 md:pr-4 md:text-right">
          <nav>
            <Link className="p-1" href="/about">
              about
            </Link>
          </nav>
          <nav>
            <Link className="p-1" href="/pop-up">
              pop-up
            </Link>
          </nav>
          <nav>
            <Link className="p-1" href="/credits">
              credits
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}
