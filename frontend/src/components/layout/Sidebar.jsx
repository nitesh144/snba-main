import React from 'react'
import facebook from '../../assets/images/svg/facebook.svg'
import whatsapp from '../../assets/images/svg/whatsapp.svg'
import instagram from '../../assets/images/svg/instagram.svg'
import youtube from '../../assets/images/svg/youtube.svg'
import x from '../../assets/images/svg/x.svg'

const Sidebar = () => {
  const socialLinks = [
    {svg:facebook, alt:'facebook', href:'https://www.facebook.com/profile.php?id=61571678816978' },
    {svg:whatsapp, alt:'whatsapp', href:'https://wa.me/+917400866821'},
    {svg:youtube, alt:'youtube', href:'https://www.youtube.com/@SnbaConsumers'},
    {svg:instagram, alt:'instagram', href:'https://www.instagram.com/aarnagroupsofficial/' },
    {svg:x, alt:'x', href:'https://x.com/SConsumers61681'}
   ]
  return (
    <div className='fixed right-0 top-1/3 transale-y-1/2 z-50'>
      {/* main sidebar */}
      <div 
      className='flex flex-col bg-black gap-1 p-1 rounded-lg'>
        {
          socialLinks.map((social,index)=>
          <a href={social.href}
          key={index}               
          className='transition-all duration-200 hover:scale-105'
          rel='noopener noreferrer'
          target='_blank'>
            <img src={social.svg} alt={social.alt}
             className='h-6 w-6 lg:h-8 lg:w-8'/> 
            </a>
          )}
      </div>
    </div>
  )
}

export default Sidebar