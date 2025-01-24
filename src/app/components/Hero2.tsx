import React from 'react'
import Link from 'next/link';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaPinterest } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";

const Hero2 = () => {
  return (
    <div className="relative h-auto md:h-[900px] w-full  ">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/hero3.jpg')]"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
        <div className=' relative flex flex-wrap justify-evenly items-center text-white'>
            <h1 className='ml-[70px] md:ml-[50px] h-[50px] md:h-[100px] w-full text-[28px] md:text-[48px] mt-4'>Get In touch</h1>
            
            <div className='h-auto md:h-[700px] w-[80%] md:w-[45%] text-[16px] md:text-[24px] '>
            <p>
            We’re here to listen, assist, and collaborate! Reach out to us with your questions, ideas, or projects—we’re always ready to help you achieve success. Let’s connect and create something amazing together.
            </p>
            <h1 className='my-12'>📍 Address: ABC Karachi, Internship Pakistan Karachi, Pakistan</h1>
            🕒 Working Hours:<br/>
                Monday to Friday: 9:00 AM - 6:00 PM<br/>
                Saturday: 10:00 AM - 4:00 PM<br/>
                Sunday: Closed<br/>
                <br/>
                <button
              type="button"
              className="  px-6 py-3 bg-primaryblue text-white md:font-medium text-sm md:text-lg rounded-md hover:bg-black transition-all"
            >
              Stay connected
            </button>
            <br/>
            <br/>
                <h1 className='mb-0'>Follow Us</h1>
                
                
                <div className="flex space-x-3 md:space-x-6 justify-between w-[50%] mt-3 mb-0 ">
                <Link href={''}><FaFacebookSquare className="w-[18px] md:w-[24px] h-[18px] md:h-[24px]" /></Link>
                <Link href={''}><FaInstagram  className="w-[18px] md:w-[24px] h-[18px] md:h-[24px]"/></Link>
                <Link href={''}><FaTwitter className="w-[18px] md:w-[24px] h-[18px] md:h-[24px]"/></Link>
                <Link href={''}><IoLogoLinkedin className="w-[18px] md:w-[24px] h-[18px] md:h-[24px]"/></Link>
                <Link href={''}><FaSkype className="w-[18px] md:w-[24px] h-[18px] md:h-[24px]"/></Link>
                <Link href={''}><FaPinterest className="w-[18px] md:w-[24px] h-[18px] md:h-[24px]" /></Link>
            </div>
            </div>
            <div className='h-auto md:h-[720px] w-[300px] md:w-[655px] bg-gray-800 py-8 px-10 rounded-[25px] shadow-2xl my-5 md:my-0'>
            <form className="space-y-6">
                <h1 className='text-white-700 text-[28px]'>Contact Us</h1>
                <p>Ask us Anything we would love to answer</p>
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:ring-primaryblue focus:border-primaryblue text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:ring-primaryblue focus:border-primaryblue text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Write your message here"
              rows={8}
              className="w-full px-4 py-2 border border-gray-300 bg-gray-800 rounded-md shadow-sm focus:ring-primaryblue focus:border-primaryblue text-white"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="button"
              className=" w-full px-6 py-3 bg-primaryblue text-white font-medium text-lg rounded-md hover:bg-black transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
            </div>
        </div>
        <div className=''></div>
    </div>
  )
}

export default Hero2