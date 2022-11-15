import React from 'react';
import ChatScreen from '../components/ChatScreen';
import Sidebar from '../components/Sidebar';
import { Link } from 'react-router-dom';

const Chat = () => {
  const [userScreenData, setUserScreenData] = React.useState();
  const [activeChild, setActiveChild] = React.useState();
  const populateUserData = (id, firstName) => {
    setActiveChild(id);
    setUserScreenData({ id, firstName });
  };
  return (
    <div>
      <div className='bg-black text-white p-4 flex justify-between items-center'>
        <div className='font-acworth text-2xl flex items-center gap-1'>
          Chatter
          <div className='w-4 h-4  bg-blue-500 rounded-full'></div>
        </div>
        <h2 className=''>
          <Link
            className='border border-gray-400 p-2 rounded-full font-mustica'
            to='/'
          >
            Go back home
          </Link>
        </h2>
      </div>
      <div className='flex flex-wrap w-full'>
        <Sidebar showUserScreen={populateUserData} activeChild={activeChild} />
        {userScreenData ? (
          <ChatScreen userScreenData={userScreenData} />
        ) : (
          <div className='unopenedchat flex-grow  text-white flex flex-col items-center justify-end pb-12'>
            <h2 className='font-mustica text-5xl '>Welcome to your chats!</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
