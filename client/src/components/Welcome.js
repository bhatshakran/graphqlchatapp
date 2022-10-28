import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Info from './Info';
import Sponser from './Sponser';
import Header from './Header';
import Footer from './Footer';

const Welcome = () => {
  return (
    <>
      <Header />
      <main className='bg-black'>
        <div className='flex flex-col '>
          <Banner />
          <Sponser />
          <Features />
          <Info />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Welcome;
