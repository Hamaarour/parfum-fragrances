import React from 'react'
import { SHOW_IMAGES } from '../utils/constant'
import comImage from '../assets/parfum-show.png'

const Show = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 p-5 md:px-28 py-20 ">
      <div
        key={0}
        className="bg-cover bg-center relative h-[450px]"
        style={{ backgroundImage: `url(${SHOW_IMAGES[0].src})` }}
      >
        <div className="absolute inset-0 bg-cover bg-center object-contain "></div>
      </div>
      <div className="p-4 text-black flex items-center justify-center flex-col">
        <p className="font-bold text-6xl block uppercase font-sentient text-green-500">
          perfume
        </p>
        <p className=" font-bold text-8xl uppercase z-20 font-sentient tracking-wider ">
          <span className="text-stroke">j</span>esmina
        </p>
      </div>
      <div
        key={2}
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${SHOW_IMAGES[2].src})` }}
      >
        <div className="absolute inset-0 bg-cover bg-center object-contain"></div>
      </div>
      <div className="p-4 text-black  flex items-left justify-evenly flex-col gap-0">
        <h4 className="font-bold text-4xl font-sentient leading-relaxed  uppercase">
          Best-selling <br /> must-haves
        </h4>
        <p className="font-sentient text-gray-600  relative after:content-[''] after:block after:w-2/5 after:h-px after:bg-green-500 after:mt-6">
          These fragrances evoke the rich scents of the natural world, from the
          earthy and aroma of ancient forests to the warmth of sunlit woods.
          Each composition.
        </p>
        <a
          href="#"
          className="mt-4 -block text-green-500 font-sentient font-bold text-xl  uppercase relative group"
        >
          See New Arrivals
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

      <div
        key={4}
        className="bg-cover bg-center relative"
        style={{ backgroundImage: `url(${SHOW_IMAGES[4].src})` }}
      >
        <div className="absolute inset-0 bg-cover bg-center object-contain"></div>
      </div>
      <div className="p-4 text-black flex items-center justify-center flex-col">
        <img src={comImage} alt="Fragrance bottles" />
        <p className="font-sentient text-gray-600 text-center leading-6">
          These fragrances evoke the rich scents of the natural world, from the
          earthy and aroma of ancient forests to the warmth of sunlit woods.
        </p>
      </div>
    </section>
  )
}

export default Show
