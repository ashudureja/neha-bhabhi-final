import React, { useRef, useEffect } from 'react'
import { testimonials } from "../Constant/Recommendation";
import { SiComma } from "react-icons/si";
import { motion, useScroll, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import H3 from '../Components/H3';


gsap.registerPlugin(ScrollTrigger);

const Testimonials2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  useEffect(() => {
    const element = containerRef.current;
    
    if (!element) return;

    // GSAP ScrollTrigger for immediate color change at 50%
    ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        console.log(self.progress)
        if (self.progress >= 0.75) {
          // White background, black text
          gsap.set(element, { backgroundColor: "#eaeaea" });
          gsap.set(element.querySelectorAll('[data-text]'), { color: "#000000" });
          gsap.set(element.querySelectorAll('[data-comma]'), { color: "#000000" });
          gsap.set(element.querySelectorAll('[data-testimonial]'), { color: "rgba(0, 0, 0, 0.7)" });
        } else {
          // Black background, white text
          gsap.set(element, { backgroundColor: "#000000" });
          gsap.set(element.querySelectorAll('[data-text]'), { color: "#ffffff" });
          gsap.set(element.querySelectorAll('[data-comma]'), { color: "#fec700" });
          gsap.set(element.querySelectorAll('[data-testimonial]'), { color: "rgba(250, 245, 255, 0.7)" });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <motion.div 
      style={{ y, scale }} 
      ref={containerRef} 
      className='min-h-screen bg-black relative z-10 rounded-tl-9xl rounded-tr-9xl w-full p-40 flex flex-col gap-20'
    >
      <div className="flex w-full h-full absolute left-1/2 -translate-x-1/2 gap-2 items-center justify-between  ">
       <div className=" border  border-dashed border-transparent h-full w-[1px] -z-0 mask-t-from-50% "></div>
       <div className=" border  border-dashed border-white/30 h-full w-[1px] -z-0 mask-t-from-70% mask-b-from-50%"></div>
       <div className=" border  border-dashed border-transparent h-full w-[1px] -z-0 mask-t-from-50%"></div>
       <div className=" border  border-dashed border-white/30 h-full w-[1px] -z-0 mask-t-from-70% mask-b-from-50%"></div>
    
       <div className=" border  border-dashed border-transparent h-full w-[1px] -z-0 mask-t-from-50%"></div>
      </div>
     
      <H3 color='white'>[TESTIMONIALS]</H3>
      
      <div className='relative grid grid-cols-[auto_1fr_auto] gap-10'>
        <div className='hidden md:block h-full'>
          <div className='sticky top-60 text-6xl rotate-180 text-amber-300' data-comma>
            <SiComma />
          </div>
        </div>
        
       <div className='flex flex-col gap-20 items-center justify-center'>
  {testimonials.map((item, index) => {
    return (
      <motion.div  initial={{ opacity: 0, filter: "blur(50px)" }} 
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              transition: {
               
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1],
              },
            }} 
            viewport={{once:"true"}}
            key={index} className='flex flex-col max-w-lg text-center gap-5'>
        <h3 data-testimonial className='text-2xl font-[para] text-gray-300'>
          {item.text}
        </h3>
        <div>
          <motion.div 
            data-text
            initial={{ opacity: 0, filter: "blur(200px)" }} 
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                delay:0.01,
               
                duration: 0.8,
                ease: [0.25, 0.4, 0.25, 1],
              },
            }} 
            className='text-[26px] text-white font-[signature] '
          >
            "{item.name}"
          </motion.div>
          <p className='text-sm font-[heading] uppercase text-amber-300'>{item.role}</p>
        </div>
      </motion.div>
    )
  })}
</div>
        
        <div className='hidden md:block h-full'>
          <div className='sticky top-60 text-6xl text-amber-300' data-comma>
            <SiComma />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Testimonials2