import React from 'react';
import {images} from '../constants';

import MediumCard from '../component/MediumCard';
const Gallery = () => {
  return (
    <section className="w-full">
      <div className="py-16">
<h1 className="font-semibold text-4xl text-center text-[#0F372F]">Gallery</h1>
<p className="text-center pt-10 text-xl font-medium">At Sites & Lifestyle, we redefine the very essence of excellence in home <br/>ownership. We dont just sell properties; we craft lifestyles.</p>

<div className="flex space-x-3 mt-12 overflow-scroll scrollbar-hide p-3 -m-3">
{
images.map(({images},index) => (
<MediumCard key={index} img={images}/>
))
}
</div>
      </div>
    </section>
  )
}

export default Gallery
