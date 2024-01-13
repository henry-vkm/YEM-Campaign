import React from 'react'
import YEM from '../assets/Y E M.png'

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto mt-[100px] px-4 lg:px-2">
      <div className="sm:grid grid-cols-5 justify-between">
        <div className="col-span-3 mb-[20px] sm:mb-0">
          <img src={YEM} alt="YEM" />
          <p className="text-[16px] mt-[15px]">Your Emotions Matter!</p>
        </div>
        <div className="py-5 sm:py-0">
          <h1 className="text-[18px] sm:mb-[15px] mb-[5px] font-bold">Company</h1>
          <ul>
            <li className="text-[14px] text-gray-700 py-1">About Us</li>
            <li className="text-[14px] text-gray-700 py-1">Careers</li>
            <li className="text-[14px] text-gray-700 py-1">Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[18px] sm:mb-[15px] mb-[5px] font-bold">Contact Us</h1>
          <ul>
            <li className="text-[14px] text-gray-700 py-1">yemyem@gmail.com</li>
            <li className="text-[14px] text-gray-700 py-1">1-800-900-2128</li>
            <li className="text-[14px] text-gray-700 py-1">3500 Deer Creek Rd <br/> Palo Alto, CA</li>
          </ul>
        </div>
      </div>
      <div className="mt-[150px] text-gray-600 pb-2">@Copyright YEM Campaign</div>
    </div>
  )
}

export default Footer