const ResultsSummary = ({ startIdx, filteredProducts, ITEMS_PER_PAGE }) => {
  return (
    <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{startIdx + 1}</span> to{' '}
          <span className="font-medium">
            {Math.min(startIdx + ITEMS_PER_PAGE, filteredProducts.length)}
          </span>{' '}
          of <span className="font-medium">{filteredProducts.length}</span>{' '}
          results
        </p>
      </div>
    </div>
  )
}

export default ResultsSummary
