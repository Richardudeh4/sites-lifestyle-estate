"use client";
import React,{useState} from 'react'
import { community } from '../constants';
import Image from 'next/image';
const Communities = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
     <div className="py-8">
        <div className="mt-8 gap-6">
        <div>
<h1 className="text-2xl -mt-8 font-semibold">Communities</h1>
</div>
  <div className="grid mt-8 grid-cols-1 md:grid-rows-2 sm:grid-cols-3 gap-6">
  <div>
    <h1 className="mx-0 pt-8 text-4xl"> Our<br/>Communities</h1>
<p className="mx-0 pt-16 text-[#0F372F] leading-6 text-xl">
At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.
</p>
<button className="py-2 mt-20 px-4 border border-white text-white bg-[#0F372F]">
Learn More
</button>
</div>

{
community.map((item,i) => (
    <div key={i}>
    <div className="m-0">
      <div className="w-[344px] h-[397px] md:w-[354px] md:h-[407px] sm:w-[374px] sm:h-[417px] relative">
        <Image src={item.image} alt="community images" layout="fill" objectFit="cover"
        className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
          loading? "scale-110 blur-2xl grayscale" : 
            "scale-100 blur-0 grayscale-0"
}`}
onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <div className="pt-6 flex space-x-4 text-[#0F372F]">
<h1 className="text-bold">{item.HouseName} &nbsp; | </h1> &nbsp;<p>{item.Location}</p>
        </div>
        
    </div>
</div>
))
}
        </div>
        </div>
     </div>
    </div>
  )
}

export default Communities
