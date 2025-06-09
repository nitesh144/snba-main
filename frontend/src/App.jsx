import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import './index.css'
import HomePage from './pages/homepage/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import ServicePage from './pages/ServicePage';
import MembershipPage from './pages/MembershipPage';
import TermsPage from './pages/policypage/TermsPage';
import PrivacyPage from './pages/policypage/PrivacyPage';
import RefundPage from './pages/policypage/RefundPage';
import CallToAction from './components/layout/CallToAction';
import CareerPage from './pages/CareerPage';
import MembershipFormPage from './pages/formpage/MembershipFormPage';
import PaymentPage from './pages/PaymentPage';
import SplashScreen from './components/SplashScreen';
import ShippingPage from './pages/policypage/ShippingPage';
import BlogPage from './pages/blogpages/BlogPage';
import GymBlog from './pages/blogpages/GymBlog';
import FoodCourtBlog from './pages/blogpages/FoodCourtBlog';
import ScrollToTop from './components/scroll/ScrollToTop';
import MartBlog from './pages/blogpages/MartBlog';
import SalonBlog from './pages/blogpages/SalonBlog';
import FrenchisePage from './pages/franchisepage/FrenchisePage';
import FrenchiseForm from './components/form/FrenchiseForm';
import Layout from './components/layoutpage/Layout';
import AnnieFoodCourt from './pages/servicepage/AnnieFood';
import AnnieSalon from './pages/servicepage/AnnieSalon';
import AnnieMart from './pages/servicepage/AnnieMart';
import AnnieGym from './pages/servicepage/AnnieGym';
import AnnieGymBlog from './pages/blogpages/GymBlog';

// google analytics
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-NX4PBW1C08', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

function App() {

  const [isLoading, setIsLoading] = useState(true);

  usePageTracking();

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
      <Toaster position='top-center' />
      <ScrollToTop />
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/aboutus' element={<AboutUsPage />} />
            <Route path='/contact-us' element={<ContactUsPage />} />
            <Route path='/career' element={<CareerPage />} />
            <Route path='/services' element={<ServicePage />} />
            <Route path='/franchise' element={<FrenchisePage />} />
            <Route path='/membershipplans' element={<MembershipPage />} />
            <Route path='/terms-of-services' element={<TermsPage />} />
            <Route path='/privacy-policy' element={<PrivacyPage />} />
            <Route path='/refund-policy' element={<RefundPage />} />
            <Route path='/annie-gym' element={<AnnieGym />} />
            <Route path='/annie-mart' element={<AnnieMart />} />
            <Route path='/annie-salon' element={<AnnieSalon />} />
            <Route path='/annie-foodcourt' element={<AnnieFoodCourt />} />
            <Route path='/membership-form' element={<MembershipFormPage />} />
            <Route path='/payment' element={<PaymentPage />} />
            <Route path='/frenchise-form' element={<FrenchiseForm />} />
            <Route path='/shipping-policy' element={<ShippingPage />} />
            {/* blogs pages */}
            <Route path='/blogs' element={<BlogPage />} />
            <Route path='/gym-blog' element={<AnnieGymBlog />} />
            <Route path='/foodcourt-blog' element={<FoodCourtBlog />} />
            <Route path='/mart-blog' element={<MartBlog />}></Route>
            <Route path='/salon-blog' element={<SalonBlog />}></Route>
          </Route>
        </Routes>
      </div>
      {/* <CallToAction /> */}
    </div>
  );
}

export default App;