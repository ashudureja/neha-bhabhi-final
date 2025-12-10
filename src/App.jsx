import React from "react";
import Hero from "./Sections/Hero";
import Loader from "./Sections/Loader";
import Navbar from "./Sections/Navbar";
import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";


import Expertise from "./Sections/Expertise";
import About from "./Sections/About";
import Tools from "./Sections/Tools";
import Experience from "./Sections/Experience";
import Testimonials2 from "./Sections/Testimonials2";
import Awards from "./Sections/Awards";


import Footer2 from "./Sections/Footer2";

import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const PRELOAD_DELAY_MS = 1600;

  const locomotiveScroll = new LocomotiveScroll();



  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsContentVisible(true);
    }, PRELOAD_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  return (
  
    <div className="bg-wht relative">
      <div className="flex w-full h-full absolute left-1/2 -translate-x-1/2 gap-2 items-center justify-between  ">
       <div className=" border  border-dashed border-white/50 h-full w-[1px] -z-0 mask-t-from-50%"></div>
       <div className=" border  border-dashed border-white/50 h-full w-[1px] -z-0 mask-t-from-50%"></div>
       <div className=" border  border-dashed border-white/50 h-full w-[1px] -z-0 mask-t-from-50%"></div>
       <div className=" border  border-dashed border-white/50 h-full w-[1px] -z-0 mask-t-from-50%"></div>
    
       <div className=" border  border-dashed border-white/50 h-full w-[1px] -z-0 mask-t-from-50%"></div>
      </div>
    

      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
      <Navbar />

      <Hero />
      <About/>
     
      <Expertise/>
    
          
      <Experience/>
     
  
      <Testimonials2/>
         <Awards/>
        <Footer2/>
      
    </div>
    
  );
};

export default App;
