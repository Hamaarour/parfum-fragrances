import React from 'react'

const Banner = ({ title }) => {
  return (
    <div className="bg-green-500 text-white text-center py-4 mt-20 h-60 flex justify-center items-center">
      <h1 className="text-8xl font-bold font-sentient uppercase">{title}</h1>
    </div>
  )
}

export default Banner
