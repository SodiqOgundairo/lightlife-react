import { useState } from "react"
import { FiMenu, FiX } from "react-icons/fi"
import { Link, NavLink, useNavigate } from "react-router-dom"
import CloudinaryImage from "../../utils/ImageItem"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const handleNavClick = (path: string) => {
    setIsOpen(false) // Close the menu on navigation
    navigate(path) // Navigate to the selected path
    window.scrollTo(0, 0) // Scroll to the top of the page
  }
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
    // { name: "Home", path: "/" },
    { name: "About Us", path: "/about-us" },
    { name: "DLD", path: "/daily-light-devotional" },
    { name: "Our Programmes", path: "/our-programmes" },
    { name: "Testimonies", path: "/testimonies" },
  ]

  return (
    <header className="fixed w-full z-50 md:py-2 md:px-8 lg:px-36">
      <div className="transition-all duration-300 md:rounded-full shadow-sm bg-gray-1/20 backdrop-blur-lg px-4 py-2">
        <div className="container mx-auto flex justify-between items-center relative">
          <Link to="/" className="flex items-center">
            <CloudinaryImage
              imageKey="churchLogo"
              className="h-10 hover:scale-200 transform transition-all duration-300 ease-linear"
              alt="Church Logo"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => handleNavClick(item.path)}
                className={({ isActive }) =>
                  ` px-3 py-2 text-sm font-medium transition-colors hover:scale-120  duration-300 ease-linear hover:text-purple-mid ${
                    isActive
                      ? "text-primary-600 border-b-2 border-purple-mid"
                      : "text-gray-2 hover:text-primary-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <Link to={"/support"} className="btn-pry hidden md:block ">
            Support
          </Link>

          <button
            className="md:hidden text-gray-2  focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-2 pb-4 space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-primary-50 text-primary-600"
                        : "text-darkPurple hover:bg-gray-1"
                    }`
                  }
                  // onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
              <Link to="/" className="btn-pry">
                Support
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
