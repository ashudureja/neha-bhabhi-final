import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Trophy1() {
 

  

  return (
    
   <div className="h-70 w-70  flex items-center justify-center">
     <DotLottieReact
    //  style={{
    //     filter: "invert(1)",      // <-- Inverts colors
    //   }}
    
      src="/lottie/trophy1.lottie"
      loop
      autoplay
      
    />
   </div>

  );
}

export default Trophy1;
