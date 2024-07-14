import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import CollectionCard from '../components/CollectionCard'
import { COLLECTIONS } from '../utils/constant'
import CollectionCardSkeleton from '../staticUI/CollectionCardSkeleton'

const PacPage = () => {
  const [loading, setLoading] = useState(true) // State to manage loading status

  useEffect(() => {
    // Simulate loading delay (remove this in actual implementation)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full">
      <Banner title="" backgroundImage="/src/assets/pac_banner.png" />
      <div className="container mx-auto px-8 pb-20 lg:px-40">
        <h1 className=" text-2xl font-bold text-center m-12 uppercase md:text-5xl">
          Our Collections
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-8">
          {loading
            ? // Render skeleton loaders while loading
              Array.from({ length: COLLECTIONS.length }).map((_, index) => (
                <CollectionCardSkeleton key={index} />
              ))
            : // Render CollectionCard components when data is loaded
              COLLECTIONS.map((collection, index) => (
                <CollectionCard
                  key={index}
                  collection={collection}
                  index={index}
                />
              ))}
        </div>
      </div>
    </div>
  )
}

export default PacPage
