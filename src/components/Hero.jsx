import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { PerfumeModel } from './PerfumeModel'

const Hero = () => {
  return (
    <section className="relative bg-green-300 h-screen w-full">
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas className="fixed z-20">
          <ambientLight intensity={0.5} />
          <directionalLight position={[0, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} />
          <PerfumeModel />
        </Canvas>
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl text-white text-center">
          SENSES WITH <br /> UNFORGETTABLE <br /> FRAGRANCES
        </h1>
      </div>
    </section>
  )
}

export default Hero
