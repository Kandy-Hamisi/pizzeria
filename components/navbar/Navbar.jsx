import { navLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header className='py-6 md:py-12 w-full absolute top-0 flex items-center justify-between'>
        <div className='h-12 w-12 relative flex-1'>
            <Image src='/pizza-piece.png' alt='logo' className='object-contain -rotate-[30deg]' fill />
        </div>

        <div className='flex-1'>
            <ul className='flex items-center justify-between'>
                {
                    navLinks.map((navItem) => (
                        <li key={navItem.name}>
                            <a href={navItem.link} className='font-montserrat font-bold text-slate-gray'>{navItem.name}</a>
                        </li>
                    ))
                }
            </ul>
        </div>

        <div className='flex-1 flex space-x-4 justify-center'>
            <button className='p-2 bg-white hover:bg-slate-gray rounded-full w-[15%] duration-300 ease-in-out transition-all hover:text-white'>Login</button>
            <button className='p-2 bg-coral-red text-white border border-coral-red hover:bg-white hover:border-coral-red rounded-full w-[15%] duration-300 ease-in-out transition-all hover:text-black'>SignUp</button>
        </div>
    </header>
  )
}

export default Navbar