import React from 'react';

const Header = () => {
  return (
    <div className='bg-black text-primary font-mustica  flex w-full items-center px-12 sm:p-4 py-8'>
      <div className='sm:hidden flex  justify-between gap-1 w-full'>
        <div className='flex items-center gap-1'>
          <h2 className='font-acworth'>Chatter</h2>
          <div className='w-4 h-4  bg-blue-500 rounded-full'></div>
        </div>
        <div>Menu</div>
      </div>
      <div className='hidden sm:inline-block flex-grow'>
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
      <div className='hidden sm:inline-block mr-6'>
        <button className='border border-gray-500 rounded-3xl p-2'>
          create account
        </button>
      </div>
    </div>
  );
};

export default Header;
