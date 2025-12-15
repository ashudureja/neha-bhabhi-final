import React from 'react'


import {motion} from 'motion/react'
import H1 from "../Components/H1";
import Instagram from '../LottieAnimation/Instagram';

import Button from '../Components/Button';
import Gmail from '../LottieAnimation/Gmail';
import Linkedin from '../LottieAnimation/Linkedin';
import Github from '../LottieAnimation/Github';

const Footer2 = () => {
  const buttons = [
    { label: 'instagram', img:<Instagram/> , link:"https://www.instagram.com/_nehavalecha_/" },
    { label: 'gmail', img: <Gmail/>, link:"" },
    { label: 'linkedin', img: <Linkedin/>, link:"https://www.linkedin.com/in/neha-valecha/" },
    { label: 'github', img:<Github/>, link:"" }
  ]

  return (
    <div className='h-screen relative w-full flex flex-col items-center justify-center overflow-hidden'>
  
       <div className='z-10'>
         <H1 text="Neha Valecha"/>
       </div>
        <div className='grid grid-cols-2  z-10 md:grid-cols-4  mt-4 items-center justify-center gap-4'>
          {buttons.map((btn, index) => (
            <Button key={index} index={index} img={btn.img} link={btn.link}>
              {btn.label}
            </Button>
          ))}
        </div>
      
      <div className='h-[95vh] md:h-250  lg:hidden block    absolute bottom-0 w-full '>
        <img data-scroll data-scroll-speed="0.3" className=' object-cover w-full  h-full opacity-80' src="./images/flower.webp" alt="decorative flower" />
      </div>
      <img data-scroll data-scroll-speed="0.3" className='z- hidden lg:block  h-full absolute -bottom-20 opacity-80' src="./images/flower.webp" alt="decorative flower" />
    </div>
  )
}

export default Footer2