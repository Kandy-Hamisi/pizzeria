import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='padding-x flex gap-8'>
        <div className='flex flex-col w-[40%]'>
            <div className='mb-8'>
                <Image src='/pizza-piece.png' alt='logo' className='-rotate-[35deg]' width={40} height={40} />
            </div>
            <div className="flex space-x-8">
                <div className='bg-white rounded-xl flex items-center space-x-3 p-3 leading-3'>
                    <div>
                        <Image src='/apple.png' alt='logo' width={40} height={40} />
                    </div>
                    <div className='text-black'>
                        <span className='text-[12px] font-bold'>Download on the</span>
                        <h4 className='font-bold text-3xl font-palanquin'>App Store</h4>
                    </div>
                </div>
                <div className='bg-white rounded-xl flex items-center space-x-3 p-2 leading-3'>
                    <div>
                        <Image src='/google-play.png' alt='logo' width={40} height={40} />
                    </div>
                    <div className='text-black'>
                        <span className='text-[12px] uppercase'>Get it on</span>
                        <h4 className='font-bold text-3xl font-palanquin'>Google Play</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex gap-12 justify-between w-[60%]'>
            {
                footerLinks.map((footerCategory) => (
                    <div key={footerCategory.title} className='mb-8 text-white'>
                        <h4 className='font-bold text-3xl font-palanquin mb-4'>{footerCategory.category}</h4>
                        <div className='flex flex-col space-y-4'>
                            {
                                footerCategory.links.map((footerLink) => (
                                    <div key={footerLink.text} className='flex text-slate-gray items-center space-x-4'>
                                        <a href={footerLink.url} className='font-bold'>{footerLink.text}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </footer>
  )
}

export default Footer