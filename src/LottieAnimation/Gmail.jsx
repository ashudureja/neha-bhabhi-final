import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Gmail({classname}) {
 

  

  return (
    
  
     <div className="h-6 w-6  absolute -right-10 -top-[2px] invert">
  <DotLottieReact
    src="/lottie/gmail3.lottie"
    loop
    autoplay
    className="w-full h-full "
  />
</div>

  

  );
}

export default Gmail;
