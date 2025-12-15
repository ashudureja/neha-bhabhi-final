import React from 'react'
import { motion } from 'motion/react'
import Download from '../LottieAnimation/Download'

const ResumeButton = () => {
  return (
    <motion.a
      href="/nehaCV.pdf"
      download
      initial={{
        y: 50,
        scale: window.innerWidth < 640 ? 1.05 : 1.1,
        opacity: 0,
        filter: "blur(20px)",
      }}
      whileInView={{
        y: 0,
        filter: "blur(0px)",
        opacity: 1,
        scale: 1,
        transition: {
          opacity: { delay: 1, duration: 1 },
          filter: { delay: 1, duration: 1 },
          y: { delay: 1, duration: 1 },
          scale: { delay: 2, duration: 0.5 },
        },
      }}
      viewport={{ once: true }}
      className="group inline-block px-6 shadow-brand py-2.5 md:py-3 uppercase font-[heading] tracking-wide text-xs md:text-sm bg-black text-white rounded-xl cursor-pointer"
    >
      <div className="relative flex items-center justify-center gap-1 overflow-hidden">
        <span className="flex items-center gap-4 group-hover:translate-x-[160px] group-hover:opacity-0 transition-all duration-300 ease-out">
          <Download />
          Resume
        </span>
        <span className="absolute flex items-center gap-4 translate-x-[-160px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          <Download />
          Resume
        </span>
      </div>
    </motion.a>
  )
}

export default ResumeButton
