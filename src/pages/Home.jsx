import React from "react";
import Navbar from "../compounent/Navbar";
import HeroSection from "../compounent/HeroSection";
import AboutCompany from "../compounent/AboutCompany";
import Services from "../compounent/Services";
import Fleet from "../compounent/Fleet";
import WhyChooseUs from "../compounent/WhyChooseUs";
import Clients from "../compounent/Clients";
import Destinations from "../compounent/Destinations";
import Branches from "../compounent/Branches";
import CTA from "../compounent/CTA";
import Footer from "../compounent/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutCompany />
      <Services />
      <Fleet />
      <WhyChooseUs />
      <Clients />
      <Destinations />
      <Branches />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
