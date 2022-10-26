import React from 'react';
import bannerImg from '../img/bannerImg.png';
import Sparks from './Sparks';

const Banner = () => {
  return (
    // <Container>
    <div className='text-white pt-32 w-full flex flex-col items-center gap-y-24 justify-center px-12 relative sm:pb-96 '>
      <div className=' max-w-xl text-center'>
        <h2 className='text-6xl font-acworth'>Connect with your gang!</h2>
        <h6 className='mt-12 font-vistol text-primary'>
          Chatter is a messaging app for your team that will help you to connect
          with everyone in an easy and comfortable way possible.
        </h6>
        <button className='bg-secondary font-vistol mt-16 py-3 px-6 rounded-xl text-lg text-gray-300 relative'>
          Log in to Chatter
          <div className='absolute -top-10 -left-14 -rotate-45'>
            <Sparks />
          </div>
        </button>
      </div>
      <div className='w-full sm:w-4/5 mt-16 max-w-4xl rounded-xl sm:absolute top-full -translate-y-1/3 sm:-translate-y-1/2'>
        <img src={bannerImg} alt='bannerImg' className='rounded-xl' />
        <div className='absolute -right-10 -top-10 sm:-top-12 sm:-right-16 rotate-90'>
          <Sparks />
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default Banner;
