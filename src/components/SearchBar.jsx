import React, { Fragment, useState } from 'react'
import { Combobox, Dialog, Transition } from '@headlessui/react'
import { FaChevronRight } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { PRODUCTS } from '../utils/constant.js'

const SearchBar = ({ products, onProductSelect }) => {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(true)

  const filteredProducts =
    query === ''
      ? []
      : products.filter((product) =>
          product.title.toLowerCase().includes(query.toLowerCase())
        )

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed top-0 left-0 right-0 z-50 bg-white"
        onClose={setOpen}
      >
        <Dialog.Panel className="mx-auto max-w-3xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
          <Combobox onChange={onProductSelect}>
            {({ activeOption }) => (
              <>
                <div className="relative">
                  <FiSearch
                    className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <Combobox.Input
                    className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
                    placeholder="Search..."
                    onChange={(event) => setQuery(event.target.value)}
                  />
                </div>

                {(query === '' || filteredProducts.length > 0) && (
                  <Combobox.Options
                    as="div"
                    static
                    hold
                    className="flex divide-x divide-gray-100"
                  >
                    <div className="max-h-96 min-w-0 flex-auto scroll-py-4 overflow-y-auto px-6 py-4">
                      {query === '' && (
                        <h2 className="mb-4 mt-2 text-xs font-semibold text-gray-500">
                          Recent searches
                        </h2>
                      )}
                      <div className="-mx-2 text-sm text-gray-700">
                        {filteredProducts.map((product) => (
                          <Combobox.Option
                            as="div"
                            key={product.id}
                            value={product}
                            className={`flex cursor-default select-none items-center rounded-md p-2 ${
                              activeOption === product
                                ? 'bg-gray-100 text-gray-900'
                                : ''
                            }`}
                          >
                            <img
                              src={product.image}
                              alt={product.title}
                              className="h-6 w-6 flex-none rounded-full"
                            />
                            <span className="ml-3 flex-auto truncate">
                              {product.title}
                            </span>
                            {activeOption === product && (
                              <FaChevronRight
                                className="ml-3 h-5 w-5 flex-none text-gray-400"
                                aria-hidden="true"
                              />
                            )}
                          </Combobox.Option>
                        ))}
                      </div>
                    </div>
                    {activeOption && (
                      <div className="hidden h-96 w-1/2 flex-none flex-col divide-y divide-gray-100 overflow-y-auto sm:flex">
                        <div className="flex-none p-6 text-center">
                          <img
                            src={activeOption.image}
                            alt={activeOption.title}
                            className="mx-auto h-16 w-16 rounded-full"
                          />
                          <h2 className="mt-3 font-semibold text-gray-900">
                            {activeOption.title}
                          </h2>
                          <p className="text-sm leading-6 text-gray-500">
                            {/* Add any additional information here */}
                          </p>
                        </div>
                        <div className="flex flex-auto flex-col justify-between p-6">
                          <dl className="grid grid-cols-1 gap-x-6 gap-y-3 text-sm text-gray-700">
                            <dt className="col-end-1 font-semibold text-gray-900">
                              Prices
                            </dt>
                            <dd>
                              {Object.entries(activeOption.prices).map(
                                ([size, price]) => (
                                  <div key={size}>
                                    {size}: {price} DH
                                  </div>
                                )
                              )}
                            </dd>
                          </dl>
                          <button
                            type="button"
                            className="mt-6 w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            View Product
                          </button>
                        </div>
                      </div>
                    )}
                  </Combobox.Options>
                )}
              </>
            )}
          </Combobox>
        </Dialog.Panel>
      </Dialog>
    </Transition.Root>
  )
}

export default SearchBar
