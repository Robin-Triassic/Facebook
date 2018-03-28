import React from 'react';
import { StyleSheet, Text, View ,Component} from 'react-native';
import JoinFacebookScreen from './Script/JoinFacebook'
import {StackNavigator} from 'react-navigation'
import SignUp1 from './Script/SignUp1'
import LogIn from './Script/LogIn'
import SignUp_PhoneNumber from './Script/SignUp_PhoneNumber'
import SignUp_EmailId from './Script/SignUp_EmailId'
import SignUp_Name from './Script/SignUp_Name'
import SignUp_Gender from './Script/SignUp_Gender'
import SignUp_DOB from './Script/SignUp_DOB'
import SignUp_Password from './Script/SignUp_Password'
import Home from './Script/Home'


export default StackNavigator({
  JoinFB : {screen:JoinFacebookScreen},
  SignUp1 : {screen : SignUp1},
  LogIn : {screen : LogIn},
  SignUp_PhoneNumber : {screen : SignUp_PhoneNumber},
  SignUpEmailId: {screen:SignUp_EmailId},
  SignUp_Name : {screen : SignUp_Name},
  SignUp_Gender : {screen : SignUp_Gender},
  SignUp_DOB : {screen:SignUp_DOB},
  SignUp_Password : {screen:SignUp_Password},
  Home : {screen : Home}
})

// export default class App extends Component{
//   render(){
//     return(
//       <InitialComponent/>
//     )
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});










// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { StackNavigator } from 'react-navigation'; // Version can be specified in package.json

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => this.props.navigation.navigate('Details')}
//         />
//       </View>
//     );
//   }
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }
// }

// const RootStack = StackNavigator(
//   {
//     Home: {
//       screen: HomeScreen,
//     },
//     Details: {
//       screen: DetailsScreen,
//     },
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// export default class App extends React.Component {
//   render() {
//     return <RootStack />;
//   }
// }