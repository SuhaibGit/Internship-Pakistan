import React from 'react'

const Hero3 = () => {
  return (
    <div className=' relative h-[650px]'>
        <div className="absolute inset-0 bg-cover bg-center bg-[url('/assets/hero.jpg')]"></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      <div className=' relative flex flex-col justify-center items-center'>
        <h1 className=' text-white w-[60%] text-[40px] md:text-[60px] border-b border-white mt-20 font-semibold'>
            About Us
        </h1>
        <p className='w-[60%] text-[20px] md:text-[28px] text-white opacity-80 mt-10 md:mt-16 mb-5 md:mb-0'>
        At Internship Pakistan, our mission is to connect talent with opportunity through meaningful internships. We envision a platform where aspiring professionals grow, innovate, and build successful careers.
        </p>
      </div>

    </div>
  )
}

export default Hero3