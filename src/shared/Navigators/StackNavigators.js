import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../../services/Authentication/components/Login';
// import Categories from "../../services/Templates/components/Categories"
// import CategoryDetails from "../../services/Templates/components/CategoryDetails"
import SearchScreen from '../../appscreens/SearchScreen';
import CategoryHandler from "../../services/Search/components/CategoryHandler"
import MemeTemplates from "../../services/Search/components/MemeTemplates";
import PreviewScreen from "../../appscreens/PreviewScreen"
import EditImageScreen from "../../appscreens/EditImageScreen"

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
      {/* <HomeStack.Screen name="Categories" component={Categories} /> */}
      <HomeStack.Screen name="CategoryHandler" component={CategoryHandler} />
      <HomeStack.Screen name="MemeTemplates" component={MemeTemplates} />
      <HomeStack.Screen name="PreviewScreen" component={PreviewScreen} />
      <HomeStack.Screen name="EditImageScreen" component={EditImageScreen} />
    </HomeStack.Navigator>
  );
}
