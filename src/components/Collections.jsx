import React from 'react'
import collec from '../assets/collec.jpg'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import rightImage from '../assets/spreak.png'

const Collections = () => {
  return (
    <div className="w-full px-4  md:px-28 py-14 flex flex-col md:flex-row md:items-center md:justify-center gap-10">
      <div className="w-full md:w-1/3 flex items-center flex-col md:items-end gap-16">
        <h1 className="font-bold text-3xl  sm:text-4xl md:text-5xl leading-loose lg:text-6xl xl:text-8xl mb-6 text-green-700 font-sentient text-center md:text-left relative">
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

// const Collections = () => {
//   return (
//     <div className="w-full md:px-28 py-14  h-screen flex flex-col gap-32 md:flex-row">
//       <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-9xl mb-6 text-green-700 font-sentient">
//         New Perfume Collection
//       </h1>
//       <div className="relative w-full flex flex-wrap justify-center items-center">
//         <img
//           src={collec}
//           alt="Collection"
//           className="absolute top-6 left-0 w-1/2 object-cover m-2 shadow-lg"
//         />
//         <img
//           src={image1}
//           alt="Perfume 1"
//           className="absolute -z-20 top-0 right-12 w-2/3 h-64 object-cover m-2 shadow-lg"
//         />
//         <img
//           src={image2}
//           alt="Perfume 2"
//           className="absolute bottom-0 left-2/2 transform -translate-x-1/2 w-1/3 h-60 object-cover m-2 shadow-lg"
//         />
//         <img
//           src={image3}
//           alt="Perfume 3"
//           className="absolute -z-10 bottom-10 right-[-60px] w-2/3 h-1/2 object-cover m-2 shadow-lg"
//         />
//       </div>
//     </div>
//   )
// }

// export default Collections
