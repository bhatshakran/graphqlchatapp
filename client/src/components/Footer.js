import React from 'react';

const Footer = () => {
  return (
    <div className='bg-white pt-40 mt-12 flex flex-wrap justify-evenly  items-center gap-16 px-12 pb-24'>
      <div className='w-1/3 sm:w-auto'>
        <h3 className='font-acworth text-2xl'>Chatter</h3>
        <p className='w-60'>
          A messaging app for everyone to connect with their loved ones.
        </p>
      </div>
      <div className='w-1/3 sm:w-auto'>
        <h2 className='font-bold'>Product</h2>
        <ul>
          <li>Uploads</li>
          <li>Downloads</li>
        </ul>
      </div>
      <div className='w-1/3 sm:w-auto'>
        <h2 className='font-bold'>Support</h2>
        <ul>
          <li>Help center</li>
          <li>Account information</li>
        </ul>
      </div>
      <div className='w-1/3 sm:w-auto'>
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
