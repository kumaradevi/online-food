import React from 'react'
import Image from "next/image"

import { AspectRatio } from "@/components/ui/aspect-ratio"

function MyAspectRatio() {
  return (
    <div className="w-[600px] hidden md:flex">
    <AspectRatio ratio={1 / 1}>
      <Image src="/images/food-deliver.jpg" alt="Image" className="rounded-md object-cover" width={600} height={600}  />
    </AspectRatio>
  </div>
  
  )
}

export default MyAspectRatio