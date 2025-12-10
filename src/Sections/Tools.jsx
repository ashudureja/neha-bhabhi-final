import { motion, useScroll, useTransform } from 'motion/react';
import React, { useRef } from 'react';

import Marquee from 'react-fast-marquee';
import { 
  SiGooglesheets, 
  SiZoom, 
  SiOpenai, 
  SiStripe, 
  SiGmail, 
  SiAirtable, 
  SiZendesk, 
  SiSlack, 
  SiLinear,
  SiNotion
} from 'react-icons/si';

import { SiJavascript, SiPython, SiNodedotjs, SiReact, SiDocker, SiKubernetes, SiGit } from 'react-icons/si'
import { TbBrandJavascript } from "react-icons/tb"

import { FaJava } from "react-icons/fa6";
import { FaAws } from "react-icons/fa6";
import { BiLogoSpringBoot } from "react-icons/bi";



// --- 2. Main Section Component ---

const Tools = () => {

  const row1 = [
     <FaJava className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#007396]'/>,// Node.js official green
    null, 
    null, 
    <SiNodedotjs className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#339933]'/>, // Duplicate - consider removing
    null, 
    null, 
    <TbBrandJavascript className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F7DF1E]'/>, // JavaScript official yellow
    null, 
    null,
    <SiReact className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#61DAFB]'/>, // React official cyan
    null, 
  ];

  const row2 = [
    <SiKubernetes className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#326CE5]'/>,
    null, 
    null,
    <SiDocker className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2496ED]'/>, // Docker official blue
    null, 
    null, 
   <SiKubernetes className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#326CE5]'/>,
    null, 
    null,
   <SiDocker className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#2496ED]'/>, // Kubernetes official blue
    null, 
    null, 
  ];

  const row3 = [
    null, 
    <SiPython className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#3776AB]'/>, // Python official blue
    null, 
    null, 
   <SiJavascript className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F7DF1E]'/>,
    null, 
    null,
    <SiGit className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F05032]'/>, // Git official orange-red
    null, 
    null, 
    <BiLogoSpringBoot className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#6DB33F]'/>, // Spring Boot official green
  ];

  const row4 = [
   <FaAws className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FF9900]'/>,
    null, 
    null,
    <FaJava className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#007396]'/>, // Java official blue (not red)
    null, 
    null, 
     
    null, 
    <FaAws className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FF9900]'/>, // AWS official orange
null,
    null, 
    <SiNodedotjs className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#339933]'/>,
    null,
  ];

  
 

  return (
    <section className="relative w-full  flex flex-col items-center  ">
     
      

     
      <div className="h-full w-full z-10 pointer-events-none select-none relative ">
        
        
        <div 
          className="w-full h-full flex flex-col p-2 sm:p-4 items-center justify-center mask-l-from-70% mask-r-from-70% mask-b-from-80% "
          style={{
            // Adjust rotation here if you want more/less tilt - reduced on mobile
            transform: window.innerWidth < 640 
              ? 'perspective(800px) rotateX(8deg) rotateZ(-15deg) skewY(6deg)' 
              : 'perspective(1000px) rotateX(10deg) rotateZ(-20deg) skewY(8deg)',
          }}
        >
          <Marquee gradient={false} speed={40} direction="left" className='p-1 sm:p-2 mask-b-from-95% z-10 relative'>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 ">
              {row1.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 bg-white/30 rounded-lg '></div> : <div className='bg-white/70 overflow-hidden  relative rounded-xl h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 shadow-2xl flex items-center justify-center'>
                     {/* <img className="absolute inset-0 top-16 blur-[30px] z-10" src="/bg1.png" alt=""></img> */}
                     <div className='z-10'>{item}</div></div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>

          <Marquee gradient={false} speed={25} direction="right" className='p-1 sm:p-2 mask-b-from-95% z-10 relative'>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {row2.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 bg-white/30 rounded-lg '></div> : <div className='bg-white/70 rounded-xl h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 shadow-2xl flex items-center justify-center'>{item}</div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>

          <Marquee gradient={false} speed={40} direction="left" className='p-1 sm:p-2 mask-b-from-95% z-10 relative'>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {row3.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 bg-white/30 rounded-lg '></div> : <div className='bg-white/70 rounded-xl h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 shadow-2xl flex items-center justify-center'>{item}</div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>

          <Marquee gradient={false} speed={25} direction="right" className='p-1 sm:p-2 mask-b-from-95% z-10 relative'>
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              {row4.map((item, index) => (
                <React.Fragment key={index}>
                  {/* If item exists, render Icon Card, otherwise render Empty White Card */}
                  {!item ? <div className='h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 bg-white/30  rounded-lg '></div> : <div className='bg-white/70 rounded-xl h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30 shadow-2xl flex items-center justify-center'>{item}</div>}
                </React.Fragment>
              ))}
            </div>
          </Marquee>
         
        </div>
      </div>

     
     
    

    </section>
  );
};

export default Tools;