import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, ITEMS_PER_PAGE } from '../utils/constant.js'
import Banner from '../components/Banner'
const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(prevPage + 1, Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE))
    )
  }

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProducts = PRODUCTS.slice(startIdx, startIdx + ITEMS_PER_PAGE)

  return (
    <div className="bg-neutral">
      <Banner title="store" />
      <div className="container mx-auto p-4 mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
          <div className="flex flex-1 justify-between sm:hidden">
            <button
              onClick={handlePrevPage}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextPage}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{startIdx + 1}</span> to{' '}
                <span className="font-medium">
                  {Math.min(startIdx + ITEMS_PER_PAGE, PRODUCTS.length)}
                </span>{' '}
                of <span className="font-medium">{PRODUCTS.length}</span>{' '}
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  onClick={handlePrevPage}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                {Array.from(
                  { length: Math.ceil(PRODUCTS.length / ITEMS_PER_PAGE) },
                  (_, idx) => (
                    <button
                      key={idx + 1}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === idx + 1
                          ? 'bg-indigo-600 text-white'
                          : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                      } focus:z-20 focus:outline-offset-0`}
                    >
                      {idx + 1}
                    </button>
                  )
                )}
                <button
                  onClick={handleNextPage}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <FaChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage