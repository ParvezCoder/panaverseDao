import React, {FC} from "react"
const Button: FC<{text:string}> = ({text}) => {
  return (
    <>
    <button 
    className=" text-white  py-3 px-7  rounded-full  bg-[#00616C] ">
      
      {text}</button>
    </>
  )
}

export default Button