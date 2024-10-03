import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-gray-600 w-full h-full py-8 px-4 md:px-20'>
        <div className='flex flex-col md:flex-row justify-between'>
            <p className='font-bold text-white text-xl mb-4 md:mb-0'>Leinad.</p>
            <div className='flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0'>
                <div className='text-white font-bold text-lg'>
                    <p>Web Developer</p>
                    <p>Frontend Developer</p>
                </div>
                <hr  className='hidden md:block' style={{width:'2px',height:'120px',border:'1px solid white'}}></hr>
                <div className='text-white font-bold text-lg'>
                    <p>Home</p>
                    <p>My projects</p>
                    <p>About me</p>
                    <p>Contact me</p>
                </div>
                <hr className='hidden md:block' style={{width:'2px',height:'120px',border:'1px solid white'}}></hr>
                <div>
                    <p className='text-white font-bold text-lg'>Social Media Handles </p>
                    <span className='flex text-2xl gap-2 pt-2'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaSnapchat/>
                        <FaTwitter/>

                    </span>
                </div>
            
            </div>

        </div>
        <hr style={{width:'100%',border:'1px solid white', marginTop: '20px'}} />
        <div className='text-xl flex items-center justify-center font-bold'>
            <p>Designed by me, Designed <span className='font-black text-green-400'>Onyinye</span> </p>

        </div>
    </div>
  )
}

export default Footer