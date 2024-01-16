'use client'

import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { dishes } from '@/constants';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay, A11y } from 'swiper/modules';


// import Swiper styles
import "swiper/css";
import "swiper/swiper-bundle.css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/scrollbar"


// import the required modules

const Slider = () => {

    // I want to display a single item in a slider.
   

  return (
    <div className=''>
        <Swiper
        modules={[Pagination, Scrollbar, Navigation, A11y, Autoplay ]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={true}
        >
            {
                dishes.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className='ring-1 h-[800px]'>
                            <div className='flex flex-col justify-center items-center'>
                                <div className='swiper-slide-content'>
                                    <div className=''>
                                        <Image src={item.image} alt={item.title} width={200} height={200} />
                                    </div> 
                                </div>
                                <h1 className='text-coral-red text-4xl'>Hello Pizzeria</h1>
                                <h1 className='text-coral-red text-4xl'>Hello Pizzeria</h1>
                                <h1 className='text-coral-red text-4xl'>Hello Pizzeria</h1>
                                <h1 className='text-coral-red text-4xl'>Hello Pizzeria</h1>
                                <h1 className='text-coral-red text-4xl mb-[2rem]'>Hello Pizzeria</h1>
                            </div>
                        </SwiperSlide>
                    )
                })
            }

            <div className="slider-controller">
                <div className="slider-arrow">
                    <FaArrowRight />
                </div>
            </div>
        </Swiper>
    </div>
  )
}

export default Slider