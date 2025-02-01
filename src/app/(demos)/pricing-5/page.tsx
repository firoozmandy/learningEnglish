import grammar from '@/assets/images/11.png'
import cartImg from '@/assets/images/page6.jpg'
import cartImg2 from '@/assets/images/cc.png'
import cartImg3 from '@/assets/images/ccc.jpg'
import { NavLink } from 'react-router-dom'

const Pricing5 = () => {
  return (
    <>
      <section className="z-50 py-16 sm:py-36">
        <div className="container relative">
          <div className="text-center">
            <h1 className="mb-4 text-3xl/tight font-medium text-blue-600">
              Grammar
            </h1>
            <p className="text-xl text-gray-500 dark:text-gray-400">
              Revise and practise your grammar to help you increase your
              confidence and improve your language level.
            </p>
          </div>

          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <img src={grammar} alt="grammar img" />

              <div className="text-2xl font-normal text-gray-700">
                Practise your English grammar with clear grammar explanations
                and practice exercises to test your understanding. The learning
                materials are organised into two sections, organised by English
                level.
                <p className="text-blue-900">
                  whatever their level, have questions and doubts about grammar
                  as they're learning English. There is also a grammar reference
                  which helps to explain the verb tenses and grammar rules in a
                  clear and simple way. Decide which area of grammar you need
                  help with today and choose a grammar point to work on . When
                  you do the interactive exercises, you can see how well you've
                  done.
                </p>
                By revising and practising your grammar you will increase your
                confidence in English and improve your language level.
                Practising little and often is the best way to improve your
                grammar, so come back tomorrow to choose another grammar point
                to work on. Good luck!
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-3">
                <div className="rounded-md bg-white p-5 shadow-md transition-all duration-500 dark:bg-neutral-800/70">
                  <img src={cartImg} alt="img" />
                  <div className="p-6 text-center">
                    <h6 className="text-2xl uppercase text-blue-400">
                      A1-A2 grammar
                    </h6>

                    <div className="mt-10 flex flex-col gap-6">
                      Are you a learner at A1 (elementary) or A2
                      (pre-intermediate) English level? In this section, you can
                      improve your grammar with our clear and simple grammar
                      lessons.
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
                      B1-B2 grammar
                    </h6>

                    <div className="mt-10 flex flex-col gap-6">
                      Are you a learner at B1 (intermediate) or B2 (upper
                      intermediate) English level? In this section, you can
                      improve your grammar with our clear and simple grammar
                      lessons.
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
                      English grammar reference
                    </h6>

                    <div className="mt-1 flex flex-col gap-6">
                      This grammar section explains English grammar in a clear
                      and simple way. There are example sentences to show how
                      the language is used and there are interactive exercises
                    </div>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-md bg-red-500/50 py-2 text-white">
                    Current Plan
                  </button>
                </div>
              </div>

              <div className="max-w-screen-lg text-gray-800 dark:text-gray-400 sm:text-lg">
                <h2 className="mb-4 mt-14 text-4xl font-bold tracking-tight text-blue-600 dark:text-white">
                  Learn to use grammar correctly and confidently
                </h2>
                <p className="mb-4 font-light">
                  Our online English classes feature lots of useful learning
                  materials and activities to help you improve your
                  understanding of grammar in a safe and inclusive learning
                  environment. Practise using grammar with your classmates in
                  live group classes, get grammatical support from a personal
                  tutor in one-to-one lessons or practise grammar by yourself at
                  your own pace with a self-study course.
                </p>
                <NavLink
                  to="/"
                  className="dark:hover:text-primary-700 inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500">
                  Explore courses
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
        </div>
      </section>
    </>
  )
}

export default Pricing5
