"use client";
import React,{useState} from 'react';
import Image from 'next/image';
import {Vector} from '../assets';
// import {arrow-right} from '@heroicons/react'
import Modal from './Modal';
import Button from '../component/Button';



const Hero = () => {
 
  return (
    <div>
      {/* <Navbar/> */}
      <div className="pt-10 flex flex-col gap-10 justify-center">
    <h1 className="text-white text-4xl sm:text-8xl font-semibold text-center font-evangelina">Lifestyle</h1>
    <p className="text-center font-semibold m-0 text-white ">At [Your Real Estate Brand], We redefine the very essence of excellence<br/> in real estate.  We dont just sell properties; we craft lifestyles.</p>
    <div className="relative px-8 flex space-x-4 justify-center flex-row py-4">
    <Button label="Explore" backgroundColor="#B1935C" textColor="white" className="font-sans text-semibold text-white bg-[#B1935C]"/></div>
 {/* <div className="py-2 w-36 items-center mx-12 sm:mx-24 border cursor-pointer text-white outline-none border-white bg-[#B1935C] flex space-x-4"><h1>Explore </h1><Image src={Vector} alt="left-arrow" width={15} height={15}/></div> */}
    <div className=" mx-10 hidden sm:block z-20 shadow-xl  bg-[#D9D9D9] mt-16 mb-6">
<Modal className=""/>
    </div>
</div>
</div>
  )
}

export default Hero







 

{/* //   return (
//     <div>
//       <h1>Real Estate Listings</h1>
//       <div>
       
//       <div>
      
     
//     </div>
//   );
// };

// export default Listings; */}
