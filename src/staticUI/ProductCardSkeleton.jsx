const ProductCardSkeleton = () => {
  return (
    <div className="border p-4 relative rounded-lg shadow-md transform transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
      <div className="relative h-60 bg-gray-200 rounded-lg animate-pulse"></div>
      <h2 className="font-sentient text-md font-bold mb-4 mt-4 min-h-10 bg-gray-200 w-3/4 h-6 rounded animate-pulse"></h2>
      <div className="flex gap-2 mb-2">
        <div className="px-2 py-1 border rounded bg-gray-200 w-12 h-6 animate-pulse"></div>
        <div className="px-2 py-1 border rounded bg-gray-200 w-12 h-6 animate-pulse"></div>
        <div className="px-2 py-1 border rounded bg-gray-200 w-12 h-6 animate-pulse"></div>
      </div>
      <div className="flex justify-end items-end mb-2">
        <div className="w-16 p-1 border rounded bg-gray-200 h-8 animate-pulse"></div>
      </div>
      <div className="flex justify-between items-center">
        <div className="font-sentient font-bold text-md w-1/3 bg-gray-200 h-6 rounded animate-pulse"></div>
        <div className="bg-green-500 text-white w-1/2 px-4 py-2 rounded h-8 animate-pulse"></div>
      </div>
    </div>
  )
}

export default ProductCardSkeleton
