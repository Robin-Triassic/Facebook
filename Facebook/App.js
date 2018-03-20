import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JoinFacebookScreen from './Script/JoinFacebook'
import {StackNavigator} from 'react-navigation'
import SignUp1 from './Script/SignUp1'
import LogIn from './Script/LogIn'
export default StackNavigator({
  JoinFB : {screen:JoinFacebookScreen},
  SignUp1 : {screen : SignUp1},
  LogIn : {screen : LogIn}
})

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