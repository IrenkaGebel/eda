'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Filterbar() {
  const [showAll, setShowAll] = useState(true)

  return (
    <>
      <div className="flex justify-between-8 bg-yellow-200 left-0 bottom-0 fixed text-xs">
        <div className="p-2">
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? 'PROJECTS' : 'PROJECTS'}
          </button>
          {showAll && (
            <div>
              <p>shwoww</p>
            </div>
          )}
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
