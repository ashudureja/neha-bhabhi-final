import React from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const AnimatedPara = ({ para }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = para.split(" ");
  return (
    <p
      ref={container}
      className="text-[4.5vw] md:text-[3vw] lg:text-[1.8vw] leading-6 md:leading-9 text-black/80 font-[para] max-w-xs sm:max-w-xl text-center  flex-wrap flex  gap-1 items-center justify-center"
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default AnimatedPara;

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const blur = useTransform(progress, range, [10, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <span className="relative ">
      <span className="absolute opacity-20">{children}</span>
      <motion.span
        className="text-shadow-sm"
        style={{
          opacity,
          filter,
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};
