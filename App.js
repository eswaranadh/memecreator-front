import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';
import Splash from './src/Screens/SplashScreen';

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 8,
    colors: {
      ...DefaultTheme.colors,
      primary: '#280071',
      accent: '#f1c40f',
    },
    dark: true,
  };

  return (
    <PaperProvider theme={theme}>
      <Splash />
    </PaperProvider>
  );
}
