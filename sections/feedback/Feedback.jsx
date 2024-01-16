'use client'

import { Slider } from '@/components'
import React from 'react'

const Feedback = () => {

  return (
    <section className='min-h-[50vh] xl:min-h-[70vh] max-container'>
        <div className='flex items-center flex-col'>
            <h1 className='font-bold text-xl xl:text-4xl  font-palanquin mb-4'>Our Clients Feedback</h1>
            <p className='leading-8 max-w-[35rem] text-base text-center'>The Food at your doorstep. Why starve when you have us. Your hunger partner. Straight out of the kitchen to your doorstep</p>
        </div>
        <section>
          <Slider />
        </section>
    </section>
  )
}

export default Feedback