// ProductPage.js
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS, ITEMS_PER_PAGE } from '../utils/constant.js'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS)

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
      )
    )
  }

  const handleProductSelect = (product) => {
    // Implement product selection logic, e.g., navigate to the product detail page
    console.log('Selected product:', product)
  }

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE
  const currentProducts = filteredProducts.slice(
    startIdx,
    startIdx + ITEMS_PER_PAGE
  )

  return (
    <div className="bg-neutral">
      <Banner title="store" backgroundImage="/src/assets/store_banner_2.png" />
      <div className="mx-[100px] p-4 mt-4">
        {/* <SearchBar products={PRODUCTS} onProductSelect={handleProductSelect} /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  {Math.min(startIdx + ITEMS_PER_PAGE, filteredProducts.length)}
                </span>{' '}
                of{' '}
                <span className="font-medium">{filteredProducts.length}</span>{' '}
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
                  {
                    length: Math.ceil(filteredProducts.length / ITEMS_PER_PAGE),
                  },
                  (_, idx) => (
                    <button
                      key={idx + 1}
                      onClick={() => setCurrentPage(idx + 1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                        currentPage === idx + 1
                          ? 'bg-green-500 text-white'
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
