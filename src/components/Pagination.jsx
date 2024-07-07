import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevPage = () => {
    onPageChange(currentPage - 1)
  }

  const handleNextPage = () => {
    onPageChange(currentPage + 1)
  }

  return (
    <nav
      className="inline-flex -space-x-px rounded-md shadow-sm"
      aria-label="Pagination"
    >
      <button
        onClick={handlePrevPage}
        className={`relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
          currentPage === 1 ? 'pointer-events-none opacity-50' : ''
        }`}
        disabled={currentPage === 1}
      >
        <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
      </button>
      {Array.from({ length: totalPages }, (_, idx) => (
        <button
          key={idx + 1}
          onClick={() => onPageChange(idx + 1)}
          className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
            currentPage === idx + 1
              ? 'bg-green-500 text-white'
              : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
          } focus:z-20 focus:outline-offset-0`}
        >
          {idx + 1}
        </button>
      ))}
      <button
        onClick={handleNextPage}
        className={`relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
          currentPage === totalPages ? 'pointer-events-none opacity-50' : ''
        }`}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  )
}

export default Pagination
