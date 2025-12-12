import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Contact() {
 

  

  return (
    
   <div className="h-8 w-8 flex items-center justify-center">
     <DotLottieReact
     style={{
        filter: "invert(1)",      // <-- Inverts colors
      }}
    
      src="/lottie/ph3.lottie"
      loop
      autoplay
      
    />
   </div>

  );
}

export default Contact;
