import { UtensilsCrossed } from 'lucide-react'
import React from 'react'

function MyLogo() {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <span className='text-amber-700'><UtensilsCrossed /></span>
      <h1 className='font-bold text-2xl text-amber-700 uppercase' >Food court</h1>
      </div>
  )
}

export default MyLogo