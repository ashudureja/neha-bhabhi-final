import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Trophy9({classname}) {
 

  

  return (
    
   <div className="h-80 w-80 flex items-center justify-center">
     <DotLottieReact
    //  style={{
    //     filter: "invert(1)",      // <-- Inverts colors
    //   }}
    
      src="/lottie/trophy9.lottie"
      loop
      autoplay
      
    />
   </div>

  );
}

export default Trophy9;
