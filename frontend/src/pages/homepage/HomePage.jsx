import React from 'react'
import HeroSection from '../../components/home/Hero'
import ScrollingText from '../../components/home/ScrollingText'
import TestimonialsSection from '../../components/home/Testimony'
import AppBanner from '../../components/home/AppBanner'
import ServicesSection from '../../components/home/Services'
import StatsSection from '../../components/home/Statistics'
import SplitLayout from '../../components/home/SplitLayout'
import Why from '../../components/home/Why'
import Franchise from '../../components/home/Frenchise'
import Promotion from '../../components/home/Promotion'


const HomePage = () => {
  return (
    <div className='overflow-hidden'>
        <HeroSection/>
        <ServicesSection/>
        <ScrollingText/>
        <SplitLayout/>
        <Promotion/>
        <AppBanner/>
        <Why/>
        <StatsSection/>
        <TestimonialsSection/>
        <Franchise/>
    </div>
  )
}

export default HomePage