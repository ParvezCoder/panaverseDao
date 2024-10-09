import React from 'react'
import Button from '../shared/Button'
import QuarterBox from '../shared/QuarterBox'

const coreTrackData = [
    {
        header: "Quarter I",
        description: "CS-101: Object-Oriented Programming using TypeScript",
        num: 1
    },
    {
        header: "Quarter II",
        description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform  ",
        // and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
        num: 2
    },
    {
        header: "Quarter III",
        description: "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
        num: 3
    },
]

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
            <div className='flex gap-x-8 gap-y-4 my-20 flex-col items-stretch md:flex-row'>
                {
                    coreTrackData.map((ok, i) => (
                        < QuarterBox key = { i } header = { ok.header } nimi = { ok.num } description = { ok.description } />
                    ))

                   
                }

            </div>


        </section>
    )
}

export default CoreTracks