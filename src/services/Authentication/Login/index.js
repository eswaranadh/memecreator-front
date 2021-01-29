// import React, { useState } from 'react';
// import {
//   Text,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ScrollView,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import FormInput from '../../../shared/GeneralComponents/FormInput';
// import FormButton from '../../../shared/GeneralComponents/FormButton';
// import Logo from '../../../../assets/logo.png';

// const LoginScreen = (props) => {
//   const { navigation } = props
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   return (
//     <LinearGradient
//       useAngle={true}
//       angle={80}
//       angleCenter={{ x: 0.9, y: 1.0 }}
//       colors={['#1D4350', '#A43931']}
//       style={styles.linearcontainer}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <Image source={Logo} style={styles.logo} />
//         <Text style={styles.text}>Meme Creator</Text>
//         <FormInput
//           labelValue={email}
//           onChangeText={(userEmail) => setEmail(userEmail)}
//           placeholderText="Email"
//           iconType="user"
//           keyboardType="email-address"
//           autoCapitalize="none"
//           autoCorrect={false}
//         />

//         <FormInput
//           labelValue={password}
//           onChangeText={(userPassword) => setPassword(userPassword)}
//           placeholderText="Password"
//           iconType="lock"
//           secureTextEntry={true}
//         />

//         <FormButton buttonTitle="Sign In" onPress={() => { navigation.navigate("Categories") }} />

//         <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
//           <Text style={styles.navButtonText}>Forgot Password?</Text>
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
//           <Text style={styles.navButtonText}>
//             Don't have an acount? Create here
//           </Text>
//         </TouchableOpacity>
//       </ScrollView>
//     </LinearGradient>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//     paddingTop: 50,
//   },
//   linearcontainer: {
//     flex: 1,
//   },
//   logo: {
//     height: 150,
//     width: 150,
//     resizeMode: 'cover',
//   },
//   text: {
//     fontFamily: 'Kufam-SemiBoldItalic',
//     fontSize: 28,
//     marginBottom: 10,
//     color: '#fff',
//   },
//   navButton: {
//     marginTop: 15,
//   },
//   forgotButton: {
//     marginVertical: 35,
//   },
//   navButtonText: {
//     fontSize: 18,
//     fontWeight: '500',
//     color: 'lightblue',
//     fontFamily: 'Lato-Regular',
//   },
// });
import React, { Component,useState } from 'react';
import {View ,StyleSheet} from 'react-native';
import FormButton from '../../../shared/GeneralComponents/FormButton';
import FormInput from '../../../shared/GeneralComponents/FormInput';

const LoginScreen = (props) => {
  const { navigation } = props
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

   return (
      <View style={styles.LoginBody}>
        <View style={styles.LoginCard}>
        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          secureTextEntry={true}
        />
        <FormButton buttonTitle="Login In" onPress={() => { navigation.navigate("Categories") }} />    
        <FormButton buttonTitle="Skip" onPress={() => { navigation.navigate("Categories") }} />
        </View>
      </View>
    )
  
}

export default LoginScreen;

const styles = StyleSheet.create({
  LoginBody:{
  backgroundColor:'#41fa57',
  height:'100%',
  width:'100%',
  flex:1,
  alignItems:'center',
  justifyContent:'center',
  },
  LoginCard:{
  backgroundColor:"white",
  height:'70%',
  width:'100%',
  marginTop:'auto',
  marginBottom:0,
  borderTopRightRadius:40,
  borderTopLeftRadius:40,
  alignItems:'center',
  justifyContent:'center',
  },
  Loginbutton:{
    alignItems:'center',
    width:'100%',
  },
  CreateAccButton:{
    alignItems:'center',
    width:'100%'
  },
})
