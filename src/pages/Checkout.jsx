// Checkout.js

import { Disclosure } from '@headlessui/react'
import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { DISCOUNTS } from '../utils/constant'

const Checkout = () => {
  const location = useLocation()
  const { cartItems } = location.state || { cartItems: [] }

  const [subtotal, setSubtotal] = useState(0)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    let calculatedSubtotal = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    )
    setSubtotal(calculatedSubtotal)
  }, [cartItems])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const findDiscount = (code) => {
    return DISCOUNTS.find((discount) => discount.title === code)
  }

  const applyDiscount = (code) => {
    const disc = findDiscount(code)
    const discountPercentage = disc ? disc.percent : 0

    if (discountPercentage) {
      return (subtotal * discountPercentage) / 100
    } else {
      return 0
    }
  }

  const onSubmit = (data) => {
    const appliedDiscount = applyDiscount(data.discountCode)
    setDiscountAmount(appliedDiscount)
  }

  const total = subtotal - discountAmount

  return (
    <main className="container my-20 mx-auto lg:flex lg:min-h-full lg:flex-row-reverse lg:overflow-hidden">
      <h1 className="sr-only">Checkout</h1>
      {/* Right Section - Order Summary and Calculation */}
      <section
        aria-labelledby="order-heading"
        className="bg-gray-50 px-4 py-6 sm:px-6 lg:w-1/2 lg:max-h-[900px] lg:overflow-y-auto"
      >
        <h2 id="order-heading" className="text-lg font-medium text-gray-900">
          Your Order
        </h2>

        <Disclosure
          as="div"
          className="mx-auto max-w-lg"
          defaultOpen={handleOpen}
        >
          {({ open }) => (
            <>
              <Disclosure.Button className="font-medium text-green-600 hover:text-green-500">
                {open ? (
                  <span>Hide full summary</span>
                ) : (
                  <span>Show full summary</span>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className="mt-4 space-y-6">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-b border-gray-200 h-96 overflow-y-auto"
                >
                  {cartItems.map((item) => (
                    <li key={item.id} className="flex space-x-6 py-6">
                      <img
                        src={item.images[0]}
                        alt={item.title}
                        className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                      />
                      <div className="flex flex-col justify-between space-y-4">
                        <div className="space-y-1 text-sm font-medium">
                          <h3 className="text-gray-900">{item.title}</h3>
                          <p className="text-gray-900">
                            {item.price.toFixed(2)} DH
                          </p>
                          <p className="text-gray-500">{item.volume}</p>
                          <p className="text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="flex space-x-4">
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

                <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                  <label
                    htmlFor="discount-code-desktop"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Discount code
                  </label>
                  <div className="mt-1 flex space-x-4">
                    <input
                      type="text"
                      id="discount-code-desktop"
                      {...register('discountCode')}
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-gray-200 px-4 text-sm font-medium text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Apply
                    </button>
                  </div>
                  {errors.discountCode && (
                    <p className="mt-2 text-sm text-red-600">
                      Discount code is required.
                    </p>
                  )}
                </form>

                <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="text-gray-900">{subtotal.toFixed(2)} DH</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="flex">
                      Discount
                      <span className="ml-2 rounded-full bg-gray-200 px-2 py-0.5 text-xs tracking-wide text-gray-600">
                        {errors.discountCode ? '-' : discountAmount.toFixed(2)}
                      </span>
                    </dt>
                    <dd className="text-gray-900">
                      -{discountAmount.toFixed(2)} DH
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Shipping</dt>
                    <dd className="text-gray-900 font-semibold">FREE</dd>
                  </div>
                </dl>

                <p className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
                  <span className="text-base">Total</span>
                  <span className="text-base">{total.toFixed(2)} DH</span>
                </p>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </section>

      {/* Left Section - Form Inputs and Button */}
      <section className=" max-w-md px-4 lg:flex lg:flex-col lg:max-h-[900px] lg:overflow-y-auto">
        <h2 id="summary-heading" className="sr-only">
          Order details
        </h2>

        <form
          className="bg-gray-50 rounded-lg shadow-md p-6 mb-8 lg:h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label
            htmlFor="full-name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="full-name"
            {...register('fullName', { required: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm mt-1"
          />
          {errors.fullName && (
            <p className="mt-2 text-sm text-red-600">Full Name is required.</p>
          )}

          <label
            htmlFor="telephone"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Telephone
          </label>
          <div className="flex mt-1">
            <div className="relative rounded-md shadow-sm flex-grow">
              <span
                className="inline-block w-8 h-10 bg-no-repeat bg-center bg-contain rounded-l-md absolute left-0"
                style={{ backgroundImage: 'url("/ma-flag.png")' }}
              ></span>
              <input
                type="tel"
                id="telephone"
                {...register('telephone', {
                  required: true,
                  pattern: /^\+212[0-9]{9}$/,
                })}
                className="block w-full rounded-none rounded-r-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm pl-12"
                placeholder="+212XXXXXXXXX"
              />
            </div>
          </div>
          {errors.telephone && (
            <p className="mt-2 text-sm text-red-600">
              Please enter a valid Moroccan phone number starting with +212.
            </p>
          )}

          <label
            htmlFor="email-address"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Email address
          </label>
          <input
            type="email"
            id="email-address"
            {...register('email', { required: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm mt-1"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">
              Email address is required.
            </p>
          )}

          <label
            htmlFor="street-address"
            className="block text-sm font-medium text-gray-700 mt-4"
          >
            Street address
          </label>
          <input
            type="text"
            id="street-address"
            {...register('address', { required: true })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm mt-1"
          />
          {errors.address && (
            <p className="mt-2 text-sm text-red-600">
              Street address is required.
            </p>
          )}

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="col-span-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                {...register('city', { required: true })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm mt-1"
              />
              {errors.city && (
                <p className="mt-2 text-sm text-red-600">City is required.</p>
              )}
            </div>
            <div className="col-span-1">
              <label
                htmlFor="zip"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP / Postal code
              </label>
              <input
                type="text"
                id="zip"
                {...register('zip', {
                  required: true,
                  pattern: /^[0-9]{5}$/,
                })}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm mt-1"
              />
              {errors.zip && (
                <p className="mt-2 text-sm text-red-600">
                  Please enter a valid ZIP or postal code (5 digits).
                </p>
              )}
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
            >
              Place Order
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}

export default Checkout
