'use client'

import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { dishes, testimonials } from '@/constants';
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
    <div className='mt-[4rem]'>
        <Swiper
        modules={[Pagination, Scrollbar, Navigation, A11y, Autoplay ]}
        slidesPerView={1}
        autoplay={{
            delay: 5000,
            disableOnInteraction: false,
        }}
        speed={1000}
        loop={true}
        navigation={true}
        className='h-[45vh]'
        >
            {
                testimonials.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className=''>
                            <div className='flex flex-col justify-center items-center mb-[2rem] text-center'>
                                <div className='mb-[2rem]'>
                                    <p className='font-medium font-montserrat max-w-[30rem] text-xl leading-[50px]'>&ldquo;{item.content}&ldquo;</p>
                                </div>
                                <div>
                                    <h5 className='mb-[1.5rem] font-bold font-montserrat'>{item.name.split(" ")[0]} <span className='text-coral-red'>{item.name.split(" ")[1]}</span></h5>
                                    <h6 className='font-montserrat font-small'>{item.position}</h6>
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