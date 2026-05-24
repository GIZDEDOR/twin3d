import React from 'react'
import  SvgIcon  from "./Twin3dLogo"
import CircleText from './CircleText'
type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='bg-[#141414] text-[#353535]'>
        <div className='relative mx-auto flex w-full max-w-4xl justify-center px-4 py-10'>
            <SvgIcon className="h-20 w-auto text-sky-800 cursor-pointer 
                  transition-all duration-300 
                  hover:text-sky-600 hover:scale-105" />
            <div className='absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-tarnslate-y-28'>
            </div>      
        </div>
    </footer>
  )
}