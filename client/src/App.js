import React from 'react';
import AuthScreen from './pages/AuthScreen.js';
import HomeScreen from './pages/HomeScreen.js';
import { useLoggedContext } from './utils/hooks';

function App() {
  const { loggedIn } = useLoggedContext();
  return <>{loggedIn ? <HomeScreen /> : <AuthScreen />}</>;
}

export default App;
