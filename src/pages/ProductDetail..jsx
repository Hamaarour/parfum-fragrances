import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { PRODUCTS } from '../utils/constant.js'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { useNavigate } from 'react-router-dom'
import ItemNotFound from '../components/ItemNotFound.jsx'

const ProductDetail = () => {
  const { productId } = useParams()
  const product = PRODUCTS.find((p) => p.id === parseInt(productId))
  if (!product) return <ItemNotFound item="Product" />
  const [selectedVolume, setSelectedVolume] = useState('2ml')
  const [price, setPrice] = useState(product.prices[selectedVolume])
  const [quantities, setQuantities] = useState({
    '2ml': product.quantities['2ml'],
    '5ml': product.quantities['5ml'],
    '10ml': product.quantities['10ml'],
  })
  const [purchaseQuantity, setPurchaseQuantity] = useState(1)
  const [mainImage, setMainImage] = useState(product.images[0])
  const { addToCart } = useShoppingCart()

  const handleVolumeClick = (volume) => {
    setSelectedVolume(volume)
    setPrice(product.prices[volume])
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  // Custom arrow components for slick slider
  function NextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} w-10 h-10 absolute top-1/2 right-4 transform -translate-y-1/2 z-10 bg-gray-400 text-black rounded-full p-2 cursor-pointer hover:bg-gray-600`}
        style={{ ...style }}
        onClick={onClick}
      >
        {'>'}
      </div>
    )
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={`${className} w-10 h-10 absolute top-1/2 left-4 z-10 bg-gray-400 text-black rounded-full p-2 cursor-pointer hover:bg-gray-600`}
        style={{ ...style }}
        onClick={onClick}
      >
        <span>{'<'}</span>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, selectedVolume, purchaseQuantity)
    setPurchaseQuantity(1)
    toast.success(`${product.title} added to cart!`, {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  // Function to handle click on smaller images
  const handleImageClick = (image) => {
    setMainImage(image)
  }
  const navigate = useNavigate()

  const getRandomProducts = (category, count) => {
    const filteredProducts = PRODUCTS.filter((p) => p.category === category)
    const randomProducts = []
    while (randomProducts.length < count && filteredProducts.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredProducts.length)
      randomProducts.push(filteredProducts.splice(randomIndex, 1)[0])
    }
    return randomProducts
  }

  // Fetch three random related products based on the current product's category
  const relatedProducts =
    product.category === 'men'
      ? getRandomProducts('men', 4)
      : getRandomProducts('women', 4)

  return (
    <div className="container mx-auto p-4 mt-20">
      <div className="flex flex-col md:flex-row md:items-start gap-2 pt-10">
        <div className="w-full md:w-1/2 relative">
          <Slider {...settings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={product.title}
                  className="w-full h-auto object-contain"
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
                className={`w-16 h-16 object-cover cursor-pointer border ${
                  mainImage === image ? 'border-green-500' : 'border-gray-300'
                }`}
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-2xl font-semibold text-[#bf5700] mb-4">
            {price.toFixed(2)} DH
          </p>
          <div className="mb-8 flex flex-col gap-2">
            <span className="font-semibold ">Quantité:</span>
            <div className="flex items-center gap-2">
              {Object.keys(product.prices).map((volume) => (
                <button
                  key={volume}
                  onClick={() => handleVolumeClick(volume)}
                  className={`px-4 py-2 border rounded ${
                    selectedVolume === volume
                      ? 'bg-green-500 text-white'
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
              className="px-4 py-2 border rounded bg-gray-200 hover:bg-green-500 cursor-pointer"
            >
              -
            </button>
            <span>{purchaseQuantity}</span>
            <button
              onClick={() => setPurchaseQuantity(purchaseQuantity + 1)}
              className="px-4 py-2 border rounded bg-gray-200 hover:bg-green-500 cursor-pointer"
            >
              +
            </button>
          </div>
          <button
            className="w-full bg-green-500 mt-6 text-white px-4 py-2 rounded transition duration-300 ease-in-out hover:bg-green-700"
            disabled={quantities[selectedVolume] === 0}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4 uppercase">
              Description du produit
            </h2>
            <p className="mb-4">{product.description}</p>
          </div>
        </div>
      </div>
      {/* Section for related products  */}
      <div className="flex flex-col justify-between">
        <div className="flex items-center justify-between border-t border-gray-600 bg-white px-4 py-3 sm:px-6 mt-4">
          <h4 className=" uppercase text-lg font-sentient font-bold">
            related products
          </h4>
          {/* link to see parfums */}

          <button
            className="-block text-green-500 font-sentient font-bold text-sm  uppercase relative group"
            onClick={() => {
              navigate('/shop')
            }}
          >
            voir plus
            <span className="block w-2/3 h-px bg-green-700 absolute left-0 top-9 transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col  transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <img
                src={relatedProduct.images[0]}
                alt={relatedProduct.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <p className="font-bold mb-2">{relatedProduct.title}</p>
                </div>
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded mt-2 self-start transition duration-300 ease-in-out hover:bg-green-700"
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                >
                  See Product
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
