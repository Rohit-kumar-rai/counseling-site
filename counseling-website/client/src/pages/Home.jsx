import React from 'react';
import HomeHero from '../components/home/Home';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

const HomePage = () => {
  return (
    <>
      <HomeHero />
      <Features />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HomePage; 