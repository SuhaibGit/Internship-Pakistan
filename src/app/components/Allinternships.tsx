import React from 'react'
import Link from 'next/link'
import { internship } from "../internship/InternshipData";
const All_Internships = () => {
  return (
    <>
    <div className="h-auto md:h-[120px] w-[100%] bg-primaryblue flex justify-start  items-center pl-[40px] md:pl-[150px] pt-[30px] text-[24px] md:text-[36px] font-light text-white"> <h1>Internships For You</h1></div>
    <div className='h-[90%px] bg-white flex flex-col justify-center items-center p-20'>
        <div className='flex flex-wrap gap-20 justify-center pt-6 mb-8'>
            {internship.map((product)=>(
                <div key={product.id} className="w-[250px] md:w-[320px] h-[320px] md:h-[350px] bg-white shadow-xl rounded-xl hover:shadow-primaryblue">
                <div
                  className="h-[213px] bg-cover bg-center"
                  style={{ backgroundImage: `url(${product.image})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat", // Optional: prevents the image from repeating
                  backgroundPosition: "contain", }}
                ><Link href={`/internship/${product.id}`} className="block w-full h-full">
              </Link>
              </div>
            <div className=" p-2 md:p-4 flex flex-wrap items-center justify-center">
              <h2 className="w-full text-black font-semibold text-[16px] md:text-[20px] text-center ">{product.title}</h2>
              <button className=" my-5 px-3 py-2 bg-primaryblue text-white font-medium text-[12px] md:text-[14px] rounded-md hover:text-white hover:bg-black">
          Apply Now
          </button>
            </div>
              </div>
            ))}
        </div>
        <Link href={"/internship"}><button className='my-[16px] mx-[24px] h-[56px] w-[170px] bg-primaryblue hover:bg-black text-white rounded-md'>Back To Top</button></Link>
    </div>
    </>
  )
}

export default All_Internships