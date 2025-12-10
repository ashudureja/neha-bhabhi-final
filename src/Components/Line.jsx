import React from 'react';

export const LeftLine = () => {
  return (
     <div className="sm:flex flex-col gap-0 min-w-[6rem] hidden">
          
            <div 
              className="w-full h-[7.5rem] border-r border-t border-[#cdcddd] rounded-tr-[1.5rem]"
              style={{ boxShadow: 'inset -0.125rem 0.125rem 0.0625rem -0.5px white' }}
            />
            
           
            <div 
              className="w-full flex-1 min-h-[1rem] border-r border-[#cdcddd]"
              style={{ boxShadow: 'inset -0.125rem 0 0.0625rem -0.5px white' }}
            />
            
          
            <div 
              className="w-full h-[7.5rem] border-r border-b border-[#cdcddd] rounded-br-[1.5rem]"
              style={{ boxShadow: 'inset -0.125rem -0.125rem 0.0625rem -0.5px white' }}
            />
          </div>
  );
};

export const RightLine=()=>{
  return (
     <div className="sm:flex hidden flex-col gap-0 min-w-[6rem] scale-x-[-1]">
          
            <div 
              className="w-full h-[7.5rem] border-r border-t border-[#cdcddd] rounded-tr-[1.5rem]"
              style={{ boxShadow: 'inset -0.125rem 0.125rem 0.0625rem -0.5px white' }}
            />
            
           
            <div 
              className="w-full flex-1 min-h-[1rem] border-r border-[#cdcddd]"
              style={{ boxShadow: 'inset -0.125rem 0 0.0625rem -0.5px white' }}
            />
            
          
            <div 
              className="w-full h-[7.5rem] border-r border-b border-[#cdcddd] rounded-br-[1.5rem]"
              style={{ boxShadow: 'inset -0.125rem -0.125rem 0.0625rem -0.5px white' }}
            />
          </div>
  );
};
// Demo wrapper to show the component
