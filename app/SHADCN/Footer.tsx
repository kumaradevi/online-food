import { Facebook, Instagram, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
    return (
        <div className='bg-amber-500'>
            <div className='md:flex justify-around items-center p-10 '>
                <div>
                    <h1 className='font-bold text-3xl pb-6'>Contact Us</h1>
                    <p className='font-medium pb-12'>onlinefoods@gmail.com</p>
                </div>
                <div>
                    <h1 className='font-bold text-3xl pb-6 '>Stay Connected</h1>
                    <p className='font-medium'>Follow us on social media channels</p>
                    <div className='flex gap-4 pt-5 pb-12'>
                    <span><Facebook /></span>
                    <span><Instagram /></span>
                    <span><Twitter /></span>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-3xl pb-6'>Timings</h1>
                    <p className='font-medium'>All day: 9:00 AM - 9:00 PM</p>
                </div>
            </div>
            <div className='text-center pb-12 font-medium'>
                <p>copyright &copy;2024 food on way all rights reserved designed by kumaradevi</p>
            </div>
        </div>
    )
}

export default Footer