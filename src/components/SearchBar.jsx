import React from 'react'
import { BiSearch } from 'react-icons/bi' // Example icon from React Icons

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex justify-start">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for products..."
          value={value}
          onChange={onChange}
          className="w-full p-2 pl-8 pr-4 border border-gray-300 rounded bg-white focus:outline-none"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <BiSearch className="text-gray-400" />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
