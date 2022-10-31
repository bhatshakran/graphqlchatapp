import React from 'react';

const MessageCard = ({ text, date, direction }) => {
  return (
    <div className={`flex justify-${direction}  my-6 mx-2`}>
      <div
        className={`${
          direction === 'end' ? 'bg-secondary' : 'bg-black'
        }  p-2 rounded-md`}
      >
        <div className='text-md font-acworth justify-end'>{text}</div>
        <div className=' text-xxs opacity-50 mt-2'>
          {new Date(date).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
