import React from 'react';
import {house} from '../constants';
import Image from 'next/image';

const Latest = () => {
  return (
<section className='relative'>
   
    <h1>Latest Properties</h1>
    <div className="sm:ml-32 border sm:-mt-2 border-slate-800"></div>
   
<div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-20 ">
{
house.map((item,index)=> (
<div key={index}>
    <div className='relative'>
<Image src={item.image} alt="property images" width={250} height={250}/>
</div>
<h1 className="pt-8 font-semibold text-xl  text-[#0F372F]">{item.name}</h1>
<p className=" font-thin pt-6">{item.desc}</p>
<button   className="mt-6 px-7 py-2 bg-[#0F372F] border text-white border-white">
Read More
</button>
</div>
    ))}
</div>
  
</section>
  )
}

export default Latest
