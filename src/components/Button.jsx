import React from 'react'
import { IoIosReturnRight } from "react-icons/io";


function Button({title}) {
  return (
    <div className='min-w-36 max-w-fit gap-4 flex items-center justify-between px-4 py-2 bg-zinc-100 text-black rounded-full'>
        <span className='text-sm font-medium'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button