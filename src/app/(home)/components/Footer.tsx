import { currentYear, developedBy } from '@/app/common/constants'

import img from '@/assets/images/logo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="font-sans relative bg-gray-200 from-gray-900 via-gray-700 to-gray-900 px-10 pb-6 pt-12 tracking-wide dark:bg-neutral-900">
      <div className="mx-auto w-screen">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-sm font-semibold dark:text-white uppercase text-gray-800">
              {developedBy}
            </h2>
            <ul className="space-y-3 ">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-all dark:text-white hover:text-gray-800">
                  {currentYear}
                </a>
              </li>
              <li>
                <a
                  href="/Live-classes"
                  className="text-sm text-gray-600 transition-all dark:text-white hover:text-gray-800">
                  Live classes
                </a>
              </li>
              <li>
                <a
                  href="/Activate-your-English"
                  className="text-sm text-gray-600 transition-all dark:text-white hover:text-gray-800">
                  Activate your English
                </a>
              </li>
              <li>
                <a
                  href="/IELTS-preparation"
                  className="text-sm text-gray-600 transition-all dark:text-white hover:text-gray-800">
                  IELTS preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase dark:text-white text-gray-800">
              Follow Us
            </h2>
            <ul className="space-y-3">
              <li className="flex flex-grow gap-2">
                <FaGithub />
                <a
                  href="https://github.com/firoozmandy"
                  className="text-sm text-gray-600 transition-all dark:text-white hover:text-gray-800">
                  Github
                </a>
              </li>
              <li className="flex flex-grow gap-2">
                <FaLinkedin className="-mt-1 h-6 text-blue-800" />

                <a
                  href="https://www.linkedin.com/in/marya-firoozmandi/"
                  className="text-sm dark:text-white text-gray-600 transition-all hover:text-gray-800">
                  linkedin
                </a>
              </li>
             
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold dark:text-white uppercase text-gray-800">
              School
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm dark:text-white text-gray-600 transition-all hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm dark:text-white text-gray-600 transition-all hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800 dark:text-white">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="ml-[-40px] flex items-center max-sm:-order-1 lg:-mt-10 lg:justify-center">
            <Link to="/">
              <img src={img} alt="logo" className="w-40 sm:w-56" />
            </Link>
          </div>
        </div>

        <hr className="-ml-10 mb-6 mt-12 border-gray-600" />

        <div className="flex flex-wrap gap-6 sm:justify-between">
          <div className="flex space-x-5">
            <a
              href="https://github.com/firoozmandy"
              className="text-sm text-gray-600 transition-all hover:text-gray-800">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/marya-firoozmandi/"
              className="text-sm text-gray-600 transition-all hover:text-gray-800">
              <FaLinkedin />
            </a>
          </div>

          <p className="px-[8%] text-sm text-gray-600">
            © All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
