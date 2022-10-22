import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white pt-40 mt-12 flex flex-wrap justify-evenly   items-center gap-16 md:gap-8 px-12 pb-24'>
      <div className='w-full text-center sm:w-1/3 md:w-1/5 '>
        <h3 className='font-acworth text-2xl'>Chatter</h3>
        <p className=' text-center '>
          A messaging app for everyone to connect with their loved ones.
        </p>
      </div>
      <div className='w-full text-center sm:w-1/3 md:w-1/5'>
        <h2 className='font-bold'>Product</h2>
        <ul>
          <li>Uploads</li>
          <li>Downloads</li>
        </ul>
      </div>
      <div className='w-full text-center sm:w-1/3 md:w-1/5'>
        <h2 className='font-bold'>Support</h2>
        <ul>
          <li>Help center</li>
          <li>Account information</li>
        </ul>
      </div>
      <div className='w-full text-center sm:w-1/3 md:w-1/5'>
        <h2 className='font-bold'>Help Solutions</h2>

        <ul>
          <li>Talk to support</li>
          <li>Support docs</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
