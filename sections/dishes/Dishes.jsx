import { dishes } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Dishes = () => {
  return (
    <section className='min-h-screen max-container'>
        <div className='flex flex-col space-y-6 items-center'>
            <h1 className='text-2xl lg:text-4xl font-bold font-palanquin max-w-[20rem] lg:max-w-[40rem] text-center leading-[40px] xl:leading-[80px]'>More Than <span className="text-coral-red">10,000</span> Dishes To Order!</h1>
            <p className='text-xl text-center md:text-2xl'>Welcome To The Biggest Network of Food Ordering & Delivery</p>
        </div>

        <div className='flex flex-col xl:flex-row gap-8 xl:items-center justify-between mt-12 xl:mt-4'>
            <div className='flex flex-col xl:flex-row items-center gap-8 ring-1 w-full justify-between'>
                {
                    dishes.slice(0, 3).map((dish) => (
                        <div key={dish.id} className='padding flex flex-col items-center ring-1 space-y-4 w-full xl:w-[250px]  bg-pale-blue rounded-xl shadow-2xl'>

                            <div className='relative h-[150px] xl:h-[100px] w-[150px] xl:w-[100px]'>
                                <Image src={dish.image} alt={dish.name} className='object-contain' fill />
                            </div>
                            
                            <h4 className='font-bold font-palanquin'>{dish.name}</h4>
                        </div>
                    ))
                }
            </div>
            <div className='padding-x py-12 flex flex-col ring-1 ring-red-600 space-y-4 bg-pale-blue x-full rounded-xl shadow-2xl'>
                <h3 className='font-bold text-xl md:text-2xl'>Find <span className='text-coral-red'>deals</span>, <span className='text-green-600'>free delivery</span>, and more from our restaurant patners</h3>
                <div className='flex justify-center xl:justify-end'>
                    <Image src='/pizza-bike.png' alt='pizza bike' className='object-contain overflow-hidden' width={180} height={150} />
                </div>
            </div>
        </div>

        <div className='mt-[8rem] flex flex-col xl:flex-row xl:items-center justify-between gap-8'>
            <div className='flex flex-1'>
                <sup className='text-8xl'>&quot;</sup>
                <p className='text-center xl:text-left text-slate-gray leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, repudiandae accusantium. Nam iste qui quibusdam! Quisquam voluptate fuga totam corrupti excepturi, nihil ipsum! Laborum nostrum repellat non placeat consectetur perspiciatis fugit natus consequuntur, autem voluptatem! Eius, ipsa. Repellendus dolore facere necessitatibus, excepturi amet minima neque laborum dolor vel. Consequuntur, hic.</p>
            </div>
            <div className='flex flex-col xl:flex-row xl:items-center gap-8 flex-1'>
                {
                    dishes.slice(3, ).map((dish) => (
                        <div key={dish.id} className='padding flex flex-col items-center space-y-4 bg-pale-blue rounded-xl shadow-2xl'>
                            <div className='relative h-[150px] xl:h-[100px] w-[150px] xl:w-[100px]'>
                                <Image src={dish.image} alt={dish.name} className='object-contain' fill />
                            </div>
                            <h4 className='font-bold font-palanquin'>{dish.name}</h4>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Dishes