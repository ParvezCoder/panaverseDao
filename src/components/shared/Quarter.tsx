import React, {FC} from 'react'

    const Quarter: FC<{heading:string, paragraph:string, number:number, id?:number}> = ({heading,paragraph,number,id}) => {
    return (


        <section>
            <div className='border px-8 py-10 relative  rounded-md  '>
                <h4 className='font-bold text-lg'>{heading}</h4>
                <p className='mt-2 text-slate-600'> {paragraph}</p>
                <span className='absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200'>{number}</span>
                <span className='absolute top-0 right-10 text-9xl font-bold -z-10 text-gray-200'>{id}</span>

            </div>
        </section>

    )
}

export default Quarter