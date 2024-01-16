'use client'

import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { dishes } from '@/constants';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


// import the required modules


const Slider = () => {

    // I want to display a single item in a slider.
   

  return (
    <div className=''>
        <Swiper
        slidesPerView={3}
        pagination={{ clickable: true }}
        navigation
        
        >
            {
                dishes.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className='swiper-slide'>
                                <div className='swiper-slide-content'>
                                    <div className='swiper-slide-image'>
                                        <Image src={item.image} alt={item.title} width={200} height={200} />
                                    </div> 
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    </div>
  )
}

export default Slider