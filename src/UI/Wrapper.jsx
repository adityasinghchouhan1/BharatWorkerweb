import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DecoImg from '../../public/deco/s1.webp'

gsap.registerPlugin(ScrollTrigger)

const Wrapper = ({ title, description, image }) => {
  const titleRef = useRef(null)
  const descRef = useRef(null)
  const imageRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    // Heading and description animation
    gsap.fromTo(
      [titleRef.current, descRef.current],
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    )

    // Right image scroll-down animation
    gsap.to(imageRef.current, {
      y: 150,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="bg-[#0c3f86] text-white overflow-hidden relative pt-14"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-left relative z-10">
          <h1
            ref={titleRef}
            className="text-5xl font-semibold mb-4 leading-snug"
          >
            {title}
          </h1>
          <p
            ref={descRef}
            className="text-gray-400 text-lg font-semibold leading-relaxed mb-6"
          >
            {description}
          </p>
          <img
            src={DecoImg}
            alt="Decorative Icon"
            className="w-10 inline-block"
          />
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center relative z-10">
          {image && (
            <img
              ref={imageRef}
              src={image}
              alt="Hero"
              className="max-w-[500px] w-full object-contain"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default Wrapper
