import React from 'react'
import QuarterBox from '../shared/QuarterBox'

const SpecialTracks = () => {
    return (
        <section className='mt-8 sm:mt-14 md:mt-16 lg:mt-28 '>
            {/* header */}
            <div>
                <h2 className='sm:text-lg md:text-3xl lg:text-5xl  font-bold whitespace-pre'>Specialized Tracks</h2>
                <p className='mt-3 text-xl text-slate-800 text-center sm:text-start'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
            </div>
            <div className='mt-10 flex gap-x-6 gap-y-6 flex-col md:flex-row'>
                {/* content left */}
                <div className=' border shadow-2xl border-slate-200  rounded-3xl p-8 basis-8/12'>
                    <h4 className='text-teal-700 text-lg '>Specialized Program</h4>
                    <h3 className='text-2xl font-bold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                    <p className='text-lg text-slate-600 mt-2'>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.
                    </p>
                    <button className='text-teal-700 text-xl mt-4 flex underline gap-x-2  items-end'>Learn More
                        <svg className='mb-1.5' width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                        </svg>
                    </button>
                    <div className='flex gap-x-8 gap-y-4 flex-1 my-20 flex-col items-stretch md:flex-row'>
                        <QuarterBox
                            description='W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform'
                            header='Quarter IV'
                            nimi={4}
                            haveBorder={false} />


                        <QuarterBox
                            description='W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform'
                            header='Quarter V'
                            nimi={5}
                            haveBorder={false} />

                    </div>
                </div>

                {/* content right */}
                <div className='px-4 py-6  bg-red-400  basis-4/12 '>
                    <div className='flex gap-x-4   items-center cursor-pointer'>
                        <div className=''>
                            <div className='w-20 h-16 rounded bg-black'></div>
                        </div>
                        <div>
                            <h4 className='text-[#00616C] font-bold'>Specialized Program</h4>
                            <h3 className='text-xl font-semibold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                        </div>
                    </div>
                    <div className='flex gap-x-4   items-center cursor-pointer'>
                        <div className=''>
                            <div className='w-20 h-16 rounded bg-black'></div>
                        </div>
                        <div>
                            <h4 className='text-[#00616C] font-bold'>Specialized Program</h4>
                            <h3 className='text-xl font-semibold'>Web 3.0 (Blockchain) and Metaverse Specialization</h3>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default SpecialTracks