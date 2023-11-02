import React from 'react';
import Hero from './section/Hero';
import Intro from './section/Intro';
import Latest from './section/Latest';
import Gallery from './section/Gallery';
import Communities from './section/Communities';
import  Subscribe from './section/Subscribe';
import Footer from './section/Footer';
const page = () => {
    return(
       <main className="relative">
        {/* hero section */}
       <section className='bg-[#0F372F] xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
       <section className='grid-cols-2'>
       <Intro/>
       </section>
       <section  className=" padding my-24 bg-[#D9D9D9]">
        <Latest/>
       </section>
       <section className="padding-x py-10">
        <Gallery className="w-full"/>
       </section>
       <section  className="bg-[#D9D9D9] padding">
        <Communities />
       </section>
       <section className="sm:bg-[#B1935C] bg-white padding-x">
       <Subscribe className=""/>
       </section>
      
       </main>
    )
}
export default page;