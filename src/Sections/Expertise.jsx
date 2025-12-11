import React from "react";
import { circOut, motion } from "motion/react";

import H3 from "../Components/H3";

const expertiseItems = [
  {
    id: 1,
    gridClass: "md:col-span-3 md:row-span-3",
    bgImage: "./images/sphere1.png",
    decorImage: "./images/api.png",
    decorClass: "h-80 md:h-120 lg:h-100 absolute right-0 -bottom-5 md:-bottom-10 object-cover",
    decorSpeedMobile: "0.05",
    decorSpeedDesktop: "0.03",
    title: "API Development",
    description: "Building robust and scalable APIs with Node.js, Express, and FastAPI"
  },
  {
    id: 2,
    gridClass: " md:col-span-3 md:row-span-4",
    bgImage: "./images/bento.png",
    decorImage: "./images/cloudbn.png",
    decorClass: "h-85 md:h-150  lg:h-180 object-cover",
    decorSpeedMobile: "0.03",
    decorSpeedDesktop: "0.15",
    decorContainer: "flex flex-col items-center justify-center gap-4 absolute -bottom-15 lg:-top-18 right-2",
    title: "Cloud Architecture & Migration",
    description: "Specializing in AWS migrations and container orchestration with Kubernetes and Docker for scalable cloud solutions."
  },
  {
    id: 3,
    gridClass: " md:col-span-3 md:row-span-4",
    bgImage: "./images/bento2.png",
    decorImage: "./images/micro.png",
    decorClass: "h-60 md:h-100 absolute right-0 -bottom-5 lg:-bottom-10 object-cover",
    decorSpeedMobile: "0.05",
    decorSpeedDesktop: "0.1",
    title: "Microservices",
    description: "Building distributed systems with event-driven architecture and microservices patterns for maximum scalability."
  },
  {
    id: 4,
    gridClass: "md:col-span-3 md:row-span-3",
    bgImage: "./images/sphere1.png",
    decorImage: "./images/db.png",
    decorClass: "h-80 md:h-112 absolute right-0 -bottom-20 lg:-bottom-25 opacity-80 object-cover",
    decorSpeedMobile: "0.05",
    decorSpeedDesktop: "0.05",
    title: "Database Optimization",
    description: "Creating and executing database patch scripts ensuring data integrity and optimal performance across environments."
  }
];

const Expertise = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1000);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen w-full pt-25 pb-2 md:pt-40 flex flex-col items-center px-4 md:px-5 lg:px-8 overflow-hidden">
      <H3>[EXPERTISE]</H3>
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-7 w-full md:h-[100vh] lg:h-[110vh] gap-3 md:gap-5 mt-15 md:mt-20">
        {expertiseItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: 100 }}
            whileInView={{ y: 1 }}
            transition={{ duration: 1, ease: circOut }}
            viewport={{ once: true }}
            className={`${item.gridClass} shadow-[0_3px_10px_rgb(0,0,0,0.2)] h-75 md:h-full  overflow-hidden bg-gray-200 backdrop-blur-3xl rounded-xl p-2`}
          >
            <motion.div
              initial={{ scale: 1.3 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: circOut }}
              viewport={{ once: true }}
              className="relative h-full w-full shadow-[0_4px_6px_-2px_rgb(151_151_185)] rounded-xl overflow-hidden"
              style={{
                backgroundImage: `url(${item.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {item.decorContainer ? (
                <div className={item.decorContainer}>
                  <img 
                    data-scroll 
                    data-scroll-speed={isMobile ? item.decorSpeedMobile : item.decorSpeedDesktop} 
                    className={item.decorClass} 
                    src={item.decorImage}
                    alt=""
                  />
                </div>
              ) : (
                <img 
                  data-scroll 
                  data-scroll-speed={isMobile ? item.decorSpeedMobile : item.decorSpeedDesktop} 
                  className={item.decorClass} 
                  src={item.decorImage}
                  alt=""
                />
              )}
              
              <motion.div 
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
                delay:0.1,
                  duration: 0.8,
                  ease: [0.25, 0.4, 0.25, 1],
                },
              }}
              viewport={{once:true}}
              className="absolute top-3 md:top-6 left-3 md:left-5">
                <h3 className="text-[5.3vw] md:text-[3cqw]  lg:text-[25px] 2xl:text-3xl text-shadow-lg uppercase relative tracking-normal font-[heading]">
                  {item.title}
                </h3>
                <p className="text-black text-[4vw] leading-5 md:leading-7.5 md:text-[2.2vw] lg:text-xl 2xl:text-[22px] mt-1 md:mt-2 font-[para] max-w-[70cqw] md:max-w-sm">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;