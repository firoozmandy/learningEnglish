import { currentYear, developedBy } from '@/app/common/constants'

import img from '@/assets/images/logo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="font-sans relative bg-gray-200 from-gray-900 via-gray-700 to-gray-900 px-10 pb-6 pt-12 tracking-wide">
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-800">
            {developedBy}
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="/"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  {currentYear}
                </a>
              </li>
              <li>
                <a
                  href="/Live-classes"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                 Live classes
                  
                </a>
              </li>
              <li>
                <a
                  href="/Activate-your-English"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  Activate your English
                </a>
              </li>
              <li>
                <a
                  href="/IELTS-preparation"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  IELTS preparation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-800">
              Follow Us
            </h2>
            <ul className="space-y-3">
              <li className='flex flex-grow gap-2'>
                <FaGithub />
                <a
                  href="https://github.com/firoozmandy"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  Github
                </a>
              </li>
              <li className='flex flex-grow gap-2'>
              <FaLinkedin className='text-blue-800 h-6 -mt-1' />

                <a
                  href="https://www.linkedin.com/in/marya-firoozmandi/"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  linkedin
                </a>
              </li>
              {/* <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  Twitter
                </a>
              </li> */}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase text-gray-800">
            School
            </h2>
            <ul className="space-y-3">
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="text-sm text-gray-600 transition-all hover:text-gray-800">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center max-sm:-order-1 ml-[-40px] lg:-mt-10 lg:justify-center">
            <Link to="/">
              <img src={img} alt="logo" className="w-40 sm:w-56" />
            </Link>
          </div>
        </div>

        <hr className="mb-6 mt-12 border-gray-600" />

        <div className="flex flex-wrap gap-6 sm:justify-between">
          <div className="flex space-x-5">
            {/* <a
              href="javascript:void(0)"
              className="text-sm text-gray-600 transition-all hover:text-gray-800">
              <svg
                className="h-5 w-5 fill-gray-400 hover:fill-white"
                viewBox="0 0 24 24"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63
                .772-1.63 1.558V12h2.77l-.443 2.89h-2.327V22C18.343 21.128 22 16.991 22 12"></path>
              </svg>
            </a> */}
            <a
              href="https://github.com/firoozmandy"
              className="text-sm text-gray-600 transition-all hover:text-gray-800">
              <FaGithub/>
            </a>
            <a
              href="https://www.linkedin.com/in/marya-firoozmandi/"
              className="text-sm text-gray-600 transition-all hover:text-gray-800">
              <FaLinkedin/>
            </a>
          </div>

          <p className="text-sm text-gray-600">
            © All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

// <footer className="py-8">
//   <div className="container">
//     <div className="flex">
//       <div className="w-full">
//         <div className="text-center">
//           <p className="text-muted mt-8">
//             {' '}
//             © {currentYear}&nbsp; Techprice. By{' '}
//             <a className="font-medium" href="#">
//               {developedBy}
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
