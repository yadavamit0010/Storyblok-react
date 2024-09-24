import React from 'react';
import { storyblokEditable } from "@storyblok/react";

const HeroSection = ({ blok }) => {
  return (
    <div className='max-w-[1640px] mx-auto p-6 my-4' {...storyblokEditable(blok)}>
      <div className='max-h-[1500px] relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='px-6 text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold'>
          {blok.title} 
          </h1>
          <h1 className='px-6 text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold'>
            <span className='text-orange-500'>{blok.desc}</span> 
          </h1>
        </div>
        <img
          className='w-full max-h-[500px] object-cover'
          src={blok.image.filename}
          alt='hero section'
        />
      </div>
    </div>
  );
};
export default HeroSection;