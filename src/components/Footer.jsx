import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return <>
  <hr />
 <footer className='py-12'>
  <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
  <div className=' flex flex-col items-center justify-center '>
    <div className='flex space-x-4'>
    <FaFacebook size={24}></FaFacebook>
    <FaLinkedin size={24} ></FaLinkedin>
    <FaYoutube size={24}></FaYoutube>
    <FaInstagram size={24}></FaInstagram>
    </div>
   <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
    <p className='text-sm'>&copy; 2024 Your Company. All rights reserved.</p>
    <p className='text-sm'>Designed and Created by Prashant</p>
   </div>
  </div>
  </div>
 </footer>

  
  </>
}

export default Footer
