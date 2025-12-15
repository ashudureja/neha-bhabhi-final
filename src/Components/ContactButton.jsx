import React from 'react'
import { motion } from 'motion/react'

const ContactButton = () => {
  return (
    <motion.button
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
      opacity: {
        delay: 1,
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
      filter: {
        delay: 1,
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
      y: {
        delay: 1,
        duration: 1,
        ease: [0.25, 0.4, 0.25, 1],
      },
      scale: {
        delay: 1 + 1,
        duration: 0.5,
        ease: [0.85, 0, 0.15, 1],
      },
    },
  }}
  viewport={{ once: true }}
  className="px-5 py-2.5 text-xs md:text-sm md:py-3 font-[heading] tracking-wide bg-black shadow-brand group text-white rounded-xl uppercase cursor-pointer"
>
  <div className="relative flex items-center justify-center gap-3 overflow-hidden">
    <span className="flex relative items-center gap-4 group-hover:translate-x-[160px] group-hover:opacity-0 transition-all duration-300 ease-out">
      <img
        className="h-5"
        src="https://media.tenor.com/ju4PztDv8WcAAAAj/firstrequestrecords-first-request.gif"
        alt=""
      />
      Contact Me
    </span>
    <span className="absolute flex items-center gap-4 translate-x-[-160px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out">
      <img
        className="h-5"
        src="https://media.tenor.com/ju4PztDv8WcAAAAj/firstrequestrecords-first-request.gif"
        alt=""
      />
      Contact Me
    </span>
  </div>
</motion.button>
  )
}

export default ContactButton