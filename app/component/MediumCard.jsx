import React from 'react'
import Image from 'next/image'
const MediumCard = ({img}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
<div className='relative w-[324px] h-[315px] flex justify-center'>
<Image src={img} alt="medium image" layout='fill' objectFit='cover'/>
</div>
    </div>
  )
}

export default MediumCard