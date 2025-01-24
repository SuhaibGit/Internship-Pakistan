import React from 'react';
import Image from 'next/image';
const Feedback = () => {
  const slides = [
    { name: "Ali Jawad", image: "/assets/logi.jpg", comment: "It was a great experience working with ibex. I gained valuable insights and learned a lot throughout my internship, which has been incredibly beneficial for my growth.", rating: "4.5", profile: "/assets/male.jpg" },

    { name: "Sania Tehseen", image: "/assets/Haier.jpg", comment: "I appreciate the exposure I received at Haier. It allowed me to apply my academic knowledge, though there’s still room for me to refine my technical and communication skills.", rating: "4.7", profile: "/assets/female.jpg" },

    { name: "Muhammad Sohaib", image: "/assets/logo2.png", comment: "The internship at Internship Pakistan was a good learning opportunity. While I faced some challenges initially, they ultimately helped me grow and adapt to a professional environment.", rating: "4.2", profile: "/assets/male.jpg" },

    { name: "Turrab Ali", image: "/assets/Haier.jpg", comment: "I appreciate the exposure I received at Haier. It allowed me to apply my academic knowledge, though there’s still room for me to refine my technical and communication skills.", rating: "3.5", profile: "/assets/male.jpg" },

    { name: "Laiba", image: "/assets/logo2.png", comment: "My time at Internship Pakistan has been truly enriching. The hands-on experience and guidance from the team helped me improve my skills and gain practical knowledge.", rating: "5", profile: "/assets/female.jpg" },
  ];

  return (
    <div className='h-auto md:h-[600px] flex flex-wrap justify-evenly items-center bg-slate-100'>
      <h1 className='text-primaryblue w-full text-[36px] md:text-[48px] ml-16 md:ml-24 h-[40px] mt-4'>Feedbacks</h1>
      {slides.map((slide, index) => (
        <div key={index} className=' mt-10 md:mt-0 mb-10 md:mb-20'>
        <div  className=' h-[320px] w-[250px] bg-white flex flex-wrap p-5 text-greyhome rounded-lg shadow-xl'>
          <div className='flex h-[50px] w-full flex-row justify-between'>
            <Image src={slide.profile} alt={`${slide.name}'s profile`} width={50} height={50} />

            <Image src={slide.image} alt={`${slide.name}'s company logo`} width={50} height={50} className='h-[50px] w-[50px] object-contain ' style={{ width: '100px' }} />
          </div>
          <h1 className='text-black'>{slide.name}</h1>
          <p>{slide.comment}</p>
          <p className='text-primaryblue'>Rating: {slide.rating}/5</p>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Feedback;
