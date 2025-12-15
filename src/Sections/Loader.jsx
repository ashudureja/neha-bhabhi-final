import React from 'react'
import { motion } from "motion/react"

const Loader = () => {
  const text = "Hi I am Neha Valecha"
  const PRELOAD_DELAY_MS = 2000; // 2 seconds before the fade-out starts
const EXIT_ANIMATION_DURATION_SEC = 1.5; // Duration of the clip-path transition
  
  const words = text.split(" ")
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const clipPathVariants = {
    // Initial state: Full screen (effectively)
    initial: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
    },
    // Exit state: Collapsed to the top, creating an upwards reveal effect.
    exit: {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      opacity: 0.9, // Slight fade during transition for smoothness
      transition: {
        duration: EXIT_ANIMATION_DURATION_SEC,
        ease: [0.85, 0, 0.15, 1], // Custom cubic-bezier for a super smooth, premium feel
      },
    },
  };
  
  const wordVariants = {
    hidden: { 
      opacity: 0,
      filter: "blur(20px)"
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1]
      }
    }
  }
  
  const imageVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 200,
        duration: 0.8
      }
    }
  }

  return (
    <motion.div  variants={clipPathVariants}
      initial="initial"
      exit="exit" className='bg-black h-screen w-full flex items-center justify-center overflow-hidden'>
      <div className='flex items-center gap-2'>
        <motion.img 
          className=' h-10 md:h-20'
          src="./images/bhb2.gif"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.div 
          className='text-white text-xl md:text-2xl uppercase flex gap-2  font-[heading]'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader