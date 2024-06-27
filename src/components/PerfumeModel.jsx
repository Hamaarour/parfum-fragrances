import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Float } from '@react-three/drei'

export const PerfumeModel = () => {
  const { scene } = useGLTF('/models/model.glb') // Adjust the path as necessary
  const ref = useRef()

  //   useFrame(() => {
  //     ref.current.rotation.y += 0.005 // Rotate the model
  //   })

  return (
    <Float
      speed={5} // Animation speed
      //   rotationIntensity={0.5} // Intensity of the rotation
      floatIntensity={2} // Intensity of the float
    >
      <primitive
        object={scene}
        ref={ref}
        scale={[1, 1, 1]} // Adjust the scale as necessary
        position={[0, -2, 0]} // Adjust the position as necessary
      />
    </Float>
  )
}
