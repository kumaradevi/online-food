import React from 'react'
import { Input } from "@/components/ui/input"
import { ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

function MyInput() {
  return (
    <div className='p-8 flex gap-4'>
    <Input type='text' placeholder='Enter your address'></Input>
   
      <Button variant="outline" size="icon" className='  font-bold w-[60px]'>
      <ChevronRight className="h-7 w-7" />
    </Button>
   
    </div>
  )
}

export default MyInput