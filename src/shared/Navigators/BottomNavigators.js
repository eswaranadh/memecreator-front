
import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SearchStackScreen } from "./StackNavigators"
import InProgress from "../GeneralComponents/InProgress"


const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        activeTintColor: "white",
        style: {
          backgroundColor: "#282828"
        }
      }}
    >
      <Tab.Screen
        name="Editor"
        component={InProgress}
        options={{
          tabBarLabel: 'Home',
          // tabBarIcon: ({ color, size }) => (
          // ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          // tabBarIcon: ({ color, size }) => (
          // ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={InProgress}
        options={{
          tabBarLabel: 'Profile',
          // tabBarIcon: ({ color, size }) => (
          // ),
        }}
      />
    </Tab.Navigator>
  );
}

