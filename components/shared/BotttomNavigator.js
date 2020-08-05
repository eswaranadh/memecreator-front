// import * as React from 'react';
// import { Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import Home from '../Home';
// import CustomRoom from '../customroom';
// import Favorite from '../favorite';
// import Profile from '../profile';


// const Tab = createMaterialBottomTabNavigator();

//  export default function MyTabs() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       activeColor="#ff6f00"
//       labelStyle={{ fontSize: 12 }}
//       style={{ backgroundColor: "#e91e63" }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color={green}}) => (
//             <MaterialCommunityIcons name="account_circle" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="CustomRoom"
//         component={CustomRoom}
//         options={{
//           tabBarLabel: 'Updates',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="brush" color={color} size={26} />
//             // <Icon name="ios-person" color={color} size={26} />

//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Favorite"
//         component={Favorite}
//         options={{
//           tabBarLabel: 'Favorite',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="bookmark_border" color={color} size={26} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="assignment_ind" color={color} size={26} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomRoom from '../customroom';
import Favorite from '../favorite';
import Profile from '../profile';
import { HomeStackScreen } from "./StackNavigators"

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="CustomRoom"
        component={CustomRoom}
        options={{
          tabBarLabel: 'Updtes',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
       <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

