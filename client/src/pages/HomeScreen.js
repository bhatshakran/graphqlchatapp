import React from 'react';
// import Sidebar from '../components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Welcome from '../components/Welcome';
import ChatScreen from '../components/ChatScreen';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/:id/:name' element={<ChatScreen />} />
    </Routes>
  );
};

const HomeScreen = ({ setLoggedIn }) => {
  return (
    <div className=' w-full bg-black'>
      <Header />
      {/* <Sidebar setLoggedIn={setLoggedIn} /> */}
      <AllRoutes />
      <Footer />
    </div>
  );
};

export default HomeScreen;
