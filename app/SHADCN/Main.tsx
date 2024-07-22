import { Button } from '@/components/ui/button'
import { ChevronRight } from "lucide-react"
import React from 'react'

function Main() {
  return (
    <div>
     <h1 className='text-4xl text-gray-800 font-bold text-center pt-20 pb-10'>Adding Convenience <br></br><span >To Food</span></h1>
      <Button variant={'destructive'} className='px-10 py-4 text-xl'>Order</Button>
      <div className='pt-12 '>
      <Button variant="outline" size="icon" className='  font-bold w-[60px]'>
      <ChevronRight className="h-7 w-7" />
    </Button>
    </div>
    </div>
  )
}

export default Main