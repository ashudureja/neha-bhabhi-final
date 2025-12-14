import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Nav({classname}) {
 

  

  return (
    
  
     <div className="h-12 w-12 bg-white rounded-md flex items-center justify-center  ">
  <DotLottieReact
    src="/lottie/nav.lottie"
    loop
    autoplay
    
  />
</div>

  

  );
}

export default Nav;
