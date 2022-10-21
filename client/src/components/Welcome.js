import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Info from './Info';
import Sponser from './Sponser';

const Welcome = () => {
  return (
    <main className=''>
      <div className='flex flex-col '>
        <Banner />
        <Sponser />
        <Features />
        <Info />
      </div>
    </main>
  );
};

export default Welcome;
