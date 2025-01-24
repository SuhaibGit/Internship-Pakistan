import Link from 'next/link'
import React from 'react'
import {Inter} from "next/font/google"
const inter = Inter({subsets:['latin']})
const Navbar = () => {
const impitems=[{
  name:"Internships",
  link:"/internship"
},
{
  name:"About Us",
  link:"/about"
},
{
  name:"Contact Us",
  link:"/contact"
}
]
return (
    <div className='h-auto bg-white text-greyhome flex flex-col justify-end'>
        <div className='h-[60px] border-b border-gray-300 flex items-center justify-between px-4 md:px-8'>
        {/* <div className="h-[50px] w-[50px] bg-[url('/assets/logo2.png')] bg-cover bg-center">
      </div> */}
            <h1 className='font-medium text-[20px] md:text-[24px] text-primaryblue'>Internship Pakistan</h1>
            <div className=' flex items-center space-x-4 md:space-x-6'>
                <ul className={`${inter.className} hidden md:flex flex-row items-center justify-center font-medium text-[14px] md:text-[16px] text-greyhome space-x-4 md:space-x-6 `}>
                    {impitems.map((item, i) => (
                        <li key={i} className='hover:text-primaryblue'>
                            <Link href={item.link}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link href={"/internship"}><button className=" px-3 py-2 bg-primaryblue text-white font-medium text-[14px] rounded-md hover:text-white hover:bg-black">
          Apply Now
          </button></Link>
            </div>
        </div>
   
    </div>
);
}
export default Navbar