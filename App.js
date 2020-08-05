// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import Header from './components/shared/Header';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './components/shared/BotttomNavigator';
import DataContextProvider from "./context/reducer"
import { initializeAxios } from "./context/shared/APIKit"
export default function App() {
  initializeAxios()
  console.log("hell")
  return (
    <DataContextProvider>
      <NavigationContainer>
        <MyTabs />
     </NavigationContainer>
    </DataContextProvider>
  );
}

