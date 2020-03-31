import React from 'react';
import image1 from './images/home.jpg';

export const Carousel = () => {
  return (
    <div className='banner'>
      <img src={image1} alt='Banner' />
    </div>
  );
};

export default Carousel;
