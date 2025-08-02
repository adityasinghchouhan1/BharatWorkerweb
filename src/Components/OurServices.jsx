import React from 'react'
import decologo from '../../public/deco/s1-2.webp' // Ensure path is correct
import ServiceCards from '../Components/ServiceCards'

const OurServices = () => {
  return (
    <>
      <section className="bg-[#0c3f86] text-white pb-20 relative overflow-hidden z-0">
        <img
          src={decologo}
          alt="Decorative Icon"
          className="w-16 sm:w-32 h-auto mb-10 md:mb-0 ms-10"
        />
        <div className="px-4 flex items-center justify-center w-full">
          {/* Text Content */}
          <div className=" flex justify-center items-center flex-col text-center max-w-3xl sm:px-20 px-0 space-y-4">
            <div className="text-xs uppercase tracking-widest text-white font-semibold bg-blue-800 text-center rounded-full mb-2 px-3 py-1">
              Our Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-semibold mb-2 leading-snug">
              Connecting You with Reliable Skilled Workers
            </h2>
            <p className="text-gray-300 text-center font-normal text-sm  sm:text-lg leading-relaxed  mt-4 sm:py-9 py-3">
              Whether it's for a quick fix or a complete service solution,
              Bharat Workers ensures every job is done with professionalism and
              care.
            </p>
          </div>
        </div>
      </section>
      <div className="-mt-24 relative z-10">
        <ServiceCards />
      </div>
    </>
  )
}

export default OurServices
