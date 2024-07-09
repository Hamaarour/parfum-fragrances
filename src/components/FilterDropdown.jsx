// FilterDropdown.jsx
import React, { useState, useRef } from 'react'
import { gsap } from 'gsap'
import { FaFilter } from 'react-icons/fa'

const FilterDropdown = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    if (!isOpen) {
      gsap.to(dropdownRef.current, {
        height: 'auto',
        duration: 0.5,
        ease: 'power2.out',
      })
    } else {
      gsap.to(dropdownRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
    }
  }

  const handleFilterChange = (filter) => {
    onFilterChange(filter)
    toggleDropdown()
  }

  return (
    <div className="relative">
      <button
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded"
        onClick={toggleDropdown}
      >
        <FaFilter />
        <span className="pl-2">Filter</span>
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        ref={dropdownRef}
        className="absolute z-50 right-0 mt-2 w-48 bg-white rounded shadow-lg overflow-hidden"
        style={{ height: 0, overflow: 'hidden' }}
      >
        <button
          className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          onClick={() => handleFilterChange('men')}
        >
          Men
        </button>
        <button
          className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          onClick={() => handleFilterChange('women')}
        >
          Women
        </button>
        <button
          className="block px-4 py-2 text-black hover:bg-gray-200 w-full text-left"
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
      </div>
    </div>
  )
}

export default FilterDropdown
