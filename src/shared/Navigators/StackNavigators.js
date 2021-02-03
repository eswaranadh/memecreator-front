import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from '../../services/Authentication/components/Login';
// import Categories from "../../services/Templates/components/Categories"
// import CategoryDetails from "../../services/Templates/components/CategoryDetails"
import SearchScreen from '../../appscreens/SearchScreen';

const HomeStack = createStackNavigator();

export function SearchStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: '#121212',
        },
        headerStyle: {
          backgroundColor: '#282828',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
      initialRouteName="SearchScreen">
      {/* <HomeStack.Screen name="Login" component={Login} /> */}
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
      {/* <HomeStack.Screen name="Categories" component={Categories} />
      <HomeStack.Screen name="CategoryDetails" component={CategoryDetails} /> */}
    </HomeStack.Navigator>
  );
}
