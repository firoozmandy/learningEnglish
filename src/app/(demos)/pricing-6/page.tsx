import ThemeToggle from '@/components/ThemeToggle'
import cartImg from '@/assets/images/page6.jpg'
import cartImg2 from '@/assets/images/cc.png'
import cartImg3 from '@/assets/images/ccc.jpg'
const Pricing6 = () => {
  return (
    <>
      <ThemeToggle />
      <section className="z-50 py-36">
        <div className="container">
          <div className="flex justify-center">
            <div className="max-w-xl text-center">
              <h1 className="mb-5 text-3xl font-light text-blue-600">
                Vocabulary
              </h1>
              <p className="text-2xl font-medium text-gray-500 dark:text-gray-400">
                Learn new words to improve your vocabulary to help you
                communicate well in English.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-md bg-white p-5 shadow-md transition-all duration-500 dark:bg-neutral-800/70">
              <img src={cartImg} alt="img" />
              <div className="p-6 text-center">
                <h6 className="text-2xl uppercase text-blue-400">
                  A1-A2 vocabulary
                </h6>

                <div className="mt-10 flex flex-col gap-6">
                  Are you a learner at A1 (elementary) or A2 (pre-intermediate)
                  English level? Learn new words and practise your vocabulary.
                </div>
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-red-500/50 py-2 text-white">
                Current Plan
              </button>
            </div>
            <div className="rounded-md bg-white p-5 shadow-md transition-all duration-500 dark:bg-neutral-800/70">
              <img src={cartImg2} alt="img" />
              <div className="p-6 text-center">
                <h6 className="text-2xl uppercase text-blue-400">
                  B1-B2 vocabulary
                </h6>

                <div className="mt-10 flex flex-col gap-6">
                  Are you a learner at B1 (intermediate) or B2 (upper
                  intermediate) English level?
                </div>
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-blue-500/50 py-2 text-white">
                Current Plan
              </button>
            </div>
            <div className="rounded-md bg-white p-5 shadow-md transition-all duration-500 dark:bg-neutral-800/70">
              <img src={cartImg3} alt="img" />
              <div className="p-6 text-center">
                <h6 className="text-2xl uppercase text-blue-400">
                  Vocabulary games
                </h6>

                <div className="mt-10 flex flex-col gap-6">
                  Do you want to take a break from your studies and have some
                  fun by playing games in English?
                </div>
              </div>
              <button
                type="button"
                className="w-full rounded-md bg-red-500/50 py-2 text-white">
                Current Plan
              </button>
            </div>
          </div>
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-blue-600 dark:text-white">
                  Take your vocabulary to the next level
                </h2>
                <p className="mb-4 font-light">
                  Discover online English courses to help you build your
                  vocabulary and improve your communication skills. Practise
                  developing your vocabulary with your classmates in live group
                  classes, get vocabulary support from a personal tutor in
                  one-to-one lessons or practise by yourself at your own speed
                  with a self-study course.
                </p>

                <a
                  href="/"
                  className="dark:hover:text-primary-700 inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500">
                  Explore courses{' '}
                  <svg
                    className="ml-1 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"></path>
                  </svg>
                </a>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}

export default Pricing6
