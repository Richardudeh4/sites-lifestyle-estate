import React from 'react'
import Image from 'next/image'
const MediumCard = ({img}) => {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
<div className='relative w-80 h-80'>
<Image src={img} alt="medium image" layout='fill'/>
</div>
    </div>
  )
}

export default MediumCard