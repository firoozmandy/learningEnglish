import { Link } from 'react-router-dom'
import { pricingData } from '../data'

const Demos = () => {
  return (
    <section className="section scroll-mt-5 pb-16" id="demos">
    
      <div className="mx-14">
        <div className="mb-10 text-center text-2xl font-semibold">
        Learn with one of our popular online courses        </div>
        <div className="grid justify-center gap-4 lg:grid-cols-3">
          {pricingData.map((item, idx) => {
            return (
              <div className="mx-auto px-4" key={idx}>
                <Link to={item.path} target="_blank">
                  <img
                    src={item.image}
                    className="rounded border border-gray-100 bg-white p-2 shadow-lg"
                    alt="work-image"
                  />
                </Link>
                <h4 className="mt-5 text-center text-lg">{item.name}</h4>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Demos
