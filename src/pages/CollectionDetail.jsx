import React from 'react'
import { useParams } from 'react-router-dom'
import { COLLECTIONS } from '../utils/constant'
import ItemNotFound from '../components/ItemNotFound'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

const CollectionDetail = () => {
  const { collectionId } = useParams()
  const collection = COLLECTIONS.find((c) => c.id === parseInt(collectionId))

  if (!collection) return <ItemNotFound item="Collection" />

  return (
    <div className="container mx-auto mt-8">
      <div className="flex flex-wrap items-center justify-center">
        <TransformWrapper>
          <div className="w-full md:w-1/2 relative">
            <TransformComponent>
              <img src={collection.image[0]} alt="test" width="100%" />
            </TransformComponent>
          </div>
        </TransformWrapper>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-4xl font-bold text-gray-800">
            {collection.name}
          </h1>
          <p className="text-lg text-gray-700 mt-2">{collection.description}</p>
          <p className="text-2xl font-bold text-gray-800 mt-4">
            {collection.price} DH
          </p>
          <button className="btn mt-4">Ajouter au panier</button>
        </div>
      </div>
    </div>
  )
}

export default CollectionDetail
