import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Github({classname}) {
 

  

  return (
    
  
     <div className="h-5.5 w-5.5  absolute -right-8  invert">
  <DotLottieReact
    src="/lottie/git2.lottie"
    loop
    autoplay
    className="w-full h-full "
  />
</div>

  

  );
}

export default Github;
