import ThemeToggle from '@/components/ThemeToggle'
import pageImg from '../../../assets/images/page2.jpg';

const Pricing2 = () => {
  return (
    <>
      <ThemeToggle />
      <section className="relative z-50 mt-10 py-20">
        <div className="container">
          <div className="mx-auto max-w-xl sm:text-center">
            <h2 className="mb-8 text-2xl font-medium tracking-tight text-blue-600 md:text-3xl">
              IELTS PreParation
            </h2>
            <p className="mt-6 text-xl/8 text-gray-500 dark:text-gray-400">
              Take the IELTS test with total confidence and get the score you
              need with private and group IELTS preparation classes.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-2 2xl:px-[380px]">
            <section className="flex flex-col overflow-hidden rounded-xl bg-gray-300 p-6 shadow-lg shadow-gray-900/5 dark:bg-neutral-800/70">
              <h3 className="text-xl font-semibold uppercase text-blue-400">
                Choose from 3 distinct price plans
              </h3>

              <hr className="mt-6" />
              <div className="mt-6">
                <ul role="list" className="-my-2 text-sm text-gray-700">
                  <li className="flex py-2">
                    <svg
                      className="h-5 w-5 fill-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle
                        className="stroke-blue-400"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4 dark:text-gray-300">
                      Express : Best choice for getting IELTS test advice and
                      strategies
                    </span>
                  </li>
                  <li className="flex py-2">
                    <svg
                      className="h-5 w-5 fill-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle
                        className="stroke-blue-400"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4 dark:text-gray-300">
                      LITE: Best choice for focused learning and practise before
                      your test
                    </span>
                  </li>
                  <li className="flex py-2">
                    <svg
                      className="h-5 w-5 fill-blue-400"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle
                        className="stroke-blue-400"
                        cx={12}
                        cy={12}
                        r={10}
                        strokeWidth="1.5"
                      />
                      <path
                        className="stroke-white"
                        d="M8.5 12.5L10.5 14.5L15.5 9.5"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="ml-4 dark:text-gray-300">
                      Intensive: A complete course for total personalised
                      preparation
                    </span>
                  </li>
                 
                </ul>
              </div>
            
              <img src={pageImg} className='size-6/6 mt-10 mx-auto' alt="img" />
            </section>
            {/* right */}
            <section className="relative flex flex-col rounded-xl bg-pink-500 p-6 shadow-lg shadow-gray-900/5">
              <div className="absolute inset-0 -right-7 -top-3 left-auto">
                <a
                  className="mt-6 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition-all duration-500 hover:bg-white hover:text-black"
                  aria-label="Get started with the Starter plan for [object Object]"
                  href="#">
                  A1 to C1
                </a>
              </div>
              <h3 className="text-2xl font-semibold uppercase text-blue-400">
                Why choose IELTS Coach?
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
                      Learn from professional teachers
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
                      Get a personal needs analysis with an expert
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
                      A combination of live group and private classes
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
                      Detailed feedback on your performance after every class
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
                      Practise at your own time and pace with engaging online
                      activities.
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
                      Ability to stay on track with our learning platform and
                      monitor your progress
                    </span>
                  </li>
                </ul>
              </div>
              <a
                className="mt-20 inline-flex justify-center rounded-lg border bg-white px-3 py-2 text-sm font-semibold text-blue-400 transition-all duration-500 hover:bg-blue-500 hover:text-white dark:text-gray-900"
                aria-label="Get started with the Starter plan for [object Object]"
                href="#">
                Sign up
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing2
