import ThemeToggle from '@/components/ThemeToggle'

const Pricing1 = () => {
  return (
    <>
      <ThemeToggle />
      <section className="relative py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl sm:text-center">
            <span className="font-medium tracking-widest text-blue-600">
              our price
            </span>
            <h2 className="mt-7 text-3xl font-medium tracking-tight md:text-5xl text-pink-500">
              Live classes
            </h2>
            <div className="mx-auto mt-5 h-[2px] w-10 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <p className="mt-6 text-xl/8 text-gray-600 dark:text-gray-400">
              Learn from anywhere with live interactive group and one-to-one
              classes taught by expert teachers.
            </p>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-10 lg:grid-cols-3 2xl:px-28">
            <div className="flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <div className="text-center">
                <div className="flex h-32 items-center justify-center bg-blue-600">
                  <h5 className="text-xl font-semibold text-zinc-50">Silver</h5>
                </div>
                <h2 className="mb-3 mt-20 items-center align-middle text-5xl">
                  USD
                  <sup className="align-middle text-2xl text-pink-300">$</sup>49
                </h2>
                <span>per month</span>
              </div>
              <div className="p-10">
                <ul className="mb-10 text-center">
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Private and Group Classes{' '}
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-medium dark:text-gray-300">
                      4 Live25 sessions per month{' '}
                    </h5>
                  </li>

                  <li className="mt-7">
                    <span className="text-xs font-medium dark:text-gray-300">
                      24 hours a day/7 days a week
                    </span>
                  </li>
                  <li className="">
                    <h5 className="text-xs font-medium dark:text-gray-300">
                      Pay monthly & cancel anytime
                    </h5>
                  </li>
                </ul>
                <div className="flex justify-center mt-24">
                  <a
                    href="#"
                    className="rounded-md border border-blue-500 px-6 py-3 font-medium text-blue-500 transition-all duration-500 hover:bg-blue-500 hover:text-white">
                    BuyNow
                  </a>
                </div>
              </div>
            </div>
            <div className="relative z-20">
              <div className="absolute inset-x-0 top-0">
                <div className="flex justify-center">
                  <span className="-mt-3 rounded-md border border-gray-700 bg-black px-2 py-1 text-xs font-medium uppercase text-white">
                    most popular
                  </span>
                </div>
              </div>
              <div className="group">
                <div className="rounded-xl border border-gray-300 bg-white dark:border-gray-700 dark:bg-neutral-900">
                  <div className="text-center">
                    <div className="flex flex-col">
                      <div className="pt-0 text-center">
                        {' '}
                        <div className="flex h-32 items-center justify-center rounded-t-lg bg-blue-600">
                          <h5 className="text-xl font-semibold text-zinc-50">
                            Gold
                          </h5>
                        </div>
                        <h2 className="mb-3 mt-20 items-center align-middle text-5xl">
                          USD
                          <sup className="align-middle text-2xl text-pink-300">$</sup>131
                        </h2>
                        <span>per month</span>
                      </div>
                      <div className="p-10">
                        <ul className="mb-10 text-center">
                          <li className="my-4">
                            <h5 className="font-medium dark:text-gray-300">
                              Private and Group Classes{' '}
                            </h5>
                          </li>
                          <li>
                            <h5 className="font-medium dark:text-gray-300">
                              4 Live25 sessions per month{' '}
                            </h5>
                          </li>

                          <li className="mt-7">
                            <h5 className="text-xs font-medium dark:text-gray-300">
                              24 hours a day/7 days a week
                            </h5>
                          </li>
                          <li>
                            <h5 className="text-xs font-medium dark:text-gray-300">
                              Pay monthly & cancel anytime
                            </h5>
                          </li>
                          <li className="my-10">
                            <h5 className="font-medium text-red-300 dark:text-gray-300">
                              for your first 3 months
                            </h5>
                          </li>
                        </ul>
                        <div className="flex justify-center">
                          <a
                            href="#"
                            className="rounded-md border border-blue-500 bg-blue-500 px-6 py-3 font-medium text-white hover:bg-blue-500">
                            Buy Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-0 top-0 -z-10 h-full w-full translate-x-2 translate-y-2 rounded-xl bg-neutral-300/30 dark:bg-neutral-700" />
              </div>
            </div>
            <div className="flex flex-col overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
              <div className="text-center">
                <div className="flex h-32 items-center justify-center rounded-t-lg bg-blue-600">
                  <h5 className="text-xl font-semibold text-zinc-50">
                    Platinum
                  </h5>
                </div>
                <h2 className="mb-3 mt-20 items-center align-middle text-5xl">
                  USD
                  <sup className="align-middle text-2xl text-pink-300">$</sup>179
                </h2>
                <span>Premium Business Classes</span>
              </div>
              <div className="p-10">
                <ul className="mb-10 text-center">
                  <li className="my-4">
                    <h5 className="font-medium dark:text-gray-300">
                      Private and Group Classes{' '}
                    </h5>
                  </li>
                  <li>
                    <h5 className="font-medium dark:text-gray-300">
                      4 Live25 sessions per month
                    </h5>
                  </li>
                  <li className="mt-7">
                    <h5 className="text-xs font-medium dark:text-gray-300">
                      24 hours a day/7 days a week
                    </h5>
                  </li>
                  <li>
                    <h5 className="text-xs font-medium dark:text-gray-300">
                      Pay monthly & cancel anytime
                    </h5>
                  </li>
                  <li className="my-10">
                    <h5 className="font-medium text-red-300 dark:text-gray-300">
                      for your first 3 months{' '}
                    </h5>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <a
                    href="#"
                    className="rounded-md border border-blue-500 px-6 py-3 font-medium text-blue-500 transition-all duration-500 hover:bg-blue-500 hover:text-white">
                    Buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <h5 className="mt-14 text-center font-medium">
          Book your free trial lesson  
            <a href="#" className="text-pink-500 mx-3">
              Get in touch
            </a>
          </h5>
        </div>
      </section>
    </>
  )
}

export default Pricing1
