import pag3 from '@/assets/images/img.jpg'
import { NavLink } from 'react-router-dom'

const Pricing3 = () => {
  return (
    <>
      <section className="relative z-50 mt-10 py-20">
        <div className="container">
          <div className="text-center">
            <div className="mt-3 flex justify-center">
              <h2 className="text-2xl font-semibold leading-10 text-blue-600 sm:text-4xl md:w-2/3 xl:w-2/5">
                Personal tutoring
              </h2>
            </div>
            <div className="flex justify-center">
              <p className="mt-8 font-medium text-gray-500 dark:text-gray-400 sm:text-lg lg:w-2/4">
                Learn in one-to-one sessions with a tutor of your choice focused
                on a personal learning plan.
              </p>
            </div>
          </div>
          <img src={pag3} className="my-20" alt="pag3img" />
          {/* content */}
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Improve your English with a one-to-one tutor
                </h2>
                <p className="mb-4 font-light">
                  Book private online sessions with a tutor of your choice and
                  focus on the areas important to you. Work together on a
                  learning plan based on your level to help you reach your goal.
                  Sessions are fun, friendly and designed to get you speaking
                  confidently.
                </p>
                {/* <p className="mb-4 font-medium">
                  Deliver great service experiences fast - without the
                  complexity of traditional ITSM solutions.Accelerate critical
                  development work, eliminate toil, and deploy changes with
                  ease.
                </p> */}
                <NavLink
                  to="#"
                  className="dark:hover:text-primary-700 inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500">
                  Learn more
                  <svg
                    className="ml-1 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"></path>
                  </svg>
                </NavLink>
              </div>
            </div>
          </section>

          <section className="relative flex flex-col rounded-xl bg-gray-800 p-6 shadow-lg shadow-gray-900/5">
            <div className="absolute inset-0 -right-7 -top-3 left-auto">
              <NavLink
                className="mt-6 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white hover:text-black"
                aria-label="Get started with the Starter plan for [object Object]"
                to="#">
                A1 to C1
              </NavLink>
            </div>
            <h3 className="text-2xl font-semibold uppercase text-blue-400">
              Why choose a personal online tutor?
            </h3>

            <hr className="mt-6" />
            <div className="mt-6">
              <ul role="list" className="-my-2 text-lg text-white">
                <li className="flex py-2">
                  <svg
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      className="stroke-white"
                      cx={12}
                      cy={12}
                      r={10}
                      strokeWidth="1.5"
                    />
                    <path
                      className="stroke-purple-500"
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-4">
                    Book private online sessions with a tutor of your choice{' '}
                  </span>
                </li>
                <li className="flex py-2">
                  <svg
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      className="stroke-white"
                      cx={12}
                      cy={12}
                      r={10}
                      strokeWidth="1.5"
                    />
                    <path
                      className="stroke-purple-500"
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-4">
                    Focus on the areas important to you{' '}
                  </span>
                </li>
                <li className="flex py-2">
                  <svg
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      className="stroke-white"
                      cx={12}
                      cy={12}
                      r={10}
                      strokeWidth="1.5"
                    />
                    <path
                      className="stroke-purple-500"
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-4">
                    Learning plan based on your level to help you reach your
                    goal{' '}
                  </span>
                </li>
                <li className="flex py-2">
                  <svg
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      className="stroke-white"
                      cx={12}
                      cy={12}
                      r={10}
                      strokeWidth="1.5"
                    />
                    <path
                      className="stroke-purple-500"
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-4">
                    30-minute one-to-one online English tuition with British
                    Council approved tutors{' '}
                  </span>
                </li>
                <li className="flex py-2">
                  <svg
                    className="h-5 w-5 fill-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <circle
                      className="stroke-white"
                      cx={12}
                      cy={12}
                      r={10}
                      strokeWidth="1.5"
                    />
                    <path
                      className="stroke-purple-500"
                      d="M8.5 12.5L10.5 14.5L15.5 9.5"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-4">
                    Highly qualified tutors are available 24/7, including
                    weekends and holidays
                  </span>
                </li>
              </ul>
            </div>
            <NavLink
              className="mt-20 inline-flex justify-center rounded-lg border bg-white px-3 py-2 text-sm font-semibold text-blue-400 transition-all duration-500 hover:bg-blue-500 hover:text-white dark:text-gray-900"
              aria-label="Get started with the Starter plan for [object Object]"
              to="#">
              Sign up at EnglishScore Tutors
            </NavLink>
          </section>
        </div>
      </section>
    </>
  )
}

export default Pricing3
