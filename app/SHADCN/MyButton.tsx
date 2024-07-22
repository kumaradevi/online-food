import React from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
function MyButton() {
  return (
   
    <div className='flex justify-center items-center '>
       <div className='hidden md:flex'>
    <Button variant="ghost"  className='text-md font-bold'>Login</Button>
    <Button variant="ghost"  className='text-md font-bold'>Signin</Button>
    </div>
   <span className='md:hidden'><Menu /></span>
    </div>
  )
}

export default MyButton