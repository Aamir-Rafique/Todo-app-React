import ARlogo from "../assets/logo-1.png"
import { Link } from "react-router-dom"


const Navbar = () => {

  // variable to store tailwind repeated classes for same elemnents
  const navLinkClasses =
    "text-[1.1rem] md:text-[1.3rem] px-[0.7rem] py-[0.24rem] md:px-[0.5rem] md:py-[0.5rem] rounded transition duration-200 text-white/80 hover:bg-[#5f52e7] hover:text-white";

  return (

    <nav className='flex items-center justify-between px-8 py-[0.3rem] shadow-md bg-gradient-to-r from-[#142c99] to-[#4d0c8e]' >
      <a href="https://aamirrafique.netlify.app/" target="_blank" rel="noopener" title="Visit Aamir Rafique's Portfolio" id="logo-link" > <img src={ARlogo} alt="Aamir Rafique Logo" id="logo-img" className="w-[4.5rem] pt-[3px] hover:animate-pulse ease-in-out infinite alternate md:pt-[7px]" /> </a>

      <Link><h1 className="text-[2.6rem] text-white/70 hover:text-white/90 md:text-[2rem]">Todo List</h1></Link>



      <div className="flex gap-8 md:gap-[0.6rem]">
        <Link to="/" className={navLinkClasses}>Home</Link>
        <Link to="/favorites" className={navLinkClasses}>Favorites</Link>
      </div>


    </nav>

  )
}

export default Navbar
