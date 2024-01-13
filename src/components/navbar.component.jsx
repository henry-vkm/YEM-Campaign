import React from 'react'
import YEM from '../assets/Y E M.png'

const Navbar = () => {
  return (
    <div className="max-w-[1240px] flex justify-between items-center mx-auto my-[28px] px-4 lg:px-2">
      <div>
        <img src={YEM} alt="YEM" />
      </div>
      <div className="md:flex items-center hidden">
        <p className="pr-[48px] text-[18px] cursor-pointer">Contact Us</p>
        <p className="pr-[48px] text-[18px] cursor-pointer">Our Story</p>
        <button className="bg-[#6C63FF] text-white font-medium py-[14px] px-[18px] rounded-[5px]">Join Campaign</button>
      </div>
    </div>
  )
}

export default Navbar;