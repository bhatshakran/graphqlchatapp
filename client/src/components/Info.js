import React from 'react';
import huumans from '../img/huumans.jpeg';
import wooman from '../img/wooman.jpeg';

const Info = () => {
  return (
    <div className='text-primary flex flex-col gap-y-40 pt-32 pb-60 px-12 relative'>
      <div className='flex gap-x-12'>
        <div className='flex flex-col gap-y-6'>
          <h3 className='text-3xl font-acworth'>
            Easy and effortless way to connect with your team
          </h3>
          <p className='font-vistol'>
            With Chatter you can easily connect with your team in different
            fields, you can create, manage, and edit whatever you want inside
            the channel. Creat as many as you want.{' '}
          </p>
          <button className='font-vistol border border-gray-500 rounded-full p-2'>
            Learn more about Chatter
          </button>
        </div>
        <img src={huumans} alt='easy' className='w-96' />
      </div>
      <div className='flex gap-x-12'>
        <img src={wooman} alt='easy' className='w-80' />
        <div className='flex flex-col gap-y-6'>
          <h3 className='text-3xl font-acworth'>
            Tons of supportive community you can discover
          </h3>
          <p className='font-vistol'>
            Search any type and field community you want, by searching on the
            search page you can discover tons of supportive community that will
            help you with your work.{' '}
          </p>
          <button className='font-vistol   border border-gray-500 rounded-full p-2'>
            Explore the communities
          </button>
        </div>
      </div>

      <div className='absolute overflow-hidden max-h-60 bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 join rounded-lg text-white bg-secondary py-8 px-20 flex flex-col gap-4'>
        <h2 className='text-5xl text-center font-acworth'>
          {' '}
          Join thousands of teams
        </h2>
        <p className='font-vistol text-center'>
          Come and join thousands of wholesome and supportive people around the
          world.Create your team and connect with others.
        </p>
        <div className='mx-auto'>
          <button className='bg-white text-black font-vistol p-2 px-4 rounded-full'>
            {' '}
            Log in to Chatter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
