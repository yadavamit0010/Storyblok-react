import React from 'react';

import { storyblokEditable } from "@storyblok/react";


const Teaser = ({ blok }) => {
  return (
    <div className='max-w-[1640px] mx-auto p-1 my-3' {...storyblokEditable(blok)}>
      <div className='max-h-[1500px] relative'>
        {/* Overlay */}
       
          <h3 className='px-6 text-2xl sm:text-3xl md:text-3xl lg:text-2xl font-bold'>
          <span className='text-orange-500'>{blok.headline} </span> 
          </h3><br/>
          <h5 className='px-6'>
           {blok.desc}
          </h5>
        
      </div>
    </div>
  );
};
export default Teaser;
