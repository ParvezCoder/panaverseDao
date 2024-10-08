import React from 'react'
import Button from '../shared/Button'
import Quarter from '../shared/Quarter'

const CoreTracks = () => {
    const header = "Core Courses\n(Common in All Specialization)"
    return (
        <section className='mt-8 sm:mt-14 md:mt-16 lg:mt-28'>
            <div className='max-w-screen-md'>
                <h4 className='text-cyan-500 text-center sm:text-start font-semibold text-lg mt-4 md:mt-0'>Program of studies</h4>
                <h2 className='sm:text-lg md:text-3xl lg:text-5xl  font-bold whitespace-pre'>{header}</h2>
                <p className='mt-3 text-xl text-slate-800 text-center sm:text-start'>Every participant of the program will start by completing the following three core courses:</p>
                <div className='mt-4'>
                    <Button text="Learn More" />
                </div>
            </div>
            <div className=' flex gap-5 flex-col  md:flex-row my-20'>
                <Quarter heading="Quarter I" paragraph="CS-101: Object-Oriented Programming using TypeScript" number={1} />
                <Quarter heading="Quarter II" paragraph="CS-101: Object-Oriented Programming using TypeScript" number={2} />
                <Quarter heading="Quarter III" paragraph="CS-101: Object-Oriented Programming using TypeScript"
                    number={3} />
            </div>
           



        </section>
    )
}

export default CoreTracks