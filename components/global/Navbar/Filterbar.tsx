'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Filterbar() {
  const [showFilters, setShowFilters] = useState(true)
  const [activeFilter, setActiveFilter] = useState(null)

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const handleFilterClick = (string) => {
    setActiveFilter(string)
    setShowFilters(!showFilters)
  }

  const resetFilters = () => {
    setActiveFilter(null)
  }

  return (
    <>
      <div className="flex justify-between-8 items-center bg-yellow-200 left-0 bottom-0 fixed text-xL p-4">
        <button className="p-4" onClick={toggleFilters}>
          {'VIEW'}
        </button>
        {activeFilter && <div className="p-2">{activeFilter}</div>}

        {showFilters && (
          <>
            <div className="p-2">
              <Link
                href={'/?filter=project'}
                onClick={() => handleFilterClick('PROJECT')}
              >
                PROJECTS
              </Link>
            </div>
            <div className="p=2">
              <Link
                href={'/?filter=sketches'}
                onClick={() => handleFilterClick('SKETCHES')}
              >
                SKETCHES
              </Link>
            </div>
            <div className="p-2">
              <Link
                href={'/?filter=project&by=isz-szi-studio'}
                onClick={() => handleFilterClick('ISZ-SZI-STUDIO')}
              >
                ISZ SZI STUDIO
              </Link>
            </div>
          </>
        )}
        {activeFilter && (
          <div className="">
            <button onClick={resetFilters}>–</button>
          </div>
        )}
      </div>
    </>
  )
}
