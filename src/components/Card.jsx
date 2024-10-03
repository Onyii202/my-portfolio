import React from 'react'
import { FaFacebook, FaPhone, FaSnapchat, FaTwitter, FaVoicemail } from 'react-icons/fa';

const Card = () => {
  return (
    <div className="flex items-center justify-center font-bold text-3xl text-gray-300 gap-4 pt-14">
      <FaFacebook/>
      <FaTwitter />
      <FaPhone />
      <FaSnapchat />
    </div>
      
  );
}

export default Card