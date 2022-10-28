import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../components/Welcome';
import ChatScreen from '../components/ChatScreen';
import AuthScreen from './AuthScreen';
import Chat from './Chat';

const AllRoutes = ({ setLoggedIn }) => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/:id/:name' element={<ChatScreen />} />
      <Route path='/chat' element={<Chat setLoggedIn={setLoggedIn} />} />
      <Route path='/auth' element={<AuthScreen setLoggedIn={setLoggedIn} />} />
    </Routes>
  );
};

const HomeScreen = ({ setLoggedIn }) => {
  return (
    <div className=' w-full '>
      <AllRoutes setLoggedIn={setLoggedIn} />
    </div>
  );
};

export default HomeScreen;
