import React from 'react'
import Image from 'next/image';

function PopularDishes() {
  return (
    <div className='p-12 bg-amber-200'>
        <h1 className='font-bold text-gray-900 text-3xl pb-28 uppercase text-center tracking-widest' >Popular Dishes</h1>
        <div className='md:flex  gap-12 p-4 text-gray-700 '>
        <div>
            <Image src="/images/img-1.png" alt="No image" width={300} height={240} className='hover:translate-x-1 transition-transform' />
           <div className='p-4'>
            <p>Noodles</p>
            <p className='pt-5 text-green-600 font-bold'>Rs.399</p>
            </div>
        </div>
        <div>
            <Image src="/images/img-2.png" alt="No image" width={300} height={240} className='hover:translate-x-1 transition-transform'/>
            <div className='p-4'>
            <p>Parotta With Panner Butter Masala</p>
            <p className='pt-5 text-green-600 font-bold'>Rs.399</p>
            </div>
        </div>
        <div>
            <Image src="/images/img-15.jpg" alt="No image" width={300} height={240} className='hover:translate-x-1 transition-transform'/>
            <div className='p-4'>
            <p>South Indian Meals</p>
            <p className='pt-5 text-green-600 font-bold'>Rs.899</p>
            </div>
        </div>
        <div>
            <Image src="/images/img-4.jpg" alt="No image" width={300} height={240} className='hover:translate-x-1 transition-transform'/>
            <div className='p-4'>
            <p>Burger</p>
            <p className='pt-5 text-green-600 font-bold'>Rs.99</p>
            </div>
        </div>
        <div>
            <Image src="/images/img-13.jpg" alt="No image" width={300} height={240} className='hover:translate-x-1 transition-transform'/>
            <div className='p-4'>
            <p>Naan</p>
            <p className='pt-5 text-green-600 font-bold'>Rs.199</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default PopularDishes