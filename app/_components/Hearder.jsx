"use client"
import Image from 'next/image'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu"
import { AlignJustify } from 'lucide-react'
import Link from 'next/link'



function Hearder() {
    return (
        <div className=''>
            <div className='mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 sm:px-6 lg:px-8 border-b'>
                <Image src={'/agastya-logo.png'} height={180} width={180} alt='logo' />
               <ul className='hidden font-medium md:flex md:items-center md:gap-8'>
                    <a href={'/'} ><li>Home</li></a> 
                    <Link href={'/about'} ><li>About</li></Link> 
                    <a href={'#'} ><li>Become a Partner</li></a> 
                    <a href={'/project-enquiry'} ><li>Project Enquiry</li></a> 
                </ul>
                <div className='md:hidden lg:hidden'>
                <DropdownMenu>
                    <DropdownMenuTrigger><AlignJustify /> </DropdownMenuTrigger>
                    <DropdownMenuContent className='mx-3' >
                        <DropdownMenuLabel>Menu</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Home</DropdownMenuItem>
                        <DropdownMenuItem>About</DropdownMenuItem>
                        <DropdownMenuItem>Become a Partner</DropdownMenuItem>
                        <DropdownMenuItem>Project Enquiry</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default Hearder