import React from 'react'

const Quote = () => {
  return (
    <div className="bg-[#8078FF] w-full text-center">
      <div className="max-w-[740px] mx-auto flex flex-col justify-between px-4">
      <p className="lg:text-[25px] text-[20px] py-[48px] text-white font-medium lg:leading-[40px] leading-[35px]">
        <span className="text-[30px] font-bold">“</span>Embracing our emotions is essential for self-awareness and authenticity, providing valuable insights into our needs and fostering healthier relationships. It empowers us to make informed decisions and cultivates resilience, shaping a more enriched and fulfilling life.
        <span className="text-[30px] font-bold">”</span>
      </p>
      <h2 className="text-[35px] font-medium text-white pb-[56px]">Julia T. Wood</h2>
    </div>
    </div>
  )
}

export default Quote;