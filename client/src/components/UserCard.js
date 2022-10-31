import React from 'react';

const UserCard = ({
  item: { firstName, lastName, id },
  activeChild,
  runUserCallback,
}) => {
  const setUserCb = () => {
    runUserCallback();
  };

  return (
    <div
      className={`usercard w-full flex justify-start gap-2 py-4 px-2 items-center cursor-pointer ${
        activeChild && id === activeChild ? 'bg-white bg-opacity-10' : null
      }`}
      onClick={() => setUserCb()}
    >
      <img
        src={`https://avatars.dicebear.com/api/initials/${firstName} ${lastName}.svg`}
        alt='avatar'
        width='32px'
        height='32px'
        className='rounded-full'
      />
      <div className='font-vistol'>
        {firstName} {lastName}{' '}
      </div>
    </div>
  );
};

export default UserCard;
