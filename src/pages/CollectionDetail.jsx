import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import ItemNotFound from '../components/ItemNotFound'
import { COLLECTIONS } from '../utils/constant'
import { FaShoppingCart } from 'react-icons/fa'

const CollectionDetail = () => {
  const { collectionId } = useParams()
  const collection = COLLECTIONS.find((c) => c.id === parseInt(collectionId))
  const navigate = useNavigate()

  // State for comments and new comment inputs
  const [newComment, setNewComment] = useState('')
  const [newRating, setNewRating] = useState(0)
  const [newUserName, setNewUserName] = useState('')
  const [comments, setComments] = useState(collection ? collection.reviews : [])
  // State for related collections

  // State for popup
  const [showPopup, setShowPopup] = useState(false)
  const [relatedCollections, setRelatedCollections] = useState([])

  // Function to render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const halfStar = rating % 1 !== 0
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </>
    )
  }

  // Function to handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim() && newUserName.trim() && newRating > 0) {
      const updatedComments = [
        ...comments,
        { user: newUserName, comment: newComment, rating: newRating },
      ]
      setComments(updatedComments)
      setNewComment('')
      setNewRating(0)
      setNewUserName('')
      setShowPopup(false) // Close popup after submission
    }
  }

  // If collection not found, display item not found message
  if (!collection) return <ItemNotFound item="Collection" />

  // Settings for image slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  }

  // Custom arrow components for slider
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
        {'<'}
      </div>
    )
  }

  // Function to get random related collections
  const getRandomCollections = (category, count) => {
    const filteredCollections = COLLECTIONS.filter(
      (c) => c.category === category && c.id !== collection.id
    )
    const randomCollections = []
    while (randomCollections.length < count && filteredCollections.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredCollections.length)
      randomCollections.push(filteredCollections.splice(randomIndex, 1)[0])
    }
    return randomCollections
  }

  useEffect(() => {
    const storedRelatedCollections = localStorage.getItem(
      `relatedCollections-${collection.id}`
    )
    if (storedRelatedCollections) {
      setRelatedCollections(JSON.parse(storedRelatedCollections))
    } else {
      const randomCollections = getRandomCollections(collection.category, 4)
      setRelatedCollections(randomCollections)
      localStorage.setItem(
        `relatedCollections-${collection.id}`,
        JSON.stringify(randomCollections)
      )
    }
  }, [])

  return (
    <main className="container mx-auto mt-8 px-4 md:px-0 lg:py-14">
      <section className="flex flex-wrap items-center justify-center">
        <div className="w-full md:w-1/2 relative mb-8 md:mb-0">
          <Slider {...sliderSettings}>
            {collection.image.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={collection.name}
                  className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </Slider>
          {/* Availability Overlay */}
          <div className="absolute top-0 right-0 p-2 bg-yellow-500 text-black rounded-tr-lg rounded-bl-lg">
            <p className="text-lg font-semibold">{collection.availability}</p>
          </div>
        </div>
        <section className="w-full flex flex-col md:w-1/2 md:pl-8 text-center md:text-left">
          <div className="ml-2 flex mb-4">{renderStars(collection.rating)}</div>

          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            {collection.name}
          </h1>
          <p className="text-2xl font-semibold text-[#bf5700] mt-4">
            {collection.price} DH
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <strong>Brand:</strong> {collection.brand}
          </p>
          <p className="text-lg text-gray-700 mt-2">
            <strong>Category:</strong> {collection.category}
          </p>

          <button
            onClick={() => setShowPopup(true)}
            className="mt-6 px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
          >
            <FaShoppingCart className="mr-2" />
            Add to Cart
          </button>
          <p className="text-lg text-gray-700 mt-4"> Description :</p>
          <p className="text-lg text-gray-700 mt-4">
            {' '}
            {collection.description}
          </p>
        </section>
      </section>

      {/* Section for Related Collections */}
      <section className="mt-12 pt-8 border-t-2 ">
        <h2 className="text-2xl uppercase font-bold text-gray-900 pb-8">
          Related Collections
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedCollections.map((relatedCollection) => (
            <div
              key={relatedCollection.id}
              className="overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105"
            >
              <img
                src={relatedCollection.image[0]}
                alt={relatedCollection.name}
                className="w-full h-62 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 min-h-16">
                  {relatedCollection.name}
                </h3>

                <p className="text-sm text-gray-700 min-h-20">
                  {relatedCollection.description}
                </p>
                <div className="flex items-center mt-2">
                  <div className="flex ">
                    <div className="flex">
                      {renderStars(relatedCollection.rating)}
                    </div>
                  </div>
                  <button
                    onClick={() => console.log('See PAC')}
                    className="ml-auto px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
                  >
                    SEE PAC
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup for Adding a Comment */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Add a Comment
            </h3>
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Your Name"
            />
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg"
              rows="4"
              placeholder="Write your comment here..."
            />
            <div className="mt-2 flex items-center">
              <p className="text-lg text-gray-900 font-semibold mr-2">
                Rating:
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={`cursor-pointer ${
                      star <= newRating ? 'text-yellow-500' : 'text-gray-300'
                    }`}
                    onClick={() => setNewRating(star)}
                  />
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowPopup(false)}
                className="mr-4 px-6 py-3 bg-gray-300 text-gray-800 text-lg font-semibold rounded-lg shadow-md hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={handleAddComment}
                className="px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Section for Comments */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900">Reviews</h2>
        {comments.map((review, index) => (
          <div
            key={index}
            className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-2">
              <p className="text-lg text-gray-900 font-semibold mr-2">
                {review.user}
              </p>
              <div className="flex">{renderStars(review.rating)}</div>
            </div>
            <p className="text-lg text-gray-700">{review.comment}</p>
          </div>
        ))}
        <div className="w-full flex items-center ">
          <button
            className="mt-6 px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300 flex items-center justify-center"
            onClick={() => setShowPopup(true)}
          >
            <FaRegStar className="mr-2" />
            Add comment
          </button>
        </div>
      </section>
    </main>
  )
}

export default CollectionDetail
