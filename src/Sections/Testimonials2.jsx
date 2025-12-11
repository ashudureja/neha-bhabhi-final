import React, { useRef, useEffect } from 'react'
import { SiComma } from "react-icons/si";
import { motion, useScroll, useTransform } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import H3 from '../Components/H3';
import { testimonials } from '../Constant/Recommendation';

gsap.registerPlugin(ScrollTrigger);



const Testimonials2 = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1.006]);

  useEffect(() => {
    const element = containerRef.current;
    
    if (!element) return;

    ScrollTrigger.create({
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        if (self.progress >= 0.8) {
          gsap.set(element, { backgroundColor: "#eaeaea" });
          gsap.set(element.querySelectorAll('[data-text]'), { color: "#000000" });
          gsap.set(element.querySelectorAll('[data-comma]'), { color: "#000000" });
          gsap.set(element.querySelectorAll('[data-testimonial]'), { color: "rgba(0, 0, 0, 0.7)" });
        } else {
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
      className='min-h-screen bg-black relative z-10 rounded-tl-[40px] sm:rounded-tl-[80px] lg:rounded-tl-[120px] rounded-tr-[40px] sm:rounded-tr-[80px] lg:rounded-tr-[120px] w-full py-20 sm:p-12 md:p-20 lg:p-32 xl:p-40 flex flex-col gap-10 sm:gap-16 lg:gap-20'
    >

      {/* Background Lines */}
      <div className="hidden sm:flex w-full h-full absolute left-1/2 -translate-x-1/2 gap-2 items-center justify-between">
        <div className="border border-dashed border-transparent h-full w-[1px] -z-0"></div>
        <div className="border border-dashed border-white/30 h-full w-[1px] -z-0 mask-t-from-98% mask-b-from-95%"></div>
        <div className="border border-dashed border-transparent h-full w-[1px] -z-0"></div>
        <div className="border border-dashed border-white/30 h-full w-[1px] -z-0 mask-t-from-98% mask-b-from-95%"></div>
        <div className="border border-dashed border-transparent h-full w-[1px] -z-0"></div>
      </div>
     
      <H3 color='white'>[TESTIMONIALS]</H3>
      
     
        <div className='relative  w-full h-full '>
          
           <div className='sticky z-1 top-60 left-0  flex justify-between'>
             <SiComma className='text-xl md:text-2xl lg:text-5xl text-amber-300 scale-y-[-1] scale-x-[-1]' />
             <SiComma className='   text-xl md:text-2xl lg:text-5xl text-amber-300 ' />
           </div>
         
          <div className='flex flex-col items-center justify-center  gap-13 md:gap-20'>
           {testimonials.map((item, index) => {
            return (
              <motion.div  
                initial={{ opacity: 0, filter: "blur(50px)" }} 
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: [0.25, 0.4, 0.25, 1],
                  },
                }} 
                viewport={{ once: true }}
                key={index} 
                className='flex flex-col max-w-xs md:max-w-sm lg:max-w-lg text-center gap-4 sm:gap-5'
              >
                

                <h3 
                  data-testimonial 
                  className='text-[4.5vw] md:text-[2.5vw] lg:text-2xl leading-5 md:leading-7.5 font-[para] text-gray-300'
                >
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
                        delay: 0.01,
                        duration: 0.8,
                        ease: [0.25, 0.4, 0.25, 1],
                      },
                    }} 
                    className='text-xl md:text-[22px] lg:text-2xl lg:text-[26px] text-white font-[signature]'
                  >
                    "{item.name}"
                  </motion.div>
                  <p className='text-xs sm:text-sm font-[heading]  uppercase text-amber-300'>
                    {item.role}
                  </p>
                </div>

                {/* Mobile Comma Bottom */}
                
              </motion.div>
            )
          })}
          </div>
         
        </div>
        
        {/* Right Comma - Hidden on mobile */}
     
         
   
    </motion.div>
  )
}

export default Testimonials2