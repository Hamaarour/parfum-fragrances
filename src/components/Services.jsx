import React from 'react'
import FLOUER from '../assets/fleur.png'
import FRUIT from '../assets/fruit.png'
import SPICE from '../assets/spice.png'
import CITRUS from '../assets/citrus.png'

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center p-5 md:px-28">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <img src={FRUIT} alt="Fruit Fragrance" className="w-16 h-16" />
          </div>
          <h3 className="mt-4 font-bold text-lg">FRUIT FRAGRANCE</h3>
          <p className="text-gray-600 mt-2">
            Fruit fragrance luscious fruit aromas fill the air, a symphony of
            nature’s
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <img src={FLOUER} alt="Flower Fragrance" className="w-16 h-16" />
          </div>
          <h3 className="mt-4 font-bold text-lg">FLOWER FRAGRANCE</h3>
          <p className="text-gray-600 mt-2">
            Spice fragrance Body Lotion Vegan Orchid non-toxic Body Mist
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <img src={SPICE} alt="Spice Fragrance" className="w-16 h-16" />
          </div>
          <h3 className="mt-4 font-bold text-lg">SPICE FRAGRANCE</h3>
          <p className="text-gray-600 mt-2">
            Citrus fragrance Ethereal Serenity Fragrance Body Mist
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
            <img src={CITRUS} alt="Citrus Fragrance" className="w-16 h-16" />
          </div>
          <h3 className="mt-4 font-bold text-lg">CITRUS FRAGRANCE</h3>
          <p className="text-gray-600 mt-2">
            Flower fragrance Each breath carries the faint perfumed serenity
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
