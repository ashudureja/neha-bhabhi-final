import React from 'react'
import {motion} from 'motion/react'
import Instagram from '../LottieAnimation/Instagram'


const Button = ({index, children, img, imgClassName}) => {
  return (
    <motion.button  
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(20px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          delay: index * 0.2,
          duration: 0.8,
          ease: [0.25, 0.4, 0.25, 1],
        },
      }} 
      className='w-40 py-3 font-[heading] tracking-wider uppercase shadow-brand text-white bg-black rounded-xl cursor-pointer group overflow-hidden'
    >
      <div className="relative flex items-center  justify-center ">
        <span className="flex relative items-center gap-4 group-hover:translate-x-[160px] group-hover:opacity-0 transition-all duration-300 ease-out">
          {children}
          {/* <img className={imgClassName} src={img} alt="" /> */}
         {img}
        </span>
        <span className="absolute flex items-center gap-4 translate-x-[-160px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          {children}
          {/* <img className={imgClassName} src={img} alt="" /> */}
           {img}
        </span>
      </div>
    </motion.button>
  )
}

export default Button