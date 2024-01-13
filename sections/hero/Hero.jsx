import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen max-container flex items-center gap-12'>
        <div className='flex-1'>
            <h1 className='font-palanquin font-bold text-8xl mb-8 '>Your Favorite Food Delivery Patner</h1>
            <p className=' leading-[42px] text-2xl font-montserrat'>The food at your doorstep. Why starve when you have us. Your hunger patner. Straight out of the kitchen to your door step.</p>
            <div className='mt-8 w-[70%] relative bg-pale-blue py-4 px-6 rounded-full flex items-center justify-between'>
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

        <div className='flex-1 h-[400px] relative'>
            <Image src='/pizza-bike.png' alt='pizza bike' fill />
        </div>
        
    </section>
  )
}

export default Hero