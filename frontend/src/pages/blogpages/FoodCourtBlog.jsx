
import { useState } from 'react';
import { ArrowDown, Star, Utensils, ShoppingBag, Truck } from 'lucide-react';
import foodbg from '../../assets/images/blog/food/food-bg.jpg'

export default function AarnaFoodCourt() {
  return (
    <div className=" text-white min-h-screen font-sans overflow-hidden " style={{backgroundImage: `url(${foodbg})`}}>
      {/* Hero Section - Enhanced with more visual appeal */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Decorative elements */}
        {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/90 via-black/70 to-black"></div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-red-800 rounded-full blur-3xl opacity-20"></div>
        </div> */}

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center justify-center">
            {/* Logo/Brand */}
            <div className="mb-6 flex items-center">
              <span className="bg-red-700 text-white p-3 rounded-full">
                <Utensils size={28} />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center text-white">
              <span className="text-red-600">Aarna</span> Food Court
            </h1>
            <p className="text-xl md:text-3xl mb-12 text-center max-w-3xl text-gray-200">Your Ultimate Dining Destination in Raipur</p>
            
            {/* Highlight Box - Enhanced with better styling */}
            <div className="bg-gradient-to-r from-red-800 to-red-600 p-6 md:p-8 rounded-xl shadow-2xl border border-red-500/30 max-w-3xl text-center mb-12 transform hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-3">
                <Star className="text-yellow-300" size={24} />
                <Star className="text-yellow-300" size={24} />
                <Star className="text-yellow-300" size={24} />
              </div>
              <p className="text-xl md:text-2xl font-medium mb-2">Craving something delicious?</p>
              <p className="text-lg md:text-xl">Take advantage of our 25% off offer and come experience the best of global cuisines!</p>
            </div>
            
            <p className="text-lg md:text-xl text-center max-w-3xl text-gray-300">
              Craving a meal that's as diverse as your taste buds? Welcome to <strong className="text-red-500">Aarna Food Court</strong>, where food lovers come together to indulge in a world of flavors all under one roof. Whether you're in the mood for the comforting spices of Indian cuisine, the crispy goodness of Chinese, the cheesy delights of Italian dishes, or the bold and zesty flavors of Mexican food, <strong className="text-red-500">Aarna Food Court</strong> has it all!
            </p>
            
            {/* Scroll indicator */}
            <div className="mt-16 animate-bounce">
              <ArrowDown size={24} className="text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cuisines Section - Enhanced with better visuals */}
      <section id="cuisines" className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-red-700/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-red-600">Global Cuisines</span> to Satisfy Every Craving
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
          
          <p className="text-lg mb-16 text-center max-w-4xl mx-auto text-gray-300">
            At Aarna Food Court, we take pride in offering a diverse range of cuisines that cater to every taste. Whether you're in the mood for hearty <strong className="text-red-500">Indian</strong> spices, savory <strong className="text-red-500">Chinese</strong> dishes, comforting <strong className="text-red-500">Italian</strong> classics, or flavorful <strong className="text-red-500">Mexican</strong> meals, we've got something special for you. No matter what you're craving, our food is prepared fresh, made with quality ingredients, and served with love.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Indian Cuisine Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/50 shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-red-200 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-5xl mb-4">🍛</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-500 group-hover:text-red-400">Indian</h3>
              <p className="text-gray-300">From sizzling kebabs to rich curries and fluffy naans, experience the essence of Indian flavors.</p>
            </div>
            
            {/* Chinese Cuisine Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/50 shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-red-200 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-5xl ">🥢</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-500 group-hover:text-red-400">Chinese</h3>
              <p className="text-gray-300">Indulge in crispy spring rolls, mouthwatering manchurian, and hot & sour soups.</p>
            </div>
            
            {/* Italian Cuisine Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/50 shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-red-200 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-5xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-500 group-hover:text-red-400">Italian</h3>
              <p className="text-gray-300">Relish freshly made pizzas, pastas, and creamy risottos that transport you straight to Italy.</p>
            </div>
            
            {/* Mexican Cuisine Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-red-900/50 shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-full bg-red-200 flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <span className="text-5xl mb-3">🌮</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-500 group-hover:text-red-400">Mexican</h3>
              <p className="text-gray-300">Savor zesty tacos, burritos, and nachos topped with the finest ingredients.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section - Enhanced with better visuals */}
      <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative">
        {/* Decorative elements */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-700/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
            <span className="text-red-600">Services</span> Just For You
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-12"></div>
          
          <p className="text-lg mb-16 text-center max-w-4xl mx-auto text-gray-300">
            Whether you're dining with us, ordering in, or grabbing your meal on the go, Aarna Food Court makes sure you get your food exactly how you want it.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Dine-In Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="bg-gradient-to-br from-red-700 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Utensils size={36} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Dine-In</h3>
              <p className="text-gray-300 text-center">Our spacious and modern dining area is designed to give you a comfortable and welcoming atmosphere. Perfect for family gatherings, celebrations, or casual get-togethers with friends.</p>
            </div>
            
            {/* Takeaway Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="bg-gradient-to-br from-red-700 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag size={36} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Takeaway</h3>
              <p className="text-gray-300 text-center">In a rush but craving something delicious? Grab your meal to go, and enjoy it wherever you are.</p>
            </div>
            
            {/* Delivery Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-gray-700 relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-700 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              
              <div className="bg-gradient-to-br from-red-700 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Truck size={36} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center text-white">Delivery</h3>
              <p className="text-gray-300 text-center">Prefer to dine in the comfort of your home? We offer fast and convenient delivery services right to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Special Offer Section - Enhanced with better visual appeal */}
      <section id="offer" className="py-16 md:py-24 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/90 via-red-800/80 to-black"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600 rounded-full blur-3xl opacity-20"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-white">A Special Offer</span> <span className="text-yellow-300">Just for You!</span>
              </h2>
              <div className="w-24 h-1 bg-yellow-300 mx-auto"></div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-10 rounded-2xl shadow-2xl border border-red-500/30 flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="absolute -top-5 -right-5 bg-yellow-500 text-black font-bold px-4 py-1 rounded-full text-sm">LIMITED TIME</div>
              
              <div className="mb-6">
                <span className="text-6xl md:text-8xl font-extrabold text-white">25<span className="text-red-500">%</span></span>
                <span className="text-4xl md:text-6xl font-bold text-white">OFF</span>
              </div>
              
              <p className="text-xl md:text-2xl font-medium text-yellow-300 mb-4">on all orders above ₹100!</p>
              
              <p className="text-gray-300 mb-8">Whether you're picking up a meal for yourself or feeding the entire family, take advantage of this limited-time offer and treat your taste buds to something extraordinary. Hurry, the offer is valid for a limited period only!</p>
              
              <button className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white font-bold text-lg py-3 px-8 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Claim Offer Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Dining Experience Section - Enhanced with better visual appeal */}
      <section className="py-16 md:py-24 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-800/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-700/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                <span className="text-red-600">Comfortable</span> and <span className="text-red-600">Safe</span> Dining
              </h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 shadow-xl mb-16">
              <p className="text-lg text-gray-300 mb-6">
                We know how important comfort and safety are when choosing a place to dine, which is why we've designed our food court with your wellbeing in mind. Our spacious dining area is perfect for both individuals and families, and we maintain strict hygiene practices to ensure a clean, safe environment for all our guests. Rest assured, we've taken every step to prioritize your safety.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800 text-center">
                  <div className="text-red-500 text-4xl mb-2">✓</div>
                  <h4 className="font-bold text-white mb-2">Spacious Seating</h4>
                  <p className="text-gray-400 text-sm">Comfortable distance between tables</p>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800 text-center">
                  <div className="text-red-500 text-4xl mb-2">✓</div>
                  <h4 className="font-bold text-white mb-2">Regular Sanitization</h4>
                  <p className="text-gray-400 text-sm">Thorough cleaning after each service</p>
                </div>
                
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800 text-center">
                  <div className="text-red-500 text-4xl mb-2">✓</div>
                  <h4 className="font-bold text-white mb-2">Fresh Ingredients</h4>
                  <p className="text-gray-400 text-sm">Quality food prepared daily</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-800 to-red-600 p-10 rounded-xl shadow-2xl text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-6">Visit Us Today!</h2>
              <p className="text-lg mb-8">
                Aarna Food Court is conveniently located in <strong>Raipur</strong> -- the perfect place to enjoy a meal with your loved ones or satisfy those food cravings. Whether you're stopping by for a quick bite or planning to enjoy a leisurely meal, we promise you an experience you'll want to repeat!
              </p>
              
              <p className="text-xl font-medium mb-6">
                Don't Miss Out on Our Special Offer!
              </p>
              
              <p className="mb-8">
                Get ready to explore our diverse menu and enjoy amazing discounts on your favorite dishes. Head over to <strong>Aarna Food Court</strong> today, or place your order online and let us deliver deliciousness straight to you!
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-red-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 shadow-lg">
                  Visit Us
                </button>
                <button className="bg-black/30 backdrop-blur-sm text-white font-bold py-3 px-8 rounded-full border border-white/30 hover:bg-black/50 transition duration-300 shadow-lg">
                  Order Online
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* End Section - Final branding */}
      <section className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-6">
              <span className="bg-red-700 text-white p-2 rounded-full">
                <Utensils size={18} />
              </span>
              <h2 className="ml-2 text-xl font-bold text-white">Aarna Food Court</h2>
            </div>
            <p className="text-gray-500 text-sm text-center">
              &copy; {new Date().getFullYear()} Aarna Food Court. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}