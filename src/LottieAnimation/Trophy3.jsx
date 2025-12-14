import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Trophy3() {
 

  

  return (
    
   <div className="h-50 w-50 md:h-70 md:w-70  flex items-center justify-center">
     <DotLottieReact
    //  style={{
    //     filter: "invert(1)",      // <-- Inverts colors
    //   }}
    
      src="/lottie/Trophy3.lottie"
      loop
      autoplay
      
    />
   </div>

  );
}

export default Trophy3;
