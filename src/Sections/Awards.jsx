import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award } from 'lucide-react';
import H3 from '../Components/H3';


// import { RightLine } from './Line';
// import { LeftLine } from './Line';

const Awards = () => {
  const awards = [
    {
      title: "Making IT Real Award",
      company: "Fidelity International",
      period: "2021-2022",
      url:"./images/trophy42.gif"
    },
    {
      title: "Bi-Annual Award",
      company: "Fidelity International",
      period: "2020-2021",
       url:"./images/trophy11.gif"
    },
    {
      title: "On The Spot Award",
      company: "Fidelity International",
      period: "2018-2021",
       url:"./images/trophy62.gif"
    },
    {
      title: "1st Runner Up",
      company: "Nasscom WSC",
      period: "2015-2016",
       url:"./images/trophy94.gif"
    },
    {
      title: "Global Finalist",
      company: "Microsoft Apps Challenge",
      period: "2014-2015",
       url:"./images/trophy72.gif"
    }
  ];

  return (
    <div className="min-h-screen mt-40 px-4">
      
       <H3>[ACHIEVMENTS]</H3>
      <div className='flex justify-between    h-full w-full'>
                {/* <LeftLine/> */}
      
      <div className="flex flex-wrap items-center justify-center  gap-6 ">
        {awards.map((award, index) => (
          <AwardCard key={index} award={award} index={index} />
        ))}
      </div>
      {/* <RightLine/> */}
      </div>
    </div>
  );
};

const AwardCard = ({ award, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.5, 1], [0.9, 1, 1, 0.8]);

  return (
    // <motion.div
    //   ref={cardRef}
    //   style={{
    //     opacity,
    //     y,
    //     scale,
    //     transformOrigin: 'center center'
    //   }}
    // //   initial={{ opacity: 0, y: 20 }}
    // //   animate={{ opacity: 1, y: 0 }}
    // //   transition={{ delay: index * 0.1, duration: 0.5 }}
    //   className="w-80 h-100 border relative border-[#cdcddd] bg-[#e0e0eb] rounded-4xl p-3 shadow-[0_0.25rem_0.375rem_-0.125rem_rgba(0,0,0,0.08)]"
    // >
      <motion.div 
      ref={cardRef}
      style={{
        opacity,
        y,
        scale,
        transformOrigin: 'center center'
      }}
    //   initial={{ opacity: 0, y: 20 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ delay: index * 0.1, duration: 0.5 }}
        
        className="w-90 md:h-110 relative bg-gradient-to-b from-transparent via-yellow-50 to-yellow-400  overflow-hidden rounded-3xl  p-6 border border-[#e0e0eb] flex flex-col shadow-[0_4px_6px_-2px_rgb(151_151_185)]"
      >
        {/* <div className="inset-0 bg-[url('./images/bento.png')] bg-cover absolute opacity-70" ></div> */}
        
       
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
   {/* <Trophy/> */}
 
         
          
          <h4 className="text-[5.5vw] md:text-[3vw]  lg:text-[25px] 2xl:text-3xl font-[heading] mt-4 text-black text-shadow-lg  text-center">
            {award.title}
          </h4>
          
          <p className="text-lg font-[para] text-black mb-3 text-center">
            {award.company}
          </p>

            <img className=' size-35 md:size-45' src={award.url}></img>
          
          <div className="mt-5 md:mt-auto w-full">
            <div className=" w-full font-[heading]  text-center shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] bg-blk tracking-wider text-white tracking-wide text-sm px-3 py-2 rounded-full">
              {award.period}
            </div>
          </div>
        </div>
      </motion.div>
    // </motion.div>
  );
};

export default Awards;