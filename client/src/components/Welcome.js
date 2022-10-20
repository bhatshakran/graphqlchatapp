import React from 'react';
import Banner from './Banner';
import Sponser from './Sponser';

const Welcome = () => {
  return (
    <main className=''>
      <div className='flex flex-col '>
        <Banner />
        <Sponser />
      </div>
    </main>
  );
};

export default Welcome;
