import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Login from "../../services/Authentication/Login"
import Categories from "../../services/Templates/components/Categories"
import Splash from '../../appscreens/SplashScreen';

const HomeStack = createStackNavigator()

export function SearchStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={{
      cardStyle: {
        backgroundColor: "#121212"
      },
      headerStyle: {
        backgroundColor: "#282828"
      },
      headerTitleStyle: {
        color: 'white'
      }
    }} initialRouteName="Login" >
      <HomeStack.Screen name="Login" component={Login} />
      <HomeStack.Screen name="Categories" component={Categories} />
    </HomeStack.Navigator>
  )
}

