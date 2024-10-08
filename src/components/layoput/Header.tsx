import Image from "next/image"
import logo from "/public/logo.png"
function Header() {
  return (


      <header className="flex  justify-between max-w-screen-xl mx-auto bg-red-100  sticky top-0  px-2 items-center ">
        {/* logo */}
        <div>

          <Image src={logo} alt="logo" />
        </div>
        {/* navigation bar */}
        <ul className="flex space-x-8 font-medium">
          <li>Home</li>
          <li>Courses</li>
        </ul>
      </header >


  )
}

export default Header