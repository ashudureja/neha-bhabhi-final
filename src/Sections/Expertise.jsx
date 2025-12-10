import React from "react";
import { circOut, motion } from "motion/react";

import H3 from "../Components/H3";

const expertiseItems = [
  {
    id: 1,
    gridClass: "col-span-3 row-span-3",
    bgImage: "./images/sphere1.png",
    decorImage: "./images/api.png",
    decorClass: "h-100 absolute right-0 -bottom-10 object-cover",
    decorSpeed: "0.03",
    title: "API Development",
    description: "Building robust and scalable APIs with Node.js, Express, and FastAPI"
  },
  {
    id: 2,
    gridClass: "col-span-3 row-span-4",
    bgImage: "./images/bento.png",
    decorImage: "./images/cloudbn.png",
    decorClass: "h-200 object-cover",
    decorSpeed: "0.2",
    decorContainer: "flex flex-col items-center justify-center gap-4 absolute -top-4 right-2",
    title: "Cloud Architecture & Migration",
    description: "Specializing in AWS cloud migrations, transforming legacy systems into modern, scalable cloud-native applications. Expert in Kubernetes orchestration and Docker containerization for optimal performance."
  },
  {
    id: 3,
    gridClass: "col-span-3 row-span-4",
    bgImage: "./images/bento2.png",
    decorImage: "./images/micro.png",
    decorClass: "h-100 absolute right-0 -bottom-10 object-cover",
    decorSpeed: "0.1",
    title: "Microservices",
    description: "Building distributed systems with event-driven architecture and microservices patterns for maximum scalability."
  },
  {
    id: 4,
    gridClass: "col-span-3 row-span-3",
    bgImage: "./images/sphere1.png",
    decorImage: "./images/db.png",
    decorClass: "h-112 absolute right-0 -bottom-25 opacity-80 object-cover",
    decorSpeed: "0.05",
    title: "Database Optimization",
    description: "Creating and executing database patch scripts ensuring data integrity and optimal performance across environments."
  }
];

const Expertise = () => {
  return (
    <div className="min-h-screen w-full pt-40 flex flex-col items-center px-8 overflow-hidden">
      <H3>[EXPERTISE]</H3>
      <div className="grid grid-cols-6 grid-rows-7 w-full h-[110vh] gap-5 mt-20">
        {expertiseItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ y: 100 }}
            whileInView={{ y: 1 }}
            transition={{ duration: 1, ease: circOut }}
            viewport={{ once: true }}
            className={`${item.gridClass} shadow-[0_3px_10px_rgb(0,0,0,0.2)] overflow-hidden bg-gray-200 backdrop-blur-3xl rounded-xl p-2`}
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
                    data-scroll-speed={item.decorSpeed} 
                    className={item.decorClass} 
                    src={item.decorImage}
                    alt=""
                  />
                </div>
              ) : (
                <img 
                  data-scroll 
                  data-scroll-speed={item.decorSpeed} 
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
              className="absolute top-6 left-5">
                <h3 className="text-2xl text-shadow-lg uppercase relative tracking-normal font-[heading]">
                  {item.title}
                </h3>
                <p className="text-black text-lg mt-2 font-[para] max-w-sm">
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