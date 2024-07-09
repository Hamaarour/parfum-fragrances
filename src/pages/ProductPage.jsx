import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import ProductCardSkeleton from '../staticUI/ProductCardSkeleton'
import { PRODUCTS, ITEMS_PER_PAGE } from '../utils/constant.js'
import Banner from '../components/Banner'
import SearchBar from '../components/SearchBar'
import Modal from '../components/Modal'
import Pagination from '../components/Pagination'
import ResultsSummary from '../components/ResultsSummary.jsx'
import FilterDropdown from '../components/FilterDropdown'

const ProductPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    // Simulate a network request
    setTimeout(() => {
      setFilteredProducts(PRODUCTS)
      setIsLoading(false)
    }, 2000) // Simulate a 2 second delay
  }, [])

  const handleSearchChange = (event) => {
    const query = event.target.value
    setSearchQuery(query)
    const results = PRODUCTS.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    setFilteredProducts(results)
  }

  const handleFilterChange = (filter) => {
    let results
    if (filter === 'men') {
      results = PRODUCTS.filter((product) => product.category === 'Men')
    } else if (filter === 'women') {
      results = PRODUCTS.filter((product) => product.category === 'Women')
    } else {
      results = PRODUCTS
    }
    setFilteredProducts(results)
  }

  const handleProductSelect = (product) => {
    navigate(`/product/${product.id}`)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
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
        <div className="flex items-center justify-between mb-4">
          <SearchBar value={searchQuery} onChange={handleSearchChange} />
          <FilterDropdown onFilterChange={handleFilterChange} />
        </div>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="cursor-pointer bg-gray-400 m-2 p-4"
                  onClick={() => handleProductSelect(product)}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-32 h-32"
                  />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-black text-md mt-20">No products found</p>
          )}
        </Modal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {isLoading ? (
            Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-black text-md mt-20">No products found</p>
          )}
        </div>
        <div className="flex items-center justify-between border-t border-gray-600 bg-white px-4 py-3 sm:px-6 mt-4">
          <ResultsSummary
            startIdx={startIdx}
            filteredProducts={filteredProducts}
            ITEMS_PER_PAGE={ITEMS_PER_PAGE}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductPage
