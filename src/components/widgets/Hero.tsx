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
          <h4 className='text-cyan-500 font-semibold text-lg mt-4 md:mt-0'>Governor initiative for Artifitial  intelligence and Computing (GIAIC)</h4>
          <h1 className='text-5xl sm:text-6xl font-bold '>Certified Web 3.0 and Metaverse Developer</h1>
          <p className='mt-6 text-lg text-slate-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe fugit harum at molestias debitis possimus enim.
            Nihil expedita quo omnis magnam </p>
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