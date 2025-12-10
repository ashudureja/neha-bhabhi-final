import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const translateY = Math.min(scrollY * 0.05, 50);

  return (
    <footer className="">
      <div className="px-2 lg:px-4 pt-8 lg:pt-16 pb-8 lg:pb-4 grid grid-cols-12 gap-2 lg:gap-4 relative">
        {/* Large background text */}
        <h2 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(100px,14vw,250px)] tracking-tight text-neutral-800/10 pointer-events-none select-none"
          style={{ transform: `translate(-50%, calc(-50% + ${translateY}px))` }}
        >
          itsjay.us
        </h2>

        {/* Work section */}
        <a 
          className="col-span-12 lg:col-span-8 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          href="/work"
        >
          Work
        </a>

        {/* Lab section */}
        <a 
          className="col-span-12 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          href="/lab"
        >
          Lab
        </a>

        {/* Contact and Github section */}
        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4">
          <a 
            href="mailto:jason@itsjay.us" 
            className="lg:col-span-2 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          >
            Contact
          </a>
          <a 
            href="https://github.com/jasonzubiate" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="lg:col-span-2 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          >
            Github
          </a>
        </div>

        {/* Instagram section */}
        <a 
          href="https://www.instagram.com/itsjay.us/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          Instagram
        </a>

        {/* LinkedIn section */}
        <a 
          href="https://www.linkedin.com/in/jasonzubiate/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}