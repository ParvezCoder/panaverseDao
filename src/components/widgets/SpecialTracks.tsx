"use client"
import React, { useState } from 'react'
import QuarterBox from '../shared/QuarterBox'
import ai from "@/assets/ai.png"
import Image from 'next/image'
import web from "../../assets/web.png"
export const programData = [
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
        image: web,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3- 351: Developing Smart Contracts and Planet - Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
        image: web,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3- 351: Developing Smart Contracts and Planet - Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
        image: web,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3- 351: Developing Smart Contracts and Planet - Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
        image: web,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3- 351: Developing Smart Contracts and Planet - Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },
    
    {
        slug: "ai",
        header: "Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quarters: [
            {
                header: "Quarter IV",
                description: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },
            {
                header: "Quarter V",
                description: "AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "wmd",
        header: "Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences",
        image: web,
        quarters: [
            {
                header: "Quarter IV",
                description: "W3- 351: Developing Smart Contracts and Planet - Scale Web 3.0 Dapps",
                number: 4
            },
            {
                header: "Quarter V",
                description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
                number: 5
            }
        ]
    },


]
const SpecialTracks = () => {

    const [selectedItem, setSelectedItem] = useState("wmd")
    const selectedItemData = programData.find((items) => items.slug === selectedItem)

    return (

        <section className='mt-8 sm:mt-14 md:mt-16 lg:mt-28 '>
            {/* header */}
            <div>
                <h2 className='sm:text-lg md:text-3xl lg:text-5xl  font-bold whitespace-pre'>Specialized Tracks</h2>
                <p className='mt-3 text-xl text-slate-800 text-center max-w-screen-sm sm:text-start'>After completing the first three quarters the participants will select one or more specializations consisting of two courses each: </p>
            </div>
            <div className='mt-10 flex gap-x-6 gap-y-6 flex-col-reverse lg:flex-row'>
                {/* content left */}
                <div className=' border shadow-xl border-slate-200 self-start  rounded-3xl p-8 basis-8/12 sticky top-20'>
                    <h4 className='text-teal-700 text-lg font-medium'>Specialized Program</h4>
                    <h3 className='text-2xl font-bold'>{selectedItemData?.header}</h3>
                    <p className='text-lg text-slate-600 mt-2 '>{selectedItemData?.description}</p>
                    <button className='text-teal-700 text-xl mt-4 flex underline gap-x-2  items-end'>Learn More
                        <svg className='mb-1.5' width="10" height="13" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                        </svg>
                    </button>
                    <div className='flex gap-x-8 gap-y-4 flex-1 my-20 flex-col  items-stretch sm:flex-row'>
                        {selectedItemData?.quarters.map((items) =>

                            <QuarterBox
                                key={items.number}
                                description={items.description}
                                header={items.header}
                                nimi={items.number}
                                haveBorder={false} />
                        )}



                    </div>
                </div>

                {/* content right */}
                <div className='px-4 py-6 space-y-4  basis-4/12 '>
                    {programData.map((items) =>
                    (
                        <div onClick={() => setSelectedItem(items.slug)} key={items.slug} className='flex gap-x-4    items-center  cursor-pointer'>
                            <div className='flex-shrink-0'>
                                {/* <div className='w-20 h-16 rounded bg-black'></div> */}
                                <Image src={items.image} alt={items.header} className='h-24 w-36 object-cover rounded-md' />
                            </div>
                            <div >
                                <h4 className='text-[#00616C] font-bold'>Specialized program</h4>
                                <h3 className='text-xl font-semibold'>{items.header}</h3>
                            </div>
                        </div>
                    )
                    )}


                </div>

            </div>

        </section>
    )
}

export default SpecialTracks