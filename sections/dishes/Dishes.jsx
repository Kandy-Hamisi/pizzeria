import { dishes } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Dishes = () => {
  return (
    <section className='min-h-screen max-container'>
        <div className='flex flex-col space-y-6 items-center'>
            <h1 className='text-4xl font-bold font-palanquin max-w-[40rem] text-center leading-[80px]'>More Than <span className="text-coral-red">10,000</span> Dishes To Order!</h1>
            <p className='text-xl md:text-2xl'>Welcome To The Biggest Network of Food Ordering & Delivery</p>
        </div>

        <div className='flex gap-8 items-center justify-between mt-12'>
            <div className='flex items-center gap-8'>
                {
                    dishes.slice(0, 3).map((dish) => (
                        <div key={dish.id} className='padding flex flex-col items-center space-y-4 bg-pale-blue rounded-xl shadow-2xl'>
                            <Image src={dish.image} alt={dish.name} width={50} height={50} className='object-contain bg-white p-2 w-full rounded-full shadow-xl' />
                            <h4 className='font-bold font-palanquin'>{dish.name}</h4>
                        </div>
                    ))
                }
            </div>
            <div className='padding-x py-12 flex flex-col  space-y-4 bg-pale-blue rounded-xl shadow-2xl flex-1'>
                <h3 className='font-bold text-2xl'>Find <span className='text-coral-red'>deals</span>, <span className='text-green-600'>free delivery</span>, and more from our restaurant patners</h3>
                <div className='flex justify-end'>
                    <Image src='/pizza-bike.png' alt='pizza bike' className='object-contain overflow-hidden' width={180} height={150} />
                </div>
            </div>
        </div>

        <div className='mt-[8rem] flex items-center justify-between gap-8'>
            <div className='flex flex-1'>
                <sup className='text-8xl'>&quot;</sup>
                <p className='text-slate-gray leading-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, repudiandae accusantium. Nam iste qui quibusdam! Quisquam voluptate fuga totam corrupti excepturi, nihil ipsum! Laborum nostrum repellat non placeat consectetur perspiciatis fugit natus consequuntur, autem voluptatem! Eius, ipsa. Repellendus dolore facere necessitatibus, excepturi amet minima neque laborum dolor vel. Consequuntur, hic.</p>
            </div>
            <div className='flex items-center gap-8 flex-1'>
                {
                    dishes.slice(3, ).map((dish) => (
                        <div key={dish.id} className='padding flex flex-col items-center space-y-4 bg-pale-blue rounded-xl shadow-2xl'>
                            <Image src={dish.image} alt={dish.name} width={50} height={50} className='object-contain bg-white p-2 w-full rounded-full shadow-xl' />
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