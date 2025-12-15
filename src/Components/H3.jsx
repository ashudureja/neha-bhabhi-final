import React from 'react';
import { motion } from 'motion/react';
const H3 = ({ children, color = "black" }) => {
  const colorClass = {
    black: "text-black",
    white: "text-white",
    purple: "text-purple-100",
  }[color] || "text-black";

  return (
    <motion.h3
    initial={{
                opacity: 0,
                y: 20,
                filter: "blur(100px)",
              }}
              whileInView={{
                opacity: 1,

                y: 0,
                filter: "blur(0px)",
              
                transition: {
               
                  duration: 0.8,
                  ease: [0.25, 0.4, 0.25, 1],
                },
              }}
              //  viewport={{ once: true }}
      className={`text-[9cqw] md:text-[6cqw] lg:text-[3cqw] text-shadow-lg uppercase relative tracking-tighter text-center font-[heading]  ${colorClass}`}
    >
      {children}
    </motion.h3>
  );
};

export default H3;
 