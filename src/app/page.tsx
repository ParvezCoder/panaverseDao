import CoreTracks from '@/components/widgets/CoreTracks'
import Hero from '@/components/widgets/Hero'
import ProgramOutcome from '@/components/widgets/ProgramOutcome'
import SpecialTracks from '@/components/widgets/SpecialTracks'
import React from 'react'
function page() {
  return (
    <>
      <main className='max-w-screen-xl mx-auto  px-3'>
        <Hero />
        <CoreTracks />
        <SpecialTracks />
        <ProgramOutcome />
      </main>
    </>
  )
}

export default page