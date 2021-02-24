import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './src/appscreens/SplashScreen';
import {
  Context,
  ContextProvider,
} from "./src/appcontext/context";
import Wrapper from './src/shared/GeneralComponents/Wrapper';

function App() {

  const theme = {
    ...DefaultTheme,
    roundness: 8,

    colors: {
      ...DefaultTheme.colors,
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Wrapper(ContextProvider, App)
