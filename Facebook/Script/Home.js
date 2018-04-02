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
  this.addUserListener()
  this.getUserDetails()
}
  static navigationOptions = {
    header : null
  }
  addUserListener(){
    firebase.database().ref('profiles/').on('child_added',(userDetail)=>{
      console.log('added File : ',userDetail)
      var arrayData = this.state.users
      arrayData.push(userDetail.val())
      this.setState({users:arrayData})
    })
  }
getUserDetails(){

  console.log('Getting user Details')

  firebase.database().ref('profiles/').once('value', (userDetails)=> {
    console.log('All USer : ',userDetails)
    var arrayData = []
    userDetails.forEach((fbUser)=>{
      arrayData.push(fbUser.val())
      var childKey = fbUser.key
      var fbUserData = fbUser.val()
      console.log('user data : ',fbUserData)
      var displayName = fbUserData.displayName
      console.log('display Name :',displayName)
    })

     this.setState({users:arrayData,isLoading:false})
    // console.log('name : ',userDetails.val().displayName)
    // for(let fbUser of this.state.users){
    //   console.log('inside loop')
    //   var key = 'rETrYsZb36c6dNqKNPjGg24XDiU2'
    //   console.log(fbUser.key)
    // }


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
   // console.log(item.userId.displayName)
  //   item.map((userData) => {
  //     console.log(userData.displayName);
  // });
      return(
        <View style={{ borderBottomWidth: 0.75, borderBottomColor : 'gray', flex: 1 , paddingLeft : 10} }>
          <Text style = {styles.listItemDisplayStyle}> {item.displayName} - {item.phoneNumber}</Text>
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