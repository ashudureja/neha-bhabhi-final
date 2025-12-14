import React, { useRef } from 'react'

import { motion, useScroll, useTransform } from 'motion/react'
import H3 from '../Components/H3';
import AnimatedPara from '../Components/AnimatedPara';
import Tools from './Tools';
const About = () => {

 
  
  const para = "I am Neha Valecha, Senior Software developer with 8 years of experience, skilled in developing robust and efficient code using various programming languages and frameworks. Expertise in building scalable and secure web applications with a strong understanding of software development practices."
  const para2= "I am proficienct in Java, Spring Boot, and microservices architecture. My skill set spans cloud technologies including AWS, Docker, and Kubernetes, along with backend frameworks like Node.js, Python, and Hibernate. I'm experienced in implementing CI/CD pipelines, database management, and testing with JUnit, while utilizing tools like Git and Maven to deliver scalable, enterprise-grade applications."

   
  return (
    <div className=' w-full flex flex-col items-center pt-10 sm:pt-40  overflow-hidden'>
      
        <H3>[ABOUT ME]</H3>

       <div className='flex mt-10 flex-col gap-20 w-full h-full items-center justify-center'>
         <AnimatedPara para={para}/>
        <Tools/>
       
          <AnimatedPara para={para2}/>
      
       </div>

        




    </div>
  )
}

export default About

