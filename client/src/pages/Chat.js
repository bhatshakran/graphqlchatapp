import React from 'react';
import ChatScreen from '../components/ChatScreen';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [userScreenData, setUserScreenData] = React.useState();
  const populateUserData = (id, firstName) => {
    setUserScreenData({ id, firstName });
  };
  return (
    <div>
      <div className='bg-black text-white p-4 flex justify-between'>
        <div className='font-acworth text-2xl flex items-center gap-1'>
          Chatter
          <div className='w-4 h-4  bg-blue-500 rounded-full'></div>
        </div>
        <h2 className=''>
          <Link
            className='border border-gray-400 p-2 rounded-full font-vistol'
            to='/'
          >
            Go back home
          </Link>
        </h2>
      </div>
      <div className='flex w-full'>
        <Sidebar showUserScreen={populateUserData} />
        {userScreenData ? (
          <ChatScreen userScreenData={userScreenData} />
        ) : (
          <div className='unopenedchat flex-grow  text-white flex flex-col items-center justify-center'>
            <h2 className='font-acworth text-6xl '>Chatter</h2>
            <p className='text-2xl font-vistol opacity-70 mt-4'>
              Connect with your gang!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
