import React from 'react';
import Smile from '../assets/hero_img.svg';

const Hero = () => {
  return (
    <div className="max-w-[1240px] mx-auto flex md:flex-row flex-col px-4 md:px-2 gap-10 justify-between items-center lg:my-[130px] my-[50px]">
      <div className="flex flex-col items-start justify-between">
       <h1 className="text-[75px] font-bold leading-[85px]">Embrace your Emotions</h1>
       <p className="text-[18px] pl-1 mt-[18px]">Embracing our emotions is essential for self-awareness and authenticity.</p>
       <button className="py-[18px] px-[28px] bg-[#6C63FF] rounded-[5px] text-white mt-[35px]">Join Campaign</button>
      </div>
      <div>
        <img src={Smile} alt="" width="620px" height="340px" />
      </div>
    </div>
  )
}

export default Hero;