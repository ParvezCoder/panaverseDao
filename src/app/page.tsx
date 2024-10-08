import CoreTracks from '@/components/widgets/CoreTracks'
import Hero from '@/components/widgets/Hero'
import React from 'react'
function page() {
  return (
    <>
      <main className='max-w-screen-xl mx-auto  px-3'>
        <Hero />
        <CoreTracks/>
      </main>
    </>
  )
}

export default page