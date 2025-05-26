import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header'
import './index.css'
import HomePage from './pages/homepage/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ServicePage from './pages/ServicePage';
import MembershipPage from './pages/MembershipPage';
import TermsPage from './pages/policypage/TermsPage';
import PrivacyPage from './pages/policypage/PrivacyPage';
import RefundPage from './pages/policypage/RefundPage';
import Footer from './components/layout/Footer';
import SocialSidebar from './components/layout/Sidebar';
import CallToAction from './components/layout/CallToAction';
import AarnaGym from './pages/servicepage/AarnaGym';
import AarnaMart from './pages/servicepage/AarnaMart';
import AarnaSalon from './pages/servicepage/AarnaSalon';
import AarnaFoodCourt from './pages/servicepage/AarnaFood';
import CareerPage from './pages/CareerPage';
import MembershipFormPage from './pages/formpage/MembershipFormPage';
import PaymentPage from './pages/PaymentPage';
import SplashScreen from './components/SplashScreen';
import ShippingPage from './pages/policypage/ShippingPage';
import BlogPage from './pages/blogpages/BlogPage';
import GymBlog from './pages/blogpages/GymBlog';
import FoodCourtBlog from './pages/blogpages/FoodCourtBlog';
import Promotion from './components/home/Promotion';
import ScrollToTop from './components/scroll/ScrollToTop';
import MartBlog from './pages/blogpages/MartBlog';
import SalonBlog from './pages/blogpages/SalonBlog';
import FrenchisePage from './pages/franchisepage/FrenchisePage';
import FrenchiseForm from './components/form/FrenchiseForm';
import ScrollDown from './components/layout/ScrollDown';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This will hide the splash screen after it completes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Set this slightly longer than the splash animation
    
    return () => clearTimeout(timer);
  }, []);

  // While loading, show only the splash screen
  if (isLoading) {
    return <SplashScreen />;
  }
  // Once loading is complete, render the full application
  return (
    <div>
      <Header/>
      <ScrollToTop/>
      <div>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/contact-us' element={<ContactUsPage />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/frenchise' element={<FrenchisePage />} />
          <Route path='/membershipplans' element={<MembershipPage />} />
          <Route path='/terms-of-services' element={<TermsPage />} />
          <Route path='/privacy-policy' element={<PrivacyPage />} />
          <Route path='/refund-policy' element={<RefundPage />} />
          <Route path='/blogs-page' element={<BlogPage/>} />
          <Route path='/aarna-gym' element={<AarnaGym/>} />
          <Route path='/aarna-mart' element={<AarnaMart/> } />
          <Route path='/aarna-salon' element={<AarnaSalon/>} />
          <Route path='/aarna-foodcourt' element={<AarnaFoodCourt/>} />
          <Route path='/membership-form' element={<MembershipFormPage/>} />
          <Route path='/payment' element={<PaymentPage/>} />
          <Route path='/frenchise-form' element={<FrenchiseForm/>} />
          <Route path='/shipping-policy' element={<ShippingPage/>} />
          {/* blogs pages */}
          <Route path='/gym-blog' element={<GymBlog/>} />
          <Route path='/foodcourt-blog' element={<FoodCourtBlog/>} />
          <Route path='/mart-blog' element={<MartBlog/>}></Route>
          <Route path='/salon-blog' element={<SalonBlog/>}></Route>
        </Routes>
      </div>
      <ScrollDown/>
      {/* <SocialSidebar/> */}
      <Footer/>
      <CallToAction/>
    </div>
  );
}

export default App;