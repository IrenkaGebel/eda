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
    setShowFilters(true)
  }

  return (
    <>
      <div className="flex justify-center items-center bg-butter-bun bottom-0 fixed text-volcano-dust font-regular w-full text-sm">
        {!activeFilter && (
          <button className="p-4 hidden" onClick={toggleFilters}>
            {'VIEW'}
          </button>
        )}
        {activeFilter && <div className="p-2">{activeFilter}</div>}
        {activeFilter && (
          <div className="">
            <button onClick={resetFilters}>–</button>
          </div>
        )}

        {showFilters && (
          <>
            <div className="p-2">
              <Link
                href={'/?filter=project'}
                onClick={() => handleFilterClick('PROJECTS')}
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
      </div>
    </>
  )
}
