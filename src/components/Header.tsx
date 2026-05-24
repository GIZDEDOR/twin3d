import React from 'react';
import  SvgIcon   from '@/components/Twin3dLogo';

export default function Header() {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <SvgIcon 
        className="z-10 h-20 text-sky-800 cursor-pointer 
                  transition-all duration-300 
                  hover:text-sky-600 hover:scale-105 "
      />
    </header>
  );
}