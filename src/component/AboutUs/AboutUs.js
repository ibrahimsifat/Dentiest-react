import React from 'react';
import AboutBody from './AboutBody'

const AboutUs = () => {
    return (
      <div>
            <div className='positio h-screen about_banner flex justify-center items-center'>
            <div class="">
              <h1 class="sm:text-4xl text-5xl font-medium font-bold title-font mb-2 text-gray-900">Our Services</h1>
              <div class="h-1 w-44 bg-green-400 rounded"></div>
            </div>
        </div>
        
        <AboutBody></AboutBody>
      </div>
    );
};

export default AboutUs;