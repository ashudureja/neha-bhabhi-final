import React from 'react'
import { Instagram, Linkedin, Mail, Github } from 'lucide-react'

import {motion} from 'motion/react'
import H1 from "../Components/H1";

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
      className='px-14 py-3 font-[heading] tracking-wider uppercase shadow-brand text-white bg-black rounded-xl cursor-pointer group overflow-hidden'
    >
      <div className="relative flex items-center gap-4 justify-center -ml-4">
        <span className="flex relative items-center gap-4 group-hover:translate-x-[160px] group-hover:opacity-0 transition-all duration-300 ease-out">
          {children}
          <img className={imgClassName} src={img} alt="" />
        </span>
        <span className="absolute flex items-center gap-4 translate-x-[-160px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          {children}
          <img className={imgClassName} src={img} alt="" />
        </span>
      </div>
    </motion.button>
  )
}

const Footer2 = () => {
  const buttons = [
    { label: 'instagram', img: './images/instagram.gif', imgClassName: 'h-10 absolute -right-11 -top-[7px]' },
    { label: 'gmail', img: './images/mail2.gif', imgClassName: 'h-7 absolute -right-10 -top-[6px]' },
    { label: 'linkedin', img: './images/linkedin.gif', imgClassName: 'h-7 absolute -right-10 -top-[5px]' },
    { label: 'github', img: './images/git.gif', imgClassName: 'h-7 absolute -right-10 -top-[6px]' }
  ]

  return (
    <div className='h-screen relative w-full flex items-center justify-center overflow-hidden'>
      <div className='relative z-10'>
        <H1 text="Neha Valecha"/>
        <div className='flex items-center justify-center gap-4'>
          {buttons.map((btn, index) => (
            <Button key={index} index={index} img={btn.img} imgClassName={btn.imgClassName}>
              {btn.label}
            </Button>
          ))}
        </div>
      </div>
      <img data-scroll data-scroll-speed="0.3" className='absolute bottom-0 h-160 opacity-90' src="./images/flower.png" alt="decorative flower" />
    </div>
  )
}

export default Footer2