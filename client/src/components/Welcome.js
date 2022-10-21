import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Sponser from './Sponser';

const Welcome = () => {
  return (
    <main className=''>
      <div className='flex flex-col '>
        <Banner />
        <Sponser />
        <Features />
      </div>
    </main>
  );
};

export default Welcome;
