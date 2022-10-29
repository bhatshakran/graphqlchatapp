import React from 'react';
import UserCard from './UserCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries';
import { useLoggedContext } from '../utils/hooks';
// import { LoggedInContext } from '../App';

const Sidebar = () => {
  // console.log(conData.setLoggedIn());
  const { loggedIn, setLoggedIn } = useLoggedContext();

  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  refetch();
  console.log(data);

  if (loading) return <div>Loading chats...</div>;

  return (
    <div className='bg-black px-4 w-1/3 py-2'>
      <div className='flex justify-between w-full'>
        <div className='font-acworth '>Chatter</div>
        <LogoutIcon
          onClick={() => {
            localStorage.removeItem('jwt');
            setLoggedIn(false);
          }}
        />
      </div>

      {data.users
        ? data.users.map((user) => {
            return <UserCard key={user.id} item={user} />;
          })
        : ''}
    </div>
  );
};

export default Sidebar;
