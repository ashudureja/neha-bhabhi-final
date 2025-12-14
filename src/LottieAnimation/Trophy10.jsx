import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Trophy10({classname}) {
 

  

  return (
    
   <div className="h-50 w-50 md:h-70 md:w-70 flex items-center justify-center">
     <DotLottieReact
    //  style={{
    //     filter: "invert(1)",      // <-- Inverts colors
    //   }}
    
      src="/lottie/trophy10.lottie"
      loop
      autoplay
      
    />
   </div>

  );
}

export default Trophy10;
