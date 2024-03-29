'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { slideIn, textVariant } from '@/utils/motion'

const Hero = () => {
  return (
    <section className=' min-h-[60vh] xl:min-h-screen max-container padding-y xl:py-0 flex flex-col xl:flex-row items-center gap-12'>
        <div className='xl:flex-1 mb-8'>
            <motion.h1
                variants={
                    slideIn('left', "tween", 0, 1)
                }
                initial="hidden"
                animate="show"
                className='font-palanquin font-bold text-4xl text-center xl:text-left xl:text-8xl mb-8 '
            >Your Favorite Food Delivery Patner</motion.h1>
            <p className=' leading-[42px] mb-4 text-xl text-center xl:text-left xl:text-2xl font-montserrat'>The food at your doorstep. Why starve when you have us. Your hunger patner. Straight out of the kitchen to your door step.</p>
            <div className='xl:mt-8 w-full xl:w-[70%] relative bg-pale-blue  py-2 px-3 xl:py-4 lg:px-6 rounded-full flex items-center justify-between'>
                <input
                    type="text"
                    placeholder='Enter your delivery location'
                    name=""
                    id=""
                    className='p-2 bg-transparent outline-none mr-2'
                />
                <button className='p-2 md:p-3 bg-coral-red text-white border border-coral-red hover:bg-white hover:border-coral-red rounded-full duration-300 ease-in-out transition-all hover:text-black'>Order Now</button>
            </div>
        </div>

        <motion.div className='xl:flex-1 w-full h-[400px] relative'>
            <Image src='/pizza-bike.png' alt='pizza bike' className='object-contain' fill />
        </motion.div>
        
    </section>
  )
}

export default Hero