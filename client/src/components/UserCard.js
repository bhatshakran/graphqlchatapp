import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserCard = ({ item: { firstName, lastName, id } }) => {
  const navigate = useNavigate();
  return (
    <div
      className='usercard flex justify-start gap-2 py-4 items-center'
      onClick={() => navigate(`/${id}/${firstName} ${lastName}`)}
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
