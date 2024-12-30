import logo from '@/assets/images/logo.png'
import ThemeToggle from '@/components/ThemeToggle'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const TopNavbar = () => {
  const [open, setOpen] = useState<boolean>(false)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 80)
    })
  }, [])
  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="flex w-screen flex-col">
      <nav
        id="nav"
        className={`${
          scroll ? 'border-2 border-gray-200 bg-gray-200' : 'bg-transparent'
        } fixed z-[999] flex w-full items-center justify-center px-4 text-gray-700`}
        // "fixed border-b py-8 md:border-b-0"
        role="navigation">
        <div className="md:flex-no-wrap container flex w-screen flex-wrap items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-16" />
            <div className="ms-2 flex gap-3 text-xl uppercase text-blue-600">
              Learning
              <p className="text-pink-500">English</p>
            </div>
          </a>
          {/* menu */}
          <div
            id="menu"
            className={`h-0 opacity-0 transition-all duration-300 ease-out md:flex md:w-auto md:flex-grow md:items-center md:opacity-100 md:transition-none ${open && 'navbar-show'}`}>
            <ul
              id="ulMenu"
              className="flex-co ml-[80%] mt-5 flex duration-300 ease-out sm:transition-none md:mt-0 md:flex-row">
              <li>
                <a
                  href="/"
                  className="font-secondary block p-3 text-sm font-medium uppercase hover:text-blue-500 dark:text-blue-600 lg:px-6"
                  title="">
                  Home
                </a>
              </li>
              <li>
                <a
                  className="font-secondary block p-3 text-sm font-medium uppercase text-black/70 hover:text-blue-500 dark:text-blue-600 lg:px-6"
                  href="#demos"
                  title="About">
                  Demos
                </a>
              </li>
            </ul>
          </div>
          <ThemeToggle />
        </div>
        {/* hamberger meno */}
        <div className="ml-auto md:hidden">
          <button
            className="flex items-center rounded "
            type="button"
            onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default TopNavbar
