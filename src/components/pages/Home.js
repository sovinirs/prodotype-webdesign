import React from 'react';
import Navbar from '../layouts/Navbar';
import About from '../layouts/About';
import Worktogether from '../layouts/Worktogether';
import Carousel from '../layouts/Carousel';
import Cards from '../layouts/Cards';
import Milestones from '../layouts/Milestones';
import Testimonials from '../layouts/Testimonials';
import Haveideas from '../layouts/Haveideas';
import Footer from '../layouts/Footer';

export const Home = () => {
  return (
    <div className='bg-vdark'>
      <Navbar />
      <Carousel />
      <About />
      <Worktogether />
      <Cards />
      <Milestones />
      <Testimonials />
      <Haveideas />
      <Footer />
    </div>
  );
};

export default Home;
