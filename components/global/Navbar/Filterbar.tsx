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
      <div
        className="z-50 flex gap-6 justify-center items-center bg-butter-bun bottom-0 fixed text-volcano-dust font-regular w-full text-sm 
      lg:pt-2 lg:pb-2 lg:pl-3.5 lg:flex lg:justify-start lg:text-4xl lg:bottom-4 lg:left-4 lg:max-w-fit"
      >
        {!activeFilter && (
          <button
            className="p-4 lg:p-0 lg:pl-2 lg:pr-4 hidden lg:block lg:text-6xl"
            onClick={toggleFilters}
          >
            {'VIEW'}
          </button>
        )}
        {activeFilter && <div className="p-2">{activeFilter}</div>}
        {activeFilter && (
          <div className="lg:p-1 lg:pr-6">
            <Link href={'/'} onClick={resetFilters}>
              –
            </Link>
          </div>
        )}

        {showFilters && (
          <>
            <div className="p-2 lg:p-0">
              <Link
                href={'/?filter=project'}
                onClick={() => handleFilterClick('PROJECTS')}
              >
                PROJECTS
              </Link>
            </div>
            <div className="p=2 lg:p-0">
              <Link
                href={'/?filter=sketches'}
                onClick={() => handleFilterClick('SKETCHES')}
              >
                SKETCHES
              </Link>
            </div>
            <div className="p-2 lg:p-0 lg:pr-4">
              <Link
                href={'/?filter=project&by=isz-szi-studio'}
                onClick={() => handleFilterClick('ISZ SZI STUDIO')}
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
