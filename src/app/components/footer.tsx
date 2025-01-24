import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-auto md:h-[380px] w-[100%] flex flex-wrap justify-center  bg-primaryblue py-4 md:py-0">
        
      <div className="bg-primaryblue w-[90%] flex flex-col md:flex-row justify-between h-auto md:h-[280px] text-[rgb(215,214,221)] border-b border-[rgb(215,214,221)] ">

        
        <ul className='text-[14px] space-y-2 mt-12'>
          <li className="text-[16px] border-b border-[rgb(215,214,221)]">Our Company</li>
          <li><Link href={'/about'} className=' hover:text-white'>About Us</Link></li>
          <li><Link href={'/internship'} className=' hover:text-white'>Vacancies</Link></li>
          <li><Link href={'/contact'} className=' hover:text-white'>Contact Us</Link></li>
          <li><Link href={'/internship'} className=' hover:text-white'>Apply Now</Link></li>
        </ul>
        <ul className='text-[14px] space-y-2 mt-12'>
          <li className="text-[16px] border-b border-[rgb(215,214,221)]">More</li>
          <li><Link href={'/'} className=' hover:text-white'>Hire Internee</Link></li>
          <li><Link href={'/internship'} className=' hover:text-white'>Work With Us</Link></li>
          <li><Link href={'/internship'} className=' hover:text-white'>Interns Lab</Link></li>
          <li><Link href={'/internship'} className=' hover:text-white'>Programs</Link></li>
          <li><Link href={'/'} className=' hover:text-white'>Reports</Link></li>
        </ul>
        <ul className='text-[14px] space-y-2 mt-12' >
          <li className="text-[16px] border-b border-[rgb(215,214,221)]">Help</li>
          <li><Link href={'/'} className=' hover:text-white'>Job Portal</Link></li>
          <li><Link href={'/internship'} className=' hover:text-white'>Task Portal</Link></li>
          <li><Link href={'/internship'} className=' hover:text-white'>LMS</Link></li>
        </ul>
        <div className=" w-[95%] md:w-[33%] h-auto md:h-[56px] flex items-center justify-center mt-8">
            <div className="  md:w-full max-w-md mt-16 text-[18px] font-medium">
                <p className='mb-4'>Join our mailing list</p>
                <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-[70%] md:w-[75%] flex-grow px-4 py-2 border border-greyhome  placeholder-[#d7d6dd] bg-greyhome"
                />
                <button className="w-[30%] md:w-[25%] px-2 py-2 bg-white text-newblue font-medium hover:text-white hover:bg-black  ">
                Sign up
                </button>
            </div>
        </div>
      
    </div>
    <div className='w-[90%] flex flex-col md:flex-row justify-between items-center mt-4 text-white'>
        <h2 className='text-[11px] md:text-[14px]'>Copyright 2025 Internship Pakistan LTD</h2>
        <div className='w-[263px] flex justify-between mt-2 md:mt-0 '>
            <div className="flex space-x-6 justify-between ">
                <Link href={''}><FaFacebookSquare className="w-[24px] h-[24px]" /></Link>
                <Link href={''}><FaInstagram  className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><FaTwitter className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><IoLogoLinkedin className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><FaSkype className="w-[24px] h-[24px]"/></Link>
                <Link href={''}><FaPinterest className="w-[24px] h-[24px]" /></Link>
            </div>
        </div>
    </div>
    </div>
    
  );
}

export default Footer