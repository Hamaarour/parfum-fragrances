import React from 'react'
import { useForm } from 'react-hook-form'
import { Disclosure } from '@headlessui/react'
import { HiOutlineLockClosed } from 'react-icons/hi'

const OrderConfirmation = ({
  subtotal,
  discount,
  taxes,
  shipping,
  total,
  products,
}) => {
  const { handleSubmit, control } = useForm()

  const onSubmit = (data) => {
    console.log(data) // Replace with your form submission logic
  }

  return (
    <main className="mt-20 lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
      {/* Mobile order summary */}
      <section
        aria-labelledby="order-heading"
        className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden"
      >
        <Disclosure as="div" className="mx-auto max-w-lg">
          {({ open }) => (
            <>
              <div className="flex items-center justify-between">
                <h2
                  id="order-heading"
                  className="text-lg font-medium text-gray-900"
                >
                  Your Order
                </h2>
                <Disclosure className="font-medium text-green-600 hover:text-green-500">
                  {open ? (
                    <span>Hide full summary</span>
                  ) : (
                    <span>Show full summary</span>
                  )}
                </Disclosure>
              </div>

              <Disclosure>
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-b border-gray-200"
                >
                  {products.map((product) => (
                    <li key={product.id} className="flex space-x-6 py-6">
                      <img
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                      />
                      <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">{product.name}</h3>
                          <p className="text-gray-900">{product.price}</p>
                          <p className="text-gray-500">{product.color}</p>
                          <p className="text-gray-500">{product.size}</p>
                        </div>
                        <div className="flex space-x-4">
                          <button
                            type="button"
                            className="text-sm font-medium text-green-600 hover:text-green-500"
                          >
                            Edit
                          </button>
                          <div className="flex border-l border-gray-300 pl-4">
                            <button
                              type="button"
                              className="text-sm font-medium text-green-600 hover:text-green-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
                  <label
                    htmlFor="discount-code-mobile"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Discount code
                  </label>
                  <div className="mt-1 flex space-x-4">
                    <input
                      type="text"
                      id="discount-code-mobile"
                      name="discount-code-mobile"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                      {...control}
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Apply
                    </button>
                  </div>
                </form>

                <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-gray-900">{subtotal}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="flex">
                      Discount
                      <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">
                        {discount.code}
                      </span>
                    </dt>
                    <dd className="text-gray-900">-{discount.amount}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Taxes</dt>
                    <dd className="text-gray-900">{taxes}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-gray-900">{shipping}</dd>
                  </div>
                </dl>
              </Disclosure>

              <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
                <span className="text-base">Total</span>
                <span className="text-base">{total}</span>
              </p>
            </>
          )}
        </Disclosure>
      </section>

      {/* Order summary */}
      <section
        aria-labelledby="summary-heading"
        className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex"
      >
        <h2 id="summary-heading" className="sr-only">
          Order summary
        </h2>

        <ul
          role="list"
          className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6"
        >
          {products.map((product) => (
            <li key={product.id} className="flex space-x-6 py-6">
              <img
                src={product.images[0]}
                alt={product.title}
                className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
              />
              <div className="flex flex-col justify-between space-y-4">
                <div className="space-y-1 text-sm font-medium">
                  <h3 className="text-gray-900">{product.title}</h3>
                  <p className="text-gray-900">{product.description}</p>
                  {Object.keys(product.prices).map((size) => (
                    <div key={size}>
                      <p className="text-gray-500">
                        {size} - ${product.prices[size]}
                      </p>
                      <p className="text-gray-500">
                        Quantity: {product.quantities[size]}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <button
                    type="button"
                    className="text-sm font-medium text-green-600 hover:text-green-500"
                  >
                    Edit
                  </button>
                  <div className="flex border-l border-gray-300 pl-4">
                    <button
                      type="button"
                      className="text-sm font-medium text-green-600 hover:text-green-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="discount-code"
              className="block text-sm font-medium text-gray-700"
            >
              Discount code
            </label>
            <div className="mt-1 flex space-x-4">
              <input
                type="text"
                id="discount-code"
                name="discount-code"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                {...control}
              />
              <button
                type="submit"
                className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                Apply
              </button>
            </div>
          </form>

          <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="text-gray-900">{subtotal}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="flex">
                Discount
                <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">
                  {discount.code}
                </span>
              </dt>
              <dd className="text-gray-900">-{discount.amount}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Taxes</dt>
              <dd className="text-gray-900">{taxes}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Shipping</dt>
              <dd className="text-gray-900">{shipping}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Checkout form */}
      <section
        aria-labelledby="payment-heading"
        className="flex-auto overflow-y-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-24 lg:pt-0"
      >
        <h2 id="payment-heading" className="sr-only">
          Payment and shipping details
        </h2>

        <div className="mx-auto max-w-lg lg:pt-16">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="grid grid-cols-12 gap-x-4 gap-y-6">
              <div className="col-span-full">
                <label
                  htmlFor="email-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    {...control}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="full-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="full-name"
                    name="full-name"
                    autoComplete="cc-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    {...control}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="card-number"
                  className="block text-sm font-medium text-gray-700"
                >
                  Card number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="card-number"
                    name="card-number"
                    autoComplete="cc-number"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    {...control}
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    autoComplete="street-address"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    {...control}
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  City
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    {...control}
                  />
                </div>
              </div>

              <div className="col-span-full sm:col-span-4">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  Postal code
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="postal-code"
                    name="postal-code"
                    autoComplete="postal-code"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    {...control}
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Pay {total}
            </button>

            <p className="mt-6 flex justify-center text-sm font-medium text-gray-500">
              <HiOutlineLockClosed
                className="mr-1.5 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              Payment details stored in plain text
            </p>
          </form>
        </div>
      </section>
    </main>
  )
}

export default OrderConfirmation
