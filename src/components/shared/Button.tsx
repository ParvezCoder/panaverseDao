import React, {FC} from "react"
const Button: FC<{text:string}> = ({text}) => {
  return (
    <>
    <button 
    className=" text-white  py-2 px-4 duration-300  rounded-full  bg-[#00616C] hover:scale-105 hover:shadow-2xl shadow-red-800  ">
      
      {text}</button>
    </>
  )
}

export default Button