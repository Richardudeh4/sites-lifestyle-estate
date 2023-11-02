import React from 'react'
import { community } from '../constants';
import Image from 'next/image';
const Communities = () => {
  return (
    <div>
     <div className="py-8 px-8">
        <div className="mt-8  gap-6">
            <div>
        <h1 className="text-2xl -mt-8 font-semibold">Communities</h1>

            </div>
      <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-6">
    <h1 className="mx-0 text-4xl">  Our<br/>Communities</h1>
<p className="mx-0 mt-8 text-[#0F372F] leading-6 text-xl">
At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles.
</p>
<button className="py-2 px-6 border border-white text-white bg-[#0F372F]">
Learn More
</button>
 </div>
{
community.map((item,index) => (
    <div key={index}>
    <div className="m-0">
        <Image src={item.image} alt="community images" width={250} height={300} />
        <div className="pt-6 flex space-x-4 text-[#0F372F]">
<h1 className="text-bold">{item.HouseName}</h1> | <p>{item.Location}</p>
        </div>
    </div>
</div>
))
}
        </div>

     </div>
    </div>
  )
}

export default Communities
