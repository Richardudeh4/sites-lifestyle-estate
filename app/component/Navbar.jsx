import React from 'react';
// import { navmenu } from '../constants';
import { sitelogo } from '../assets';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
   <section className="py-6 px-0 ">
<ul>
    <li className="sm:flex flex-1 gap-20 text-white justify-around hidden">
        <div className="flex space-x-8">
        <Link href="/Communities" > Communities</Link>
        <Link href="/Aboutus" >About us</Link>
        <Link href="/Gallery" > Gallery</Link>
        </div>
        <div className="flex">
<Image src={sitelogo} width={200} height={200} alt="logo" className="text-center"/>
        </div>
        <div className="flex space-x-8">
        <Link href="/Blog" >Blog</Link>
        <Link href="/Contactus" >Contact us</Link>
        <Link href="Management">Management</Link>
        </div>
    </li>
    </ul>
           <div className="flex justify-center mx-auto sm:hidden">
<Image src={sitelogo} width={200} height={200} alt="logo" className="text-center"/>
        </div>
   </section>
  )
}

export default Navbar
