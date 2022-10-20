import { useState } from 'react';
import AuthScreen from './pages/AuthScreen';
import HomeScreen from './pages/HomeScreen.js';

function App() {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem('jwt') ? true : false
  );
  return (
    <>
      {/*  {loggedIn ? ( */}
      <HomeScreen setLoggedIn={setLoggedIn} />
    </>
  );
}

export default App;
