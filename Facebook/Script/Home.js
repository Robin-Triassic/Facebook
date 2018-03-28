import React, { Component } from 'react';
import { Text, TextInput, SafeAreaView, View, StyleSheet, Alert, FlatList } from 'react-native';
import {NavigationActions} from 'react-navigation'

export default class Home extends Component {

  constructor(){
    super()
    this.state = { enteredPassword : '', isValidPassword : true, password : ''}
  }

  static navigationOptions = {
    header : null
  }

  render() {

    const array = [{ "name" : "Jaseer" , "number" : "1234567890" },
                   { "name" : "Robin" ,  "number" : "9876543210" },
                   { "name" : "Janish" , "number" : "7418529630" },
                   { "name" : "Visakh" , "number" : "9638527410" },
                  ]

    return(
        <SafeAreaView style = {styles.container}>
          <FlatList 
                    style = {{flex:1, width:'100%', alignContent: 'flex-start'}}
                    data = {array}
                    renderItem = {({item , index}) => this._renderItem(item )}
                    keyExtractor = {(item, index) => index.toString()}
          />
        </SafeAreaView>
    );
  }

  _renderItem(item ){
      return(
        <View style={{ borderBottomWidth: 0.75, borderBottomColor : 'gray', flex: 1 , paddingLeft : 10} }>
          <Text style = {styles.listItemDisplayStyle}> {item.name} - {item.number}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
container : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor:'#E9EBEE',
  },
  listItemDisplayStyle : {
    height : 20,
    marginTop : 20,
    fontSize : 15,
    textAlign : 'justify',
    alignItems : 'flex-start',
    fontWeight : 'bold'
  }
});