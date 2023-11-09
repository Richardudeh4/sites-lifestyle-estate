"use client";
import React, {useState} from 'react';
import {house} from '../constants';
import Image from 'next/image';


const Latest = ({Data}) => {
const [loading, setLoading] = useState(true);
  return (

<section className='relative'>
  
    <h1>Latest Properties</h1>
    <div className="sm:ml-32 border sm:-mt-2 border-slate-800"></div>
   
<div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-20 ">
{
house.map((item,index)=> (
<div key={index}>
    <div className='relative w-[315px] h-[324px]'>
<Image src={item.image} alt="property images" layout="fill" objectFit='cover' className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
  loading? "scale-110 blur-2xl grayscale" :
  "scale-100 blur-0 grayscale-0"
}`}
onLoadingComplete={() => setLoading(false)}
 />
</div>
<h1 className="pt-8 font-semibold text-xl  text-[#0F372F]">{item.name}</h1>
<p className=" font-thin pt-6">{item.desc}</p>
<button className="mt-6 px-7 py-2 bg-[#0F372F] border text-white border-white">
Read More
</button>
</div>
    ))}
</div>
  {/* {
    Data.map((item,i)=> (
    <div key={i}>
    <h1>{item.propertyType}</h1>
    </div>
    ))
  } */}
</section>
  )
}

export default Latest

export async function getStaticProps(){
  const response = await fetch('http://localhost:8000/houses');
  const Data = await response.json();
  return{
    props:{
      Data
    }
  }
}