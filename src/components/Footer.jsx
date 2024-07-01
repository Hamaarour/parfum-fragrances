import React from 'react'
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaTiktok,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="font-sentient overflow-x-hidden w-full bg-green-500 text-white flex flex-col md:p-10 gap-6">
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-start md:gap-4">
        <div className="w-full md:w-1/3 leading-8">
          <div className="flex items-center justify-center md:space-x-2 md:justify-start">
            <FaPhone />
            <span>9898989897</span>
          </div>
          <div className="flex items-center justify-center md:space-x-2 md:justify-start">
            <FaEnvelope />
            <span>orip@ymail.com</span>
          </div>
          <div className="flex items-center justify-center md:space-x-2 md:justify-start">
            <FaMapMarkerAlt />
            <span>Htripal 13, Office no 33, Redina, R.</span>
          </div>
          <div className="flex items-center justify-center md:space-x-2 md:justify-start">
            <FaClock />
            <span>SAT-FRI 08:00-09:00</span>
          </div>
        </div>
        <div className="text-center md:text-left w-full md:w-2/3 flex flex-col items-center md:items-center gap-2">
          <h1 className="text-5xl md:text-8xl font-bold">JESMINA</h1>
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <FaTiktok
              size={20}
              className="hover:cursor-pointer border-[1px] border-white rounded-full p-1"
            />
            <FaFacebook
              size={20}
              className="hover:cursor-pointer border-[1px] border-white rounded-full p-1"
            />
            <FaInstagram
              size={20}
              className="hover:cursor-pointer border-[1px] border-white rounded-full p-1"
            />
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <p className="leading-8 text-center md:text-left">
            The specialty of our perfume is that it is made with natural
            ingredients that do not harm you in any way.
          </p>
        </div>
      </div>
      <div className="flex justify-center bg-black items-center md:mt-10 md:bg-green-500">
        <p className="text-center">
          Copyright {year}© <span className="font-bold">JESMINA</span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
