"use client";
import React from 'react';
import Image from 'next/image';
import {Vector} from '../assets';
import Modal from './Modal';
// import Navbar from '../component/Navbar';
// import SearchFilter from '../component/SearchFilter';
import Filter from '../component/Filter';
const Hero = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className="pt-10 flex flex-col gap-10 justify-center">
    <h1 className="text-white text-8xl font-semibold text-center font-evangelina">Lifestyle</h1>
    <p className="text-center font-semibold m-0 text-white ">At [Your Real Estate Brand], We redefine the very essence of excellence<br/> in real estate.  We dont just sell properties; we craft lifestyles.</p>
 <button className="py-2 w-28 text-center justify-center border cursor-pointer text-white border-white bg-[#B1935C] flex space-x-4"><h1>Explore </h1><Image src={Vector} alt="left-arrow" width={15} height={15}/></button>
    <div className="relative mx-8 z-20 px-8 shadow-xl outline-none bg-[#D9D9D9] padding mt-16 mb-6">
      {/* <Modal className=""/> */}
    </div>

      </div>
    </div>
  )
}

export default Hero

// backend code
export const getServerSideProps = async ()=> {
  // const categories = await fetchCategories()
  return{
    props:{
data:{
p
}
    }
  }
}