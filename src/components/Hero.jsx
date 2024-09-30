import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Circle from './Circle'

const Hero = () => {
  const fragrancesRef = useRef(null)
  const thatCaptivateRef = useRef(null)
  const yourSensesRef = useRef(null)
  const taglineRef = useRef(null)

  useEffect(() => {
    // GSAP animations for the text
    gsap.fromTo(
      fragrancesRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
    )

    gsap.fromTo(
      thatCaptivateRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', delay: 1 }
    )

    gsap.fromTo(
      yourSensesRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power3.out', delay: 1.5 }
    )

    gsap.fromTo(
      taglineRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 2 }
    )
  }, [])

  return (
    <section
      className="overflow-x-hidden  relative top-0 right-0 h-screen w-full bg-banner-bg bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center font-sentient font-semibold"
      // style={{ backgroundImage: "url('/assets/background.png')" }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

      {/* Content on Top */}
      <div className="relative z-10 text-5xl sm:text-6xl md:text-8xl lg:text-9xl text-white tracking-wide text-center px-4">
        <span ref={fragrancesRef} className="block">
          FRAGRANCES
        </span>
      </div>

      {/* Subtext with GSAP Animation */}
      <div className="relative z-10 flex flex-col justify-center items-center mt-4 sm:mt-6 text-center px-4">
        <div className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white">
          <span ref={thatCaptivateRef} className="block">
            THAT CAPTIVATE
          </span>
          <span ref={yourSensesRef} className="block">
            YOUR SENSES
          </span>
        </div>

        {/* Tagline with GSAP Animation */}
        <p
          className="text-base sm:text-lg md:text-xl text-gray-200 mt-3 sm:mt-5"
          ref={taglineRef}
        >
          Pure, Honest & Unforgettable
        </p>
      </div>

      {/* Circle Component with Bounce Animation */}
      <div className="relative z-10 mt-8 sm:mt-10 animate-bounceSlow">
        <Circle />
      </div>
    </section>
  )
}

export default Hero
