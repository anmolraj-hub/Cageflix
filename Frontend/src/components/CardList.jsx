import React from 'react'
import hero from '../assets/hero.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const CardList = () => {
    const data = [
        
    ]
  return (
    
    <div className="text-white md:px-4">
        <h2 classname="pt-10 pb-5 text-lg font-medium">Upcoming</h2>


    <Swiper slidesPerView={"auto"} spaceBetween={10} className='mySwiper' >
        {data.map((item , index) =>(
            <SwiperSlide key={index} className='max-w-72'>
                <img src={hero} alt='' className='h-44 w-full object-center object-cover'/>
                <p className='text-center pt-2'> A very good movie</p>
                </SwiperSlide>
        ) )}
        </Swiper>
    </div>
  )
}

export default CardList
