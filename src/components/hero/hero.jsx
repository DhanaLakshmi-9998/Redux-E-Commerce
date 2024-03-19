import React from 'react'
import { Link } from 'react-scroll'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero-container min-md:h-[58vh] h-[68vh] flex justify-center items-center text-center '>
        <div className='max-sm:mt-0 mt-24'>
            <h1 className='lg:text-6xl md:text-5xl max-md:text-5xl  max-sm:text-3xl text-black font-bold'>REDUX BEST SELLING</h1>
            <h3 className='lg:text-lg md:text-md max-sm:text-sm max-sm:font-medium mt-5'>UNIQUE PRODUCTS BY WORLDS'S TOP DESIGNER</h3>
            <Link to='prod-section' activeClass='active' offset={-80} className="m-auto "> 
                <button className='btn p-2 mt-3 rounded-sm  transition-all 0.3s ease text-white cursor-pointer'>SHOP NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Hero
