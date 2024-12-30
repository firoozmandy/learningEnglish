import Demos from './components/Demos'

const Home = () => {
  return (
    <div>
      <section className="section py-36" id="home">
        <div className="container">
          <div className="justify-center lg:flex">
            <div className="mx-2">
              <div className="text-center">
                <h1 className="mb-10 bg-gradient-to-l from-pink-400 to-blue-600 bg-clip-text text-4xl font-semibold leading-[50px] tracking-wide text-transparent">
                  Learn English online and improve your skills through our
                  high-quality courses and resources
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Demos />
    </div>
  )
}

export default Home
