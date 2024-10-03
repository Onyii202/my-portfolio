import React from 'react'
import { FaLocationArrow, FaMailBulk, FaMailchimp, FaPhone, FaSms } from 'react-icons/fa'

const Touch =React.forwardRef ((props, ref) => {
  return (
    <div ref={ref} className='pb-32'>
       <div className='md:flex flex-col flex flex-row items-center text-center pt-10 font-bold'>
            <div className='text-black'>GET IN TOUCH</div>
            <p className='text-black font-bold text-2xl'>Contact <span className='text-green-700'>me.</span> </p>
            <p className='md:text-xl text-2xl pt-4'>i am currrently open to full-time,contract or part-time opportunities in</p>
            <p className='md:text-xl text-2xl'>Front End Development.</p>
        </div>
        <div className='bg-gray-900  mt-8 md:mx-10 mx-6 rounded-lg md:flex  justify-between 
           py-14 md:px-20 px-10 '>
          <div className='font-bold'>
            <p className='text-white text-2xl'>Have an awesome project idea?</p>
            <p className='text-green-400 text-xl pb-12'>Let's Discuss.</p>
            <span className='flex gap-4 items-center mb-6'>
              <FaPhone className='border border-gray-300 text-4xl bg-gray-300 rounded-full
              flex items-center justify-center'/>
              <p className='text-green-400 text-lg'>+2349070434917</p>
            </span>
            <span className='flex gap-4 items-center mb-6'>
              <FaMailBulk className='border border-gray-300 text-4xl bg-gray-300 rounded-full 
              flex items-center justify-center'/>
              <p className='text-green-400 text-lg'>prettyonyii02@gmail.com</p>
            </span>
            <span className='flex gap-4 items-center'>
              <FaLocationArrow className='border border-gray-300 text-4xl bg-gray-300 rounded-full 
              flex items-center justify-center'/>
              <p className='text-white text-lg'>Abuja,Nigeria.</p>
            </span>
          </div>
          <div className='font-bold text-white pt-8 md:pt-0 '>
            <label className='block text-lg font-medium mb-4' for='full name'>Full Name</label>
            <input className=' md:w-[30rem] w-[22rem] h-16 rounded-xl pl-2 bg-gray-900 border border-gray-300' type='text'
             placeholder='Enter name'/>
            <label className='block text-lg font-medium mb-4' for='Email address'>Email Address</label>
            <input className='md:w-[30rem] w-[22rem]  h-16 rounded-xl pl-2 bg-gray-900 border border-gray-300' type='text'
             placeholder='Enter email'/>
            <label className='block text-lg font-medium mb-4 ' for='message'>Message</label>
            <textarea className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 
              focus:ring-green-400 focus:border-transparent bg-gray-900 w-full" placeholder="Enter message..."
              id="" cols="50" rows="7" required>
            </textarea>
            <div className='mt-4'>
              <button className="bg-green-400 w-40 h-12 rounded-md inline-flex items-center justify-center
              space-x-2 gap-2 text-black">
                Send Message
                <FaSms/>
              </button>

            </div>
          </div>
        </div>  
    </div>
  )
});

export default Touch