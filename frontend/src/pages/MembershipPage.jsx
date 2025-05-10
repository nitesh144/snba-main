
import React from 'react';
import Banner from '../components/Banner';
import GymService from '../components/services/GymService';
import FoodService from '../components/services/FoodService';
import SalonService from '../components/services/SalonService';
import MembershipDetails from '../components/layout/MembershipDetails';
import MartService from '../components/services/MartService';

const ServicePage = () => {

  return (
    <>
      <Banner />
      <MembershipDetails />
      <MartService/>
      <GymService />
      <SalonService />
      <FoodService />
    </>
  );
};

export default ServicePage;