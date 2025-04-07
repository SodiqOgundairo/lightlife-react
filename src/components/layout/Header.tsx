import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import logo from "../../assets/img/LLC_Logo.png"
import { Link, NavLink } from "react-router-dom"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const [scrolled, setScrolled] = useState(false)

  // Handle scroll for sticky navbar
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 10)
  //   }
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll)
  // }, [])

  // Nav items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "Sermons", path: "/sermons" },
    { name: "Our Programmes", path: "/our-programmes" },
    { name: "Testimonies", path: "/testimonies" },
  ]

  return (
    <header className="fixed w-full z-50 md:py-2 md:px-36">
    <div className= 'transition-all duration-300 md:rounded-full shadow-sm bg-gray-1/20 backdrop-blur-lg px-4 py-2'>
    <div className="container mx-auto flex justify-between items-center relative"> 
      {/* Logo */}
      <Link to="/" className="flex items-center">
        <img
          src={logo}
          alt="LLC Logo"
          className="h-10"
        />
      </Link>
  
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "text-primary-600 border-b-2 border-primary-600"
                  : "text-gray-600 hover:text-primary-500"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
  
      {/* CTA Button */}
      <Link to={"/support"}
        className="btn-pry hidden md:block"
        
      >
        Support
      </Link >
  
      {/* Mobile menu button */}
      <button
        className="md:hidden text-gray-700  focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </div>
  
    {/* Mobile menu */}
    {isOpen && (
      <div className="md:hidden" >
        <div className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-primary-50 text-primary-600"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
          {/* <Link to='/' className="btn-pry">
            Support
          </Link> */}
        </div>
      </div>
    )}
    </div>
  </header>
  )
}

export default Header
