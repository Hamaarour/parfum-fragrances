import React from 'react'
import collec from '../assets/collec.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import rightImage from '../assets/spreak.png'

const Collections = () => {
  return (
    <div className="w-full px-4  md:px-28 py-14 flex flex-col md:flex-row md:items-center justify-center gap-10">
      <div className="w-full md:w-1/3 flex items-center flex-col md:items-end gap-16">
        <h1
          className="uppercase font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-6 text-green-700 font-sentient text-center md:text-left relative"
          style={{ lineHeight: 1.3 }}
        >
          New Perfume Collection
          <img
            src={rightImage}
            alt="Right Image"
            className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 w-20 h-20 md:w-32 md:h-32"
          />
        </h1>

        <a
          href="#"
          className="mt-4 block text-black font-sentient font-bold text-xl uppercase relative group hover:text-green-500 transition-transform duration-600 ease-in-out"
        >
          SEE COLLECTION
          <svg
            className="inline-block ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="#4CAF50" />
            <path
              d="M10 8L14 12L10 16"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="block w-2/5 h-px bg-green-500 absolute left-0 top-9 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
        </a>
      </div>
      <div className="relative w-full flex flex-col md:flex-row md:w-1/2 justify-center items-center gap-4">
        <img
          src={collec}
          alt="Collection"
          className="w-full md:w-1/2 object-cover rounded-lg shadow-lg mb-4 md:mb-0"
        />
        <div className="flex flex-wrap justify-center items-center  md:w-1/2">
          <img
            src={image1}
            alt="Perfume 1"
            className="w-full md:w-full h-32 md:h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image2}
            alt="Perfume 2"
            className="w-full md:w-full h-32 md:h-48 object-cover rounded-lg shadow-lg"
          />
          <img
            src={image3}
            alt="Perfume 3"
            className="w-full md:w-full h-32 md:h-48 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Collections
