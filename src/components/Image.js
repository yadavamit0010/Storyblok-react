import React from 'react';
import { storyblokEditable } from "@storyblok/react";

const Image = ({ blok }) => {
  return (
    <div className='mx-auto p-1 my-2.5'  {...storyblokEditable(blok)}>
      {/* <div className='max-h-[1500px] relative'> */}
        {/* Overlay */}
       
        <img
      className='px-6 h-auto w-auto rounded-lg object-cover object-center'
      src={blok.image.filename}
      alt="alt img"   
      />
        
      {/* </div> */}
    </div>
  );
};
export default Image;
