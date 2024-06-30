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
    <footer className="font-sentient w-full bg-green-500 text-white p-10 flex flex-col gap-6">
      <div className="flex justify-between items-start">
        <div className="w-1/3 leading-8">
          <div className="flex items-center space-x-2 ">
            <FaPhone />
            <span>9898989897</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <FaEnvelope />
            <span>orip@ymail.com</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <FaMapMarkerAlt />
            <span>Htripal 13, Office no 33, Redina, R.</span>
          </div>
          <div className="flex items-center space-x-2 ">
            <FaClock />
            <span>SAT-FRI 08:00-09:00</span>
          </div>
        </div>
        <div className="text-center flex flex-col items-center w-2/3 gap-2">
          <h1 className="text-8xl font-bold">JESMINA</h1>
          <div className="flex justify-center items-center space-x-4">
            <FaTiktok
              size={25}
              className="hover:cursor-pointer border-[1px] border-white rounded-full p-1"
            />
            <FaFacebook
              size={25}
              className="hover:cursor-pointer border-[1px] border-white rounded-full p-1"
            />
            <FaInstagram
              size={25}
              className="hover:cursor-pointer border-[1px] border-white rounded-full p-1"
            />
          </div>
        </div>
        <div className="w-1/3">
          <p className=" leading-8">
            The specialty of our perfume is that it is made with natural
            ingredients that do not harm you in any way.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <p className="text-center">
          Copyright {year}© <span className="font-bold"> JESMINA </span>. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
