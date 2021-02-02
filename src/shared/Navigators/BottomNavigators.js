import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchStackScreen} from './StackNavigators';
import InProgress from '../GeneralComponents/InProgress';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Search"
      tabBarOptions={{
        activeTintColor: 'white',
        style: {
          backgroundColor: '#282828',
        },
      }}>
      <Tab.Screen
        name="Editor"
        component={InProgress}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <Entypo
              name="home"
              size={30}
              style={{marginBottom: -3}}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <EvilIcons
              name="search"
              size={30}
              style={{marginBottom: -3}}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={InProgress}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <FontAwesome
              name="user"
              size={30}
              style={{marginBottom: -3}}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
