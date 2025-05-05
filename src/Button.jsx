import React, { useState } from 'react'

const Button = () => {
    const [show,setshow]=useState(false);

  return (
     <div className=''>
      {
        show &&   (
            <div className='box bg-blue w-fit text-black h bg-amber-300 p-2 rounded-lg mt-10 ml-10 h-32 text-sm flex-col items-center justify-center gap-y-2'>

            <h1>Product Name=laptop</h1>
            <p>this is new laptop </p>
            <p className='text-red-500 font-bold'>price:$200</p>
            
            </div>
        )
      }
      <button onClick={()=>setshow(!show)} className='font-bold text-blue-50 '>
        {show ? "hide" : "show"}
        

      </button>
    </div>
  )
}

export default Button
