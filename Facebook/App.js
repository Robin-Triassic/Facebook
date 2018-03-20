import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JoinFacebookScreen from './Script/JoinFacebook'
import Example from './Script/Example'
import SignUp from './Script/SignUp'
import SignUpName from './Script/SignUpName'
import SignUpGender from './Script/signUpGender'

export default class App extends React.Component {
  render() {
    return (
      <SignUpGender/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
