import { dishes } from '@/constants'
import Image from 'next/image'
import React from 'react'

const HowToOrder = () => {
  return (
    <section className='max-container'>
        <div className='flex justify-center mb-8'>
            <h1 className='text-2xl xl:text-4xl font-bold font-palanquin'>How To Order?</h1>
        </div>

        <div className='flex flex-col xl:flex-row xl:items-center justify-between gap-8 flex-1 mt-[6rem]'>
            {
                dishes.slice(0, 4).map((dish, index) => (
                    <div key={dish.id} className='relative mt-8'>
                        <div className='-z-10 absolute -top-[2.6rem] -left-[30px]'>
                            <h1 className='text-coral-red text-4xl font-bold'>0{index + 1}</h1>
                        </div>
                        <div className='padding-x py-12 flex flex-col items-center space-y-4 bg-pale-blue rounded-xl shadow-2xl'>
                            <div className='relative h-[150px] xl:h-[100px] w-[150px] xl:w-[100px]'>
                                <Image src={dish.image} alt={dish.name} className='object-contain' fill />
                            </div>
                            <h4 className='font-bold font-palanquin'>{dish.name}</h4>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default HowToOrder