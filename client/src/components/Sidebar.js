import React from 'react';
import UserCard from './UserCard';
import LogoutIcon from '@mui/icons-material/Logout';
import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../graphql/queries';
import { useLoggedContext } from '../utils/hooks';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ showUserScreen, activeChild }) => {
  const { loggedIn, setLoggedIn } = useLoggedContext();
  const navigate = useNavigate();

  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS);
  refetch();

  if (loading)
    return <div className='p-8 text-4xl font-acworth'>Loading chats...</div>;

  const runsUserCallback = (id, firstName) => {
    showUserScreen(id, firstName);
  };

  return (
    <div className='bg-black w-1/3  max-w-screen-sidebar py-2 text-white sidebar border border-black'>
      <div className='flex justify-between w-full  px-4 py-2'>
        <div className='font-acworth '>Chats</div>
        <LogoutIcon
          className='cursor-pointer'
          onClick={() => {
            localStorage.removeItem('jwt');
            setLoggedIn(false);
            navigate('/auth');
          }}
        />
      </div>

      {data.users
        ? data.users.map((user) => {
            return (
              <UserCard
                key={user.id}
                item={user}
                activeChild={activeChild}
                runUserCallback={() =>
                  runsUserCallback(user.id, user.firstName)
                }
              />
            );
          })
        : ''}
    </div>
  );
};

export default Sidebar;
