import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { ReactTyped,Typed } from "react-typed";
import pic2 from "../../public/pic5.jpeg"
const Home = () => {
  return <>

  <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
    <div className='flex flex-col md:flex-row '>
    <div className='md:w-1/2 md:mt-24 mt-12 space-y-2 order-2 md:order-1' >
    <span className='text-xl'>Welcome In My Feed</span>
    <div className='flex space-x-1 text-2xl md:text-4xl'>
    <h1>Hello,I'm a</h1>
    {/* <span className='text-red-700 font-bold'>Developer</span> */}
    <ReactTyped 
           className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={80}
          backSpeed={80}
          loop={true}
        />
    </div>
    <br></br>
    <p className='text-sm md:text-md text-justify'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam, recusandae consequatur. Accusamus sint libero eligendi laborum fuga repudiandae? Asperiores tempore eos animi dolores corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
    </p>
    <br />
    {/* socila medi icons */}
    <div className='flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
    <div className='space-y-2'>
        <h1 className='font-bold'>
            Available On
        </h1>
     
        <ul className='flex space-x-5 '>
            <li> <a href="https://www.facebook.com" target='_blank'><FaFacebook className='text-2xl cursor-pointer' /> </a> </li>
            <li>  <a href="https://www.linkedin.com" target='_blank'> <FaLinkedin className='text-2xl cursor-pointer' /> </a> </li>
            <li>  <a href="https://www.youtube.com" target='_blank'>  <FaYoutube className='text-2xl cursor-pointer' /> </a> </li>
            <li>   <a href="https://www.instgram.com" target='_blank'> <FaInstagram className='text-2xl cursor-pointer' /> </a> </li>
        </ul>
    </div>
   

   <div className='space-y-2'>
        <h1 className='font-bold'>
            Currently Working On
        </h1>
     
        <ul className='flex space-x-5 '>
            <li>  <SiMongodb className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
            <li>  <RiReactjsFill className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
            <li>    <FaNode  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
            <li>    <SiExpress className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' /></li>
        </ul>
    </div> 
    </div>
 
    
    </div>
    <div className='md:w-1/2 md:ml-48 md:mt-20 order-1 mt-8'>
    <img src={pic2} alt="" className='rounded-full w-[450px] md:h-[450px]'/>
    </div>
    </div>

  </div>
  <hr />
  </>
}

export default Home
