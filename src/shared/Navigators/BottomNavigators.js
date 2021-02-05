import React, {useContext} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchStackScreen} from './StackNavigators';
import InProgress from '../GeneralComponents/InProgress';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {BottomNavigation} from 'react-native-paper';

// const Tab = createBottomTabNavigator();
const HomeRoute = () => <InProgress />;

const SearchRoute = () => <SearchStackScreen />;

const ProfileRoute = () => <InProgress />;

export default function MyTabs() {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'search', title: 'Search', icon: 'image-search-outline'},
    {key: 'profile', title: 'Profile', icon: 'account'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    search: SearchRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: '#000'}}
      shifting={true}
    />

    // <Tab.Navigator
    //   initialRouteName="Search"
    //   tabBarOptions={{
    //     activeTintColor: 'white',
    //     style: {
    //       backgroundColor: '#282828',
    //     },
    //   }}>
    //   <Tab.Screen
    //     name="Editor"
    //     component={InProgress}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({color}) => (
    //         <Entypo
    //           name="home"
    //           size={30}
    //           style={{marginBottom: -3}}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Search"
    //     component={SearchStackScreen}
    //     options={{
    //       tabBarLabel: 'Search',
    //       tabBarIcon: ({color}) => (
    //         <EvilIcons
    //           name="search"
    //           size={30}
    //           style={{marginBottom: -3}}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    //   <Tab.Screen
    //     name="Profile"
    //     component={InProgress}
    //     options={{
    //       tabBarLabel: 'Profile',
    //       tabBarIcon: ({color}) => (
    //         <FontAwesome
    //           name="user"
    //           size={30}
    //           style={{marginBottom: -3}}
    //           color={color}
    //         />
    //       ),
    //     }}
    //   />
    // </Tab.Navigator>
  );
}
