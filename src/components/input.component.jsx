import React from 'react'

const Input = ({ label, textarea=false, ...otherProps }) => {
  return (
    <div className="flex flex-col gap-[5px]">
      <label>{label}</label>
      {
        textarea ? 
        <textarea height="350px" placeholder='Message' className="py-[20px] px-[25px] border rounded-[5px] h-[200px]" /> :
        <input className="py-[20px] px-[25px] border rounded-[5px]" {...otherProps} />
      }
      
    </div>
  )
}

export default Input;