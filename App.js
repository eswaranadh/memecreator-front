// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Header from './components/shared/Header';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/shared/BotttomNavigator';
export default function App() {
  return (
    <NavigationContainer>
       <Header/>
      {/* <NavigationContainer>  */}
     <MyTabs />
     </NavigationContainer>
   
  );
}

