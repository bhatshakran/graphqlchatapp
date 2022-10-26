import React from 'react';
import message from '../img/message.svg';
import support from '../img/support.svg';
import channel from '../img/channel.png';

const Features = () => {
  return (
    <div className='bg-white w-full pb-32 px-12'>
      <div className='features-section flex flex-col items-center'>
        <h2 className='text-4xl sm:text-6xl font-acworth w-full sm:w-2/3 text-center'>
          Some of our features that will help you
        </h2>
        <div className='container flex flex-wrap justify-center text-left gap-8 mt-20 w-full'>
          <div className='w-full sm:w-1/4'>
            <img src={message} alt='message' />
            <h3 className='text-lg font-acworth mt-4'>Easy Communication</h3>
            <p className='font-vistol'>
              Easy and simple way to communicate with your team and friends,
              built with awesome features.
            </p>
          </div>
          <div className='w-full sm:w-1/4'>
            <img src={support} alt='support' />

            <h3 className='text-lg font-acworth mt-4'> Community Support</h3>
            <p className='font-vistol'>
              A creative and quick way to get feedbacks and support in your team
              or community , just send the work and rest will follow.
            </p>
          </div>

          <div className='w-full sm:w-1/4'>
            <img src={channel} alt='channel' className='w-16 h-16' />
            <h3 className='text-lg font-acworth mt-4'>Discover Channel</h3>
            <p className='font-vistol'>
              Discover new channels you are interested in, meet with new people
              around the world and make more connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
