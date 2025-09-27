// import React from 'react'
import Hero from "../landing/Hero";
import Feature from "../landing/Features";
import HowItWorks from "../landing/HowItWorks";
import Testimonials from "../landing/Testimonials";
import CTA from "../landing/Cta";
import Footer from "../landing/Footer";
import { Navigation } from "../landing/Navbar";
const LandingPage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Feature />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;
