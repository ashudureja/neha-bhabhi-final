import React, { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Instagram({classname}) {
 

  

  return (
    
  
     <div className="h-8 w-8  absolute -right-10 -top-[7px] invert">
  <DotLottieReact
    src="/lottie/instagram.lottie"
    loop
    autoplay
    className="w-full h-full scale-110"
  />
</div>

  

  );
}

export default Instagram;
