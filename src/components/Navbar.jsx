import React, { useState } from 'react'
import pic from '../../public/pic.jpeg'
import pic2 from "../../public/pic5.jpeg"
import {MdOutlineMenu } from 'react-icons/md'
import { RxCross2 } from "react-icons/rx";
import {Link} from 'react-scroll';

const Navbar = () => {
  const[menu, setMenu]=useState(false);

  const navItems=[
    {
      id:1,
      text:"Home",
    },
    {
      id:2,
      text:"About",
    },
    {
      id:3,
      text:"Portfolio",
    },
    {
      id:4,
      text:"Experiance",
    },
    {
      id:5,
      text:"Contacts",
    },
  ]
  return  <>
  <div className='max-w-screen-2xl container mx-auto  px-4 md:px-20 h-16 shadow fixed top-0 left-0 right-0 bg-white'>
    <div className='flex justify-between items-center h-16'>
      <div className='flex space-x-2'>
        <img src={pic2} className='h-12 w-12 rounded-full'></img>
        <h1 className='font-semibold text-large cursor-pointer'>Prash<span className='text-green-500 text-xl' >ant</span>
        <p className='text-sm'>Web Developer</p>
        </h1>
      </div>
      {/* {dextop navbar} */}
      <div>
        <ul className='hidden md:flex space-x-8'>
          {
            navItems.map(({id,text})=>
            (
              <li className='hover:scale-105 duration-200 cursor-pointer' key={id}><Link to={text} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link></li>
            ))
          }
        </ul>
      <div onClick={()=>setMenu(!menu)} className='md:hidden'>  { menu?< RxCross2 size={24} />: < MdOutlineMenu size={24} />}</div> 
      </div>
    </div>
    {/* {mobile nav} */}
    {
      menu && (
        <div className='bg-white' >
        <ul className='md:hidden flex flex-col items-center justify-center h-screen space-y-3 text-xl'>
        {
            navItems.map(({id,text})=>
            (
              <li className='hover:scale-105 font-semibold duration-200 cursor-pointer' key={id}><Link to={text} onClick={()=>setMenu(!menu)} smooth={true} duration={500} offset={-70} activeClass='active'>{text}</Link></li>
            ))
          }
        </ul>
      </div>
      )
    }

   

  </div>
  </>
}

export default Navbar
