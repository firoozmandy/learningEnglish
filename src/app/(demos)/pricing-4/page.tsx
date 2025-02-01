import pag4 from '@/assets/images/pag4.jpg'
import listen from '@/assets/images/listen.jpg'
import reading from '@/assets/images/red.jpg'
import spiking from '@/assets/images/spe.jpg'
import writing from '@/assets/images/writing.jpg'
import { NavLink } from 'react-router-dom'

const Pricing4 = () => {
  return (
    <>
      <section className="relative z-50 mt-10 py-20">
        <div className="container max-w-[1200px]">
          <div className="text-center">
            <div className="mt-3 flex justify-center">
              <h2 className="text-3xl font-semibold leading-10 text-blue-600 md:w-2/3 xl:w-2/5">
                Skills
              </h2>
            </div>
            <p className="mt-4 dark:text-gray-400">
              Practise your reading, writing, listening and speaking skills at
              your level.
            </p>
          </div>
          <p className="mb-4 font-light">
            Here you can find practice materials and activities to improve your
            English speaking, listening, reading and writing skills. Improving
            your skills will help you use English more effectively so that you
            can do well in your studies, get ahead at work and confidently
            communicate in English in your free time.
          </p>
          <img src={pag4} alt="pag4img" className="my-10" />
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-blue-600 dark:text-white">
                  How to improve your English proficiency
                </h2>
                <p className="mb-4 font-light">
                  To build your vocabulary and develop your English
                  communication skills, practice and study are essential.
                  Working through practice activities and regularly reviewing
                  the new language you learn can help you accelerate your
                  knowledge and understanding of English.
                </p>
              </div>
            </div>
          </section>
          <section className="bg-white dark:bg-gray-900">
            <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
              <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
                <h2 className="mb-4 text-4xl font-bold tracking-tight text-blue-600 dark:text-white">
                  Choose the skill you want to practise{' '}
                </h2>
                <p className="mb-4 font-light">
                  The self-study lessons in these sections are written and
                  organised by English level based on the Common European
                  Framework of Reference for languages (CEFR). There are
                  different types of texts, recordings and videos with
                  interactive exercises and worksheets that practise the skills
                  you need. Choose the skill you want to practise today and
                  improve your English at your own speed, whenever it's
                  convenient for you.
                </p>

                <NavLink
                  to="/"
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
          <div className="ml-0 mt-10 grid grid-cols-1 gap-6 lg:ml-10 lg:grid-cols-2 2xl:px-24">
            <div className="rounded-md border bg-white p-10 shadow-md dark:border-gray-700 dark:bg-neutral-800/70 dark:shadow-gray-800 lg:w-[80%]">
              <div className="text-center">
                <img src={listen} alt="listen" />

                <span className="rounded-full bg-gray-50 px-6 py-2 text-lg dark:bg-gray-800/60">
                  Listening
                </span>
                <ul className="my-10 flex flex-col gap-y-3">
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Here you can find activities to practise your listening
                    skills. Listening will help you to improve your
                    understanding of the language and your pronunciation.
                  </li>
                </ul>
                <NavLink
                  to="/"
                  className="rounded-md border border-purple-500 px-6 py-3 font-medium text-purple-500 shadow-lg hover:bg-purple-500 hover:text-white hover:shadow-purple-500/30">
                  join
                </NavLink>
              </div>
            </div>
            <div className="rounded-md border bg-white p-10 shadow-md dark:border-gray-700 dark:bg-neutral-800/70 dark:shadow-gray-800 lg:w-[80%]">
              <div className="text-center">
                <img src={spiking} alt="spiking img" />
                <span className="rounded-full bg-gray-50 px-6 py-2 text-lg dark:bg-gray-800/60">
                  Speaking
                </span>
                <ul className="my-10 flex flex-col gap-y-3">
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Here you can find activities to practise your speaking
                    skills. You can improve your speaking by noticing the
                    language we use in different situations and practising
                    useful phrases.
                  </li>
                </ul>
                <NavLink
                  to="/"
                  className="rounded-md bg-gradient-to-r from-[#7551e9]/90 from-0% via-[#c4b5f6] via-100% px-6 py-3 font-medium text-white shadow-lg hover:shadow-purple-500/30">
                  join
                </NavLink>
              </div>
            </div>
            <div className="rounded-md border bg-white p-10 shadow-md dark:border-gray-700 dark:bg-neutral-800/70 dark:shadow-gray-800 lg:w-[80%]">
              <div className="text-center">
                <img src={reading} alt="reading img" />
                <span className="rounded-full bg-gray-50 px-6 py-2 text-lg dark:bg-gray-800/60">
                  Reading
                </span>
                <ul className="my-10 flex flex-col gap-y-3">
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Here you can find activities to practise your reading
                    skills. Reading will help you to improve your understanding
                    of the language and build your vocabulary.
                  </li>
                </ul>
                <NavLink
                  to="/"
                  className="rounded-md border border-purple-500 px-6 py-3 font-medium text-purple-500 shadow-lg hover:bg-purple-500 hover:text-white hover:shadow-purple-500/30">
                  join
                </NavLink>
              </div>
            </div>
            <div className="rounded-md border bg-white p-10 shadow-md dark:border-gray-700 dark:bg-neutral-800/70 dark:shadow-gray-800 lg:w-[80%]">
              <div className="text-center">
                <img src={writing} alt="writing img" />
                <span className="rounded-full bg-gray-50 px-6 py-2 text-lg dark:bg-gray-800/60">
                  Writing
                </span>
                <ul className="my-10 flex flex-col gap-y-3">
                  <li className="text-lg text-gray-600 dark:text-gray-400">
                    Here you can find activities to practise your writing
                    skills. You can improve your writing by understanding model
                    texts and how they're structured.
                  </li>
                </ul>
                <NavLink
                  to="/"
                  className="rounded-md border border-purple-500 px-6 py-3 font-medium text-purple-500 shadow-lg hover:bg-purple-500 hover:text-white hover:shadow-purple-500/30">
                  join
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing4
