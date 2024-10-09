import React, {FC} from 'react'
interface Iprops {
    header:string,
    description: string,
    nimi:number,
    haveBorder?: boolean
}

const QuarterBox:FC<Iprops> = ({header, description, nimi, haveBorder=true}) => {
    return (

            <div className={` px-8 py-10 relative flex flex-col items-stretch flex-1 rounded-md ${haveBorder && "border"} `}>
                <h4 className='font-bold text-lg'>{header}</h4>
                <p className='mt-2 text-slate-600'>{description}</p>
                <span className='absolute -top-8 right-10 text-[150px] font-bold -z-10 text-gray-200'>{nimi}</span>
            </div>

    )
}

export default QuarterBox