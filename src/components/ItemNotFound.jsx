const CollectionNotFound = ({ item }) => (
  <div
    className="flex items-center justify-center h-screen bg-white"
    style={{ fontFamily: 'Arial, sans-serif' }}
  >
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        {item} Not Found
      </h1>
      <p className="text-lg text-gray-600">
        Sorry, the {item} you are looking for does not exist.
      </p>
    </div>
  </div>
)

export default CollectionNotFound
