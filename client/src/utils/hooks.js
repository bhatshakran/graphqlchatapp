import React from 'react';

const LoggedInContext = React.createContext();

const useLoggedContext = () => React.useContext(LoggedInContext);

const LoggedStateProvider = ({ value, children }) => {
  const [loggedIn, setLoggedIn] = React.useState(
    localStorage.getItem('jwt') ? true : false
  );

  const val = { loggedIn, setLoggedIn };

  return (
    <LoggedInContext.Provider value={val}>{children}</LoggedInContext.Provider>
  );
};

export { LoggedStateProvider, useLoggedContext };
