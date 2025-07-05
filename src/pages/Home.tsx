import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import FeaturedDestinations from '../components/FeaturedDestinations';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import Newsletter from '../components/NewsletterSection';
import Footer from '../components/Footer';
import { Box } from '@mui/material';
import { useEffect } from 'react';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        smooth: true,
        duration: 500,
        offset: -70,
      });
    }
  }, [location.state]);

  return (
    <>
      <Navbar />
      <Box>
        <HeroSection />
        <AboutSection />
        <FeaturedDestinations />
        <TestimonialsCarousel />
        <Newsletter />
        <Footer /> 
      </Box>
    </>
  );
};

export default Home;
