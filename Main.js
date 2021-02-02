import React, {useContext} from 'react';
import Login from './src/services/Authentication/components/Login';
import BottomNavigators from './src/shared/Navigators/BottomNavigators';
import {
  Context,
  ContextProvider,
} from './src/services/Authentication/context/context';
import Wrapper from './src/shared/GeneralComponents/Wrapper';

function Main() {
  const [state] = useContext(Context);
  console.log(state);
  if (state.userLoggedIn == true) {
    return <BottomNavigators />;
  }
  return <Login />;
  //   return state.userLoggedIn ? <BottomNavigators /> : <Login />;
}

export default Wrapper(ContextProvider, Main);
