import React from "react";
import { motion ,useScroll, useTransform } from "motion/react";

import { MdEmail, MdDownload } from "react-icons/md";
import UnicornBackground from "./UnicornBackground";
import { useRef } from "react";

import H1 from "../Components/H1";
import Button from "../Components/Button";
import Download from "../LottieAnimation/Download";
import Contact from "../LottieAnimation/Contact";

const blurVariants = {
  initial: {
    opacity: 0,
    filter: "blur(20px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },
  transition: {
    delay: 0.5,
    duration: 1,
    ease: [0.25, 0.4, 0.25, 1],
  },
};

const blurVariants2 = {
  initial: {
    opacity: 0,
    filter: "blur(80px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },
  transition: {
    delay: 5,
    duration: 1,
    ease: [0.25, 0.4, 0.25, 1],
  },
};

const shakeVariants = {
  shake: {
    x: [0, -5, 5, -5, 5, 0], // shake left-right
    transition: { duration: 0.6, ease: "easeInOut" }
  }
}

const Hero = ({ isContentVisible }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 0.3 "]
  });

 
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.90]);


  const words = ["Backend", "Developer"];
  const para = `Specialized in building scalable, high performance systems with clean architecture and efficient data flows. I focus on writing reliable backend services, optimizing system performance, and delivering secure, production ready solutions that help businesses grow.`;

  const paraWord = para.split(" ");
  const images = [
    "https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg",
    "https://cdn.worldvectorlogo.com/logos/expressjs.svg",
    "https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg",
    "https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg",
    "https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg",
    "https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg",
  ];

  const imageCopy = [...images, ...images];

  return (
 
     <motion.div style={{y}} ref={containerRef}  className="min-h-screen  mask-b-from-90% lg:mask-b-from-80% w-full relative flex flex-col gap-7 items-center justify-center p-5 bg-cover overflow-hidden  ">
     
      <UnicornBackground/>
   
      <motion.img
        variants={blurVariants}
        initial="initial"
        whileInView="animate"
        transition={blurVariants.transition}
        className="h-30 absolute top-35 right-30 hidden sm:block"
        src="./images/stars5.webp"
      />

      <motion.img
        variants={blurVariants}
        initial="initial"
        whileInView="animate"
        transition={blurVariants.transition}
        className="h-20 absolute bottom-35 left-30 hidden sm:block" 
        src="./images/stars5.webp"
      />

      <motion.h1
        variants={blurVariants2}
        initial="initial"
        animate="animate"
        transition={blurVariants2.transition}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xl text-shadow-lg font-[signature]"
      >
        {/* Neha Valecha */}
      </motion.h1>
      
      <div className="relative mt-20">
        <H1 text="Backend Developer"/>

        <MySVG />
        <motion.p
          variants={blurVariants}
          initial="initial"
          whileInView="animate"
           viewport={{ once: true }}
          transition={blurVariants.transition}
          className="absolute -top-6 left-20 font-[heading] uppercase"
        >
          Senior
        </motion.p>
      </div>

      <div className=" text-[clamp(13px,2vw,22px)] leading-4 md:leading-7 pointer-events-none w-full md:max-w-5xl lg:max-w-6xl text-center md:-mt-5 lg:-mt-10 font-[para] flex flex-wrap justify-center gap-x-1">
        {paraWord.map((word, index) => (
          <motion.span
            initial={{ opacity: 0, rotate: 2, filter: "blur(10px)" }}
            whileInView={{
              opacity: 1,
              rotate: 0,
              y: 0,
              filter: "blur(0px)",
              transition: {
                delay: index * 0.05,
                duration: 0.4,
                ease: [0.25, 0.4, 0.25, 1],
              },
            }}
             viewport={{ once: true }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="flex gap-6 md:gap-8">
        <motion.button
          initial={{ y: 50, scale:window.innerWidth<640?1.05:1.1, opacity: 0, filter: "blur(20px)" }}
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
          className="px-5 py-2.5 text-xs md:text-sm md:py-3 font-[heading] tracking-wide bg-black shadow-brand text-white rounded-xl uppercase cursor-pointer flex items-center justify-center gap-3"
        >
         <motion.div
  
      className="inline-block"
    >
      {/* <MdEmail className="text-2xl" /> */}
      <img className="h-5" src="https://media.tenor.com/ju4PztDv8WcAAAAj/firstrequestrecords-first-request.gif"></img>
      {/* <Contact/> */}
    </motion.div>
          Contact Me
        </motion.button>

        <motion.button
          initial={{ y: 50, scale:window.innerWidth<640?1.05:1.1, opacity: 0, filter: "blur(20px)" }}
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
          className=" px-6 shadow-brand py-2.5 md:py-3 uppercase font-[heading] tracking-wide  text-xs  md:text-sm bg-black  text-white rounded-xl cursor-pointer flex items-center justify-center gap-1"
        >
         
        <div className="-ml-1">
           <Download/>
        </div>
       
          <span>Resume</span>
           
        </motion.button>

       
      </div>
    </motion.div>

  );
};

export default Hero;

{
}

const MySVG = () => {
  return (
    <motion.svg
      variants={blurVariants}
      initial="initial"
      whileInView="animate"
      transition={blurVariants.transition}
      className="absolute h-10 -top-5 left-3 "
      viewBox="0 0 209 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M134.408 1.05383C124.929 1.96687 105.406 6.82747 93.7645 11.1644C88.2593 13.1919 79.9076 17.1932 75.7452 19.7712C66.1314 25.7328 52.57 38.0185 43.1441 49.2704C33.5571 60.7371 24.2655 74.755 15.7661 90.5049L12.7719 96.0503L12.933 93.9288C13.027 92.7607 13.2955 89.3636 13.5238 86.3962L13.9535 80.9851L12.8793 79.3202C10.8518 76.1648 5.38697 71.6265 4.3665 72.2441C3.93684 72.4993 3.38632 74.6207 3.35947 76.1514C3.35947 76.8631 3.10435 78.2729 2.76867 79.2531C2.339 80.5286 2.24501 81.2805 2.47327 81.831C2.6344 82.3144 2.63439 85.0535 2.40613 88.84C1.78848 99.7562 1.42596 103.771 0.714318 107.611L0.029541 111.33L0.969437 113.156C2.76868 116.58 10.3282 123.267 12.4362 123.267C13.4835 123.267 16.0213 120.796 25.5008 110.552C29.7438 105.986 37.4241 97.9972 42.6473 92.8547L52.0732 83.4691L51.2944 81.9385C49.7905 79.0382 43.2381 73.0766 41.5463 73.0766C41.224 73.0766 33.0335 79.0785 30.2675 81.3611L28.6696 82.7038L29.5827 81.0791C31.2745 78.1117 39.1025 66.4705 41.8417 62.8318C48.3001 54.2653 56.9338 44.9066 63.9696 38.8108C74.4025 29.7878 85.8424 22.8997 96.7587 19.0864C109.662 14.5615 122.539 11.433 135.389 9.63374C141.323 8.81469 159.02 8.81469 164.566 9.63374C174.113 11.0704 188.063 14.9777 198.134 19.0595C200.967 20.2277 201.719 20.6842 203.907 22.7788C206.579 25.3166 208.473 26.2699 208.661 25.1286C208.983 23.3696 203.961 17.502 199.664 14.6689C196.281 12.3863 192.696 10.8288 185.056 8.25076C175.146 4.89399 166.54 2.83964 157.221 1.56406C152.723 0.94642 138.839 0.65103 134.408 1.10755V1.05383Z"
        fill="#1b1b1b"
      />
    </motion.svg>
  );
};

