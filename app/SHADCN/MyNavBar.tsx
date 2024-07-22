import React from 'react'
import Link from "next/link"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

function MyNavBar() {
    return (
        <div className='hidden md:flex '>
        <NavigationMenu>
            <NavigationMenuList>
            
                <NavigationMenuItem >
                <Link href="/" legacyBehavior passHref >
                 <NavigationMenuLink className='bg-transparent p-2 hover:bg-amber-200 transition rounded-md text-lg'>Home</NavigationMenuLink>
                 </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                 <NavigationMenuLink className='bg-transparent p-2 hover:bg-amber-200 transition rounded-md text-lg'>Restaurants</NavigationMenuLink>
                 </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    
                <Link href="About.tsx" legacyBehavior passHref>
                 <NavigationMenuLink className='bg-transparent p-2 hover:bg-amber-200 transition rounded-md text-lg'>About</NavigationMenuLink>
                 </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                 <NavigationMenuLink className='bg-transparent p-2 hover:bg-amber-200 transition rounded-md text-lg'>Contact</NavigationMenuLink>
                 </Link>
                </NavigationMenuItem>


               
                
                </NavigationMenuList >
        </NavigationMenu>
        </div>
          
  )
}

export default MyNavBar