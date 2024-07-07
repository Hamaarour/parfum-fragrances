import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { PRODUCTS } from '../utils/constant.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ProductDetail = () => {
  const { productId } = useParams()
  const product = PRODUCTS.find((p) => p.id === parseInt(productId))
  const [selectedVolume, setSelectedVolume] = useState('2ml')
  const [price, setPrice] = useState(product.prices[selectedVolume])
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)

  if (!product) return <div>Product not found</div>

  const handleVolumeClick = (volume) => {
    setSelectedVolume(volume)
    setPrice(product.prices[volume])
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex flex-col md:flex-row md:items-start gap-2   pt-10">
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={product.title}
                  className="w-2/3 h-2/3 object-cover"
                />
              </div>
            ))}
          </Slider>
          <div className="flex justify-center gap-2 mt-4">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={product.title}
                className="w-16 h-16 object-cover cursor-pointer"
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-red-600 mb-4">
            {price.toFixed(2)} DH
          </p>
          <div className="mb-4">
            <span className="font-semibold">Quantité:</span>
            <div className="flex items-center gap-2">
              {Object.keys(product.prices).map((volume) => (
                <button
                  key={volume}
                  onClick={() => handleVolumeClick(volume)}
                  className={`px-4 py-2 border rounded ${
                    selectedVolume === volume
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200'
                  }`}
                >
                  {volume}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setPurchaseQuantity(purchaseQuantity - 1)}
              disabled={purchaseQuantity <= 1}
              className="px-4 py-2 border rounded bg-gray-200"
            >
              -
            </button>
            <span>{purchaseQuantity}</span>
            <button
              onClick={() => setPurchaseQuantity(purchaseQuantity + 1)}
              className="px-4 py-2 border rounded bg-gray-200"
            >
              +
            </button>
          </div>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-blue-700">
            ACHETER MAINTENANT!
          </button>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Description du produit</h2>
            <p className="mb-4">{product.description}</p>
          </div>
        </div>
      </div>
      {/* Section for related products can be added here if needed */}
    </div>
  )
}

export default ProductDetail
