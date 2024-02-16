import dynamic from 'next/dynamic'
import { draftMode } from 'next/headers'

import { loadSettings } from '@/sanity/loader/loadQuery'

export async function Navbar() {
  return (
    <>
      <div>
        <header>home of eda</header>
      </div>
    </>
  )
}
