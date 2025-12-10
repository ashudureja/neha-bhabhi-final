import React from 'react'


const Button = ({children, icon}) => {
  return (
    <button className='px-7 py-3 font-[heading] tracking-wide uppercase shadow-brand text-white bg-black rounded-xl cursor-pointer flex items-center gap-3'>
      {icon}
      {children}
    </button>
  )
}

export default Button