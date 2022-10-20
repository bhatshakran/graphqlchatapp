import React from 'react';
import bannerImg from '../img/bannerImg.png';
import Sparks from './Sparks';

const Banner = () => {
  return (
    <div className='text-white mt-40 w-full flex flex-col items-center gap-y-24 justify-center px-12'>
      <div className=' max-w-xl text-center'>
        <h2 className='text-6xl font-acworth'>Connect with your gang!</h2>
        <h6 className='mt-12 font-vistol'>
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
      <div className='w-4/5 rounded-xl relative'>
        <img src={bannerImg} alt='bannerImg' className='rounded-xl' />
        <div className='absolute -top-12 -right-16 rotate-90'>
          <Sparks />
        </div>
      </div>
    </div>
  );
};

export default Banner;