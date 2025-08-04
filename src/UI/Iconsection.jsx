// components/IconGrid.jsx

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const IconGrid = ({
  items = [],
  iconBgColor = '#012878',
  iconWrapperClass = 'p-4 rounded-lg mb-4',
}) => {
  const iconRefs = useRef([])

  useEffect(() => {
    iconRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          scale: 1.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, [])

  return (
    <div className="bg-[#f8f9fb] py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {items.map((item, index) => (
          <div
            key={index}
            ref={(el) => (iconRefs.current[index] = el)}
            className="flex flex-col items-center opacity-0 scale-150"
          >
            <div
              className={iconWrapperClass}
              style={{ backgroundColor: iconBgColor }}
            >
              <img src={item.icon} alt={item.title} className="w-12 h-12" />
            </div>
            <h3 className="font-semibold text-xl mt-5">{item.title}</h3>
            <p className="text-gray-500 text-lg mt-5">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default IconGrid
