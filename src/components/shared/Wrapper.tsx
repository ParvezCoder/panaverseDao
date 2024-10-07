import React, {FC} from 'react'

const Wrapper:FC <{children:React.ReactNode}> = ({children})=> {
  return (
    <div className='max-w-screen-2xl mx-auto bg-slate-600'>
        {children}
    </div>
  )
}

export default Wrapper