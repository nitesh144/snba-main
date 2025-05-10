import React from 'react'
import banner from '../assets/images/4in1.jpg'
import mobilemember from '../assets/images/mobile/mobile-membership.jpg'

const Banner = () => {
  return (
    <div className='relative'>
        <img src={banner} className='h-screen w-screen hidden md:block lg:block xl:block'/>
        <img src={mobilemember} className='h-[400px] w-screen block md:hidden lg:hidden xl:hidden ' />
        {/* <div className='inset-0 absolute bg-black/40 '></div> */}
    </div>
  )
}

export default Banner