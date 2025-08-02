import React, { useEffect, useRef } from 'react'
import workers2 from '../../public/misc/3.webp'
import workers3 from '../../public/misc/8.webp'
import workers4 from '../../public/misc/10.webp'
import workers5 from '../../public/misc/11.webp'
import workers from '../../public/misc/1.webp'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Whoweare = () => {
  const imagesRef = useRef([])
  const groupImageRef = useRef(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    // Animate image cards
    imagesRef.current.forEach((img) => {
      gsap.fromTo(
        img,
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: img,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })

    // Responsive scroll animations using matchMedia
    ScrollTrigger.matchMedia({
      // ✅ For desktop and tablets
      '(min-width: 768px)': () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: groupImageRef.current,
              start: 'top center',
              end: '+=300',
              scrub: 1,
            },
          })
          .to(groupImageRef.current, {
            y: '25vh',
            ease: 'power2.out',
          })
          .to(
            sectionRef.current,
            {
              y: '-20vh',
              ease: 'power2.out',
            },
            '<'
          )
      },

      // ✅ For mobile screens
      '(max-width: 767px)': () => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: groupImageRef.current,
              start: 'top center',
              end: '+=200', // less scroll distance
              scrub: 1,
            },
          })
          .to(groupImageRef.current, {
            y: '15vh', // less movement on smaller screens
            ease: 'power2.out',
          })
          .to(
            sectionRef.current,
            {
              y: '-8vh', // less section shift
              ease: 'power2.out',
            },
            '<'
          )
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="flex items-center flex-col overflow-hidden">
      {/* Group Worker Image */}
      <div
        ref={groupImageRef}
        className="sm:w-[60%] w-[90%] flex items-center justify-center"
      >
        <img
          src={workers}
          className="w-full h-auto object-cover"
          alt="group-worker"
        />
      </div>

      {/* Main Section */}
      <section
        ref={sectionRef}
        className="bg-[#0a3f87] text-white py-16 px-4 sm:px-6 md:px-12 w-full z-30"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="uppercase tracking-wider text-sm font-semibold text-blue-200 bg-blue-800 px-4 py-1 rounded-full inline-block mb-4">
              About Bharat Workers
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug">
              Who We Are
            </h2>

            <p className="text-white text-base sm:text-lg mb-6 leading-relaxed">
              Bharat Workers is a mission-driven platform aimed at improving
              livelihoods by connecting skilled Indian workers with meaningful
              job opportunities. Whether you’re an electrician, plumber,
              painter, carpenter, or a business looking to hire, we bridge the
              gap.
            </p>

            <div className="mb-6 space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-1">Our Vision</h4>
                <p className="text-white/90">
                  To create India’s most trusted network of verified skilled
                  professionals.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Our Mission</h4>
                <ul className="list-disc list-inside space-y-1 text-white/90">
                  <li>Uplift the skilled workforce</li>
                  <li>Simplify job access</li>
                  <li>Support fair wages and dignity of labor</li>
                </ul>
              </div>
            </div>

            <button className="bg-yellow-400 text-black font-semibold text-sm px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition">
              Learn More
            </button>
          </div>

          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[workers5, workers4, workers2, workers3].map((img, i) => {
              const sizeClass =
                i === 0
                  ? 'w-48 ' // tall image
                  : i === 1
                  ? 'w-64' // small
                  : i === 2
                  ? 'w-64' // medium
                  : 'w-48' // fallback

              return (
                <img
                  key={i}
                  src={img}
                  alt={`Worker ${i + 1}`}
                  className={`rounded-lg w-full object-cover ${sizeClass}`}
                  ref={(el) => (imagesRef.current[i] = el)}
                />
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Whoweare
