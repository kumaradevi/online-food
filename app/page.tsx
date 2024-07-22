"use client";

import React from 'react'

import MyNavBar from './SHADCN/MyNavBar'
import MyButton from './SHADCN/MyButton'
import MyLogo from './SHADCN/MyLogo'
import MyAspectRatio from './SHADCN/MyAspectRatio'
import MyHeroSection from './SHADCN/MyHeroSection'
import MyInput from './SHADCN/MyInput'
import PopularDishes from './SHADCN/PopularDishes'
import Footer from './SHADCN/Footer'
import About from './SHADCN/About'
import Main from './SHADCN/Main'
import MyTab from './SHADCN/MyTab'
import HeroImg from './SHADCN/HeroImg'
import { Menu } from 'lucide-react'
import { InputForm } from './SHADCN/InputForm'
function page() {
  return (
    <div className='flex flex-col justify-center'>
      <div className='flex justify-between items-center p-4 bg-amber-100 '>
        <MyLogo />
        <MyNavBar />
        <MyButton />
      
      </div>
      <div  className=' text-gray-800 p-8  text-center flex justify-between w-screen bg-amber-50'>

       <Main/>
       <HeroImg/>
       <MyTab/>
      
      </div>
      <div className='bg-[#F5F3F1] w-screen h-[500px] flex gap-48 p-24'>
        <MyAspectRatio />
        <div>
          <MyHeroSection />
          <MyInput />
        </div>

      </div>
      <PopularDishes />



      <About/>
      <div className='bg-amber-50 flex flex-col gap-4 justify-center items-center w-[500px] h-[440px] pb-8 md:w-screen'>
      <InputForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default page