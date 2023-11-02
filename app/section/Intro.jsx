import React from 'react';
import Image from 'next/image';
import {side1,side2} from '../assets'
const Intro = () => {
  return (
    <section className="grid grid-cols-2 border-l-2 py-12 border-l-white">
<div className="bg-white relative ml-20">
  <Image src={side2} layout="fill"  alt="house-side" className="" />
</div>
<div className="text-center items-center py-24 px-12 text-white text-[20px] leading-[#27.32px] bg-[#0F372F]">
<p>
At Sites & Lifestyle, we redefine the very essence of excellence in home ownership. We dont just sell properties; we craft lifestyles. Our commitment to unparalleled service, unwavering integrity, and a relentless pursuit of perfection makes us the choice for those who demand more from their home ownership experience.
</p>
</div>
    </section>
  )
}

export default Intro
