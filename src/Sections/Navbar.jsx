import React from 'react'
import { circOut, motion } from 'motion/react'
import { Link } from 'react-scroll'

const Navbar = ({ isContentVisible }) => {
  const tags = [
    { name: "About", to: "about-section" },
    { name: "Skills", to: "expertise-section" },
    { name: "Experience", to: "experience-section" },
    { name: "Awards", to: "awards-section" }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 3.3, duration: 1, ease: circOut }}
      className="py-2 z-[999] px-6 bg-black rounded-2xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] fixed top-5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 overflow-hidden"
    >
      <div className='size-[40px] sm:h-[50px] sm:w-[50px] -ml-4 bg-white rounded-[8px] p-0.5'>
        <img className='h-full w-full object-cover' src="./images/bhb4.gif" alt="Logo" />
      </div>
      
      {tags.map((item, i) => (
        <Link
          key={i}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={800}
          className='text-[14px] cursor-pointer sm:text-[16px] uppercase font-[heading] tracking-wider text-white font-light relative hover:text-gray-300 transition-colors'
          activeClass="text-gray-400"
          ignoreCancelEvents={true}
        >
          {item.name}
        </Link>
      ))}
    </motion.nav>
  )
}

export default Navbar