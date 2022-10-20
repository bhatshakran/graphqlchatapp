import React from 'react';

const Header = () => {
  return (
    <div className='text-primary font-vistol  flex w-full items-center p-4 py-8'>
      <div className=' flex-grow'>
        <ul className='flex justify-start gap-6'>
          <li className='flex items-center gap-1'>
            <h2>Chatter</h2>
            <div className='w-4 h-4  bg-blue-500 rounded-full'></div>
          </li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Patch release</li>
        </ul>
      </div>
      <div className='mr-6'>
        <button className='border border-gray-500 rounded-3xl p-2'>
          create account
        </button>
      </div>
    </div>
  );
};

export default Header;
