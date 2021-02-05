import React, {useContext} from 'react';
import Login from './src/services/Authentication/components/Login';
import BottomNavigators from './src/shared/Navigators/BottomNavigators';
import {
  Context,
  ContextProvider,
} from './src/services/Authentication/context/context';
import Wrapper from './src/shared/GeneralComponents/Wrapper';
import AuthenticationScreen from './src/appscreens/AuthenticationScreen';

function Main() {
  const [state] = useContext(Context);
  const {userLoggedIn} = state;
  //   console.log(state, state.userLoggedIn, userLoggedIn, 'hello');
  // console.log(userLoggedIn);
  if (userLoggedIn) {
    return <BottomNavigators />;
  }
  return <AuthenticationScreen />;
  //   return state.userLoggedIn ? <BottomNavigators /> : <Login />;
}

export default Wrapper(ContextProvider, Main);
