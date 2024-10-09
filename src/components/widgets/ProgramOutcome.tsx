import Image from "next/image"
import React from 'react'
import icons from "../../assets/Polygon Icon.png"
import imi from "../../assets/Img.png"
const outComeData = ["Product Ownership", "Freelacing", "Global Marketing by Panaverse DAO", "Boosting Economy."]
const ProgramOutcome = () => {
    return (

        <section className="mt-16 md:mt-28">
            <div className='flex  lg:flex-row gap-8 items-center  flex-col-reverse '>
                {/* left image */}
                <div className="flex-1 ">
                    <Image src={imi} alt="imi" />
                </div>
                {/* right content */}
                <div className="flex-1 ">
                    <h2 className="font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl">The Outcome for Participants of the Program</h2>
                    <p className="mt-4 text-slate-600 text-lg">As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed
                        globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to
                        financial stability while contributing to the growth of Pakistans software exports.</p>
                        <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4">
                            {outComeData.map((item , i)=>(
                                <div key={i} className="  flex items-center space-x-4" >
                                    <Image src={icons} alt="Icons"/>
                                    <h2 className="font-medium text-lg">{item}</h2>
                                </div>
                            ))}
                        </div>
                </div>
            </div>

        </section>
    )
}

export default ProgramOutcome