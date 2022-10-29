import React from 'react';
import Header from '../components/Header';
import ChatScreen from '../components/ChatScreen';
import Sidebar from '../components/Sidebar';

const Chat = () => {
  const [userScreenData, setUserScreenData] = React.useState();
  const populateUserData = (id, firstName) => {
    setUserScreenData({ id, firstName });
  };
  return (
    <div>
      <Header />
      <div className='flex'>
        <Sidebar showUserScreen={populateUserData} />
        {userScreenData ? (
          <ChatScreen userScreenData={userScreenData} />
        ) : (
          <div className='unopenedchat  w-2/3 flex items-center justify-center'>
            <h2 className='font-acworth text-white text-6xl '>Chatter</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
