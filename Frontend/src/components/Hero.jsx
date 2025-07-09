import React from 'react'
import hero from '../assets/hero.jpg'
import { Bookmark, Play } from 'lucide-react'

const Hero = () => {
  return (
    <div className='text-white relative h-[480px] overflow-hidden'>
        <img src={hero} alt="hero" className='w-full rounded-2x1 b-[480px] object-center object-cover'/>

        <div className='flex space-x-2 md:space-x-4 absolute bottom-4 left-4'>
            <button className='flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full cursor-pointer text-sm md:text-base'>
                <Bookmark className='mr-2 w-4 h-5 md:2-5 md:h-5'/>Watch Later</button>
            <button className=' flex justify-center items-center bg-[#e50914] hover:bg-gray-200 text-white py-3 px-4 rounded-full cursor-pointer text-sm md:text-base'>
                <Play className='mr-2 w-4 h-5 md:2-5 md:h-5'/>Watch Now</button>

        </div>

    </div>
  )
}

export default Hero
