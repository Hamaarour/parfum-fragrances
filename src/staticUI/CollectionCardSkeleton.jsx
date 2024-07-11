const CollectionCardSkeleton = () => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg transform transition duration-500 border border-gray-200 bg-white">
      <div className="h-56 bg-gray-200 animate-pulse"></div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-lg mb-2 bg-gray-200 w-3/4 h-6 rounded animate-pulse"></div>
        <p className="text-gray-700 text-lg font-semibold bg-gray-200 w-1/2 h-6 rounded animate-pulse"></p>
      </div>
      <div className="px-6 pt-4 pb-6">
        <button className="w-full bg-gray-200 text-gray-400 font-bold py-2 rounded animate-pulse"></button>
      </div>
    </div>
  )
}

export default CollectionCardSkeleton
