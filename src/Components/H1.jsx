
import React from 'react'
import {motion} from 'motion/react'

const H1 = ({text}) => {
    const words=text.split(" ")
  return (
   <motion.div className="flex flex-col sm:flex-row gap-4">
          {words.map((word, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(10px)",
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
               viewport={{ once: true }}
              className="text-[20cqw] md:text-[11cqw] lg:text-[10.2cqw] pointer-events-none text-shadow-lg relative tracking-tighter text-center font-[signature]"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
  )
}

export default H1