import React from 'react'
import Image from 'next/image'
function HeroImg() {
  return (
    <div className='w-[700px] p-20 hidden md:flex'>
   <Image src="/images/img-22.png" alt="No image" width={600} height={100}  />
   
    </div>
  )
}

export default HeroImg