import React, { Component } from 'react';
import { Text, TextInput, SafeAreaView, View, StyleSheet, Alert, FlatList } from 'react-native';
import {NavigationActions} from 'react-navigation'
import firebase from 'firebase'

export default class Home extends Component {

  constructor(props){
    super(props)
    this.state = {users:[{title:''}],name:'Robb',isLoading:true}
  }
componentDidMount(){
  this.getUserDetails()
}
  static navigationOptions = {
    header : null
  }
getUserDetails(){

  console.log('Getting user Details')
  firebase.database().ref('user').on('value', (snapshot)=> {
    console.log(snapshot)
   // this.setState({users:[snapshot],isLoading:false})
    //console.log(JSON.parse(snapshot))
  //console.log(snapshot["rETrYsZb36c6dNqKNPjGg24XDiU2"])
  //var p =JSON.stringify(snapshot);
  //console.log(snapshot[0]["rETrYsZb36c6dNqKNPjGg24XDiU2"])
  });
}
  render() {
  if(this.state.isLoading){
return(
  <SafeAreaView style = {{flex:1}}>
  <Text>Loading</Text>
    </SafeAreaView>
)
  }
  else{
    return(
        <SafeAreaView style = {styles.container}>
          { <FlatList 
                    style = {{flex:1, width:'100%', alignContent: 'flex-start'}}
                    data = {this.state.users}
                    renderItem = {({item , index}) => this._renderItem(item )}
                    keyExtractor = {(item, index) => index.toString()}
          /> }
        </SafeAreaView>
    );
  }
}

  _renderItem(item ){
    console.log('render Item',item)
      return(
        <View style={{ borderBottomWidth: 0.75, borderBottomColor : 'gray', flex: 1 , paddingLeft : 10} }>
          <Text style = {styles.listItemDisplayStyle}> {item.value} - {item.number}</Text>
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