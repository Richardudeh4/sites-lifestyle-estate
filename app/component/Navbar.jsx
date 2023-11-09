import React from 'react';
// import { navmenu } from '../constants';
import { sitelogo } from '../assets';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
   <section className="py-6 px-0 ">
<ul>
    <li className="flex flex-1 gap-20 text-white justify-around ">
        <div className="flex space-x-8">
        <Link href="/Communities" className="heading"> Communities</Link>
        <Link href="/Aboutus" className="heading">About us</Link>
        <Link href="/Gallery" className="heading"> Gallery</Link>
        </div>
        <div className="flex">
<Image src={sitelogo} width={200} height={200} alt="logo" className="text-center"/>
        </div>
        <div className="flex space-x-8">
        <Link href="/Blog" className="heading">Blog</Link>
        <Link href="/Contactus" className="heading">Contactus</Link>
        <Link href="Management" className="heading">Management</Link>
        </div>
    </li>
    </ul>
   </section>
  )
}

export default Navbar
