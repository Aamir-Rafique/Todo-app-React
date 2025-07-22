import ARlogo from "../assets/logo-1.png"
import { Link } from "react-router-dom"


const Navbar = () => {

  // variable to store tailwind repeated classes for same elemnents
  const navLinkClasses =
    "text-[1.1rem] lg:text-[1.3rem] px-[0.7rem] py-[0.24rem] lg:px-[0.5rem] lg:py-[0.5rem] rounded transition duration-200 text-white/80 hover:bg-[#5f52e7] hover:text-white";

  return (

    <nav className='flex items-center justify-between lg:px-8 py-[0.3rem] shadow-md bg-gradient-to-r from-[#142c99] to-[#4d0c8e]' >

      <a href="https://aamirrafique.netlify.app/" target="_blank" rel="noopener" title="Visit Aamir Rafique's Portfolio" id="logo-link" > <img src={ARlogo} alt="Aamir Rafique Logo" id="logo-img" className="ml-4 w-[3.6rem] lg:w-[4.5rem] pt-[3px] hover:animate-pulse ease-in-out infinite alternate lg:pt-[7px]" /> </a>

      <Link><h1 className="text-[1.5rem] mr-[50px] lg:mr-[110px] font-bold text-white/80 hover:text-white/100 lg:text-[2rem]">Todo  App</h1></Link>

      <div className="flex gap-8 lg:gap-[0.6rem] text-purple-800">......</div>

    </nav>

  )
}

export default Navbar
