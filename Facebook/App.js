import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JoinFacebookScreen from './Script/JoinFacebook'
export default class App extends React.Component {
  render() {
    return (
      <JoinFacebookScreen/>
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
