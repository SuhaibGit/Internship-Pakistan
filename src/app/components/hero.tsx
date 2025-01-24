import React from 'react'
import { Heebo } from 'next/font/google'
import Link from 'next/link'

const heebo= Heebo({subsets:['latin']})
const Hero = () => {
  return (
    <div className="h-[380px] md:h-[600px] bg-[url('/assets/hero2.jpg')] bg-cover bg-center flex items-center justify-end">
        <div className='h-[320px] md:h-[350px] w-[90%] md:w-[500px] bg-[#F9F9F9] m-[20px] md:m-[120px]'>
        <div className=' py-2 md:py-4 px-4 w:[90%] md:w-[100%]  h-[286px] flex flex-col items-start justify-between'>
                <h2 className={`${heebo.className} my-[24px] md:my-[36px] mx-[16px] md:mx-[24px] font-medium text-[20px] md:text-[32px] text-[#22202E] `}>Kickstart Your Career!</h2>
                <div className='w-[80%] md:w-[100%] h-[42.12px] flex items-center justify-between'>
                    <p className={`${heebo.className} mx-[16px] md:mx-[24px]  text-[16px] md:text-[18px] font-normal text-black/60`}>Gain real-world experience, build your skills, and unlock endless opportunities with our internship programs.</p>
                </div>
                <div className='my-[4px] md:my-[50px]'>
                <Link href={"/internship"}><button className='mt-[30px] mx-[16px] md:my-[16px] md:mx-[24px] h-[48px] md:h-[56px] w-[120px] md:w-[170px] bg-primaryblue text-white text-[12px] md:text-[16px] hover:text-white hover:bg-black'>Explore Internships</button></Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero