"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Use 'swiper/modules'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from 'next/link'
import Image from "next/image";

const Carousel = () => {
  const slides = [
    { title: "iBex", image: "/assets/logi.jpg", description: "Gain hands-on experience in software development and innovation." },
    { title: "Haier", image: "/assets/Haier.jpg", description: "Empower your skills in graphic design and creative media." },
    {
      title: "Internship Pakistan",
      image: "/assets/logo2.png",
      description:
        "Build your career with real-world data analysis projects.",
    },
    { title: "Haier", image: "/assets/Haier.jpg", description: "Kickstart your career in finance with expert mentorship." },
    { title: "Internship Pakistan", image: "/assets/logo2.png", description: "Join our dynamic team for web development excellence." },
  ];
    
  return (
    <div className="h-[700px] w-full m-auto flex flex-wrap justify-start items-center bg-white">
        <h1 className="text-primaryblue text-[28px] md:text-[48px] ml-10 md:ml-24 my-7 ">Featured Internships</h1>
        <div className="h-auto w-full flex  justify-center items-conter">
        <div className="w-[75%]">
      <Swiper
        // navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]} // Include modules here
        loop={true}
  
      >
        
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="h-[500px] flex flex-col justify-center items-center p-[8px] md:p-[20px] text-center bg-white ">
            <Image
              src={slide.image}
              alt={slide.title}
              width={150}
              height={150}
              className="object-contain mb-[10px]"
            />
              <h3 className="text-black text-[28px]">{slide.title}</h3>
              <p className="white-space:pre-wrap text-greyhome text-[16px]">{slide.description}</p>
              <Link href={"/internship"}><button className="mt-[40px] px-3 py-2 bg-primaryblue text-white font-medium text-[24px] rounded-md hover:text-white hover:bg-black">
          Apply Now
          </button></Link>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
    </div>
  );
};

export default Carousel;
