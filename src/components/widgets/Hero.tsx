import React from 'react'
import Image from 'next/image'
import heroPoster from '/public/heroPoster.png'
import Button from '../shared/Button'

function Hero() {
  return (
    <section>
      <div className=' flex flex-col  md:flex-row items-center'>
        {/* left side */}
        <div className='flex-1'>
          <h4 className='text-cyan-500 text-center sm:text-start font-semibold text-lg mt-4 md:mt-0'>Governor initiative for Artifitial  intelligence and Computing (GIAIC)</h4>
          <h1 className=' text-3xl text-center sm:text-start  sm:text-3xl md:text-4xl lg:text-6xl font-bold '>Certified Web 3.0 and Metaverse Developer</h1>
          <p className='mt-6 text-lg text-slate-800 text-center sm:text-start'>A One and Quarter Years Panaverse DAO Earn as
            you Learn Program Getting Ready for the Next Generation of the Internet </p>
          <p className='mt-2 text-xl text-slate-800 text-center sm:text-start'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network
            Automation, and Bioinformatics Technologies</p>
          <div className='mt-6'>
            <Button text="Enroll Now" />
          </div>
        </div>
        {/* right side  */}
        <div className='flex-1'>
          <Image src={heroPoster} alt='hero pic' />
        </div>
      </div>

    </section>
  )
}

export default Hero