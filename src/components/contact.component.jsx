import React from 'react';
import Input from './input.component';

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 mt-[20px]">
      <div className="">
        <h1 className="text-[60px] leading-[85px] text-center font-medium">Talk with our Emotional <br/> Experts</h1>
        <form className="max-w-[780px] mx-auto mt-[65px] flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-8">
            <Input placeholder="First Name" label="First Name" type="text"/>
            <Input placeholder="Last Name" label="Last Name" type="text"/>
          </div>
          <div>
            <Input placeholder="Email" label="Email Address" type="email"/>
          </div>
          <div>
            <Input textarea={true} placeholder="Message" label="Message" type="text-box"/>
          </div>
          <button className="py-[20px] px-[28px] bg-[#6C63FF] justify-start w-[25%] rounded-[8px] text-white mt-[10px]">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact;