import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PerfumeModel } from './PerfumeModel'
import Circle from './Circle'

const Hero = () => {
  return (
    <section className="relative h-screen w-full  bg-color-gradient font-sentient font-semibold">
      <div className="absolute top-0 left-0 w-full h-full z-10 ">
        <Canvas className="fixed">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <PerfumeModel />
        </Canvas>
      </div>
      <div className="absolute top-1/4 left-0 w-full h-full flex flex-col justify-center items-center z-20">
        <div className="relative text-center text-8xl text-white">
          <span className="block">FRAGRANCES</span>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-30">
        <div className="relative text-center text-4xl md:text-6xl lg:text-8xl text-white">
          <span className="block">SENSES WITH</span>
          <span className="block">UNFORGETTABLE</span>
        </div>
      </div>
      <Circle />
    </section>
  )
}

export default Hero
