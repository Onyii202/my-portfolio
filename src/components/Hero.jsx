import React from 'react'
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center pt-10 px-4'>
      <div className="text-white font-bold md:extrabold text-center md:text-left ">
        <div className='md:pl-12 md:text-2xl'>
         Hi,i am <span className='text-green-300 text-3xl'>Onyinye</span>

        </div>
        {/* <br /> */}
        <p className='text-lg mt-2 md:text-2xl font-black'>
          A seasoned <span className='text-green-300'>Frontend Developer</span> transforming ideas into Stunning
          
        </p>
        <div className='md:pl-8 mt-2 md:text-2xl font-black'>
         digital experiences,Let's create something amazing!

        </div>
        
      </div>
     
    </div>
  );
}

export default Hero;