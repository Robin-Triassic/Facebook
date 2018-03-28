import React,{Component} from 'react';
import {View, Alert, StyleSheet, SafeAreaView, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {NavigationActions} from 'react-navigation'

const showLoginNavigationAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LogIn' })],
});

export default class SignUp_Password extends Component {

  constructor(){
    super()
    this.state = { enteredPassword : '', isValidPassword : true, password : ''}
  }

  static navigationOptions = {
    header : null
  }

  render() {
    return(
        <KeyboardAvoidingView style = {styles.container}>
           <View style = {{flex : 0.5, marginBottom : 165, width : '100%' , flexDirection :'column', justifyContent: 'center', alignItems: 'center',}}>
                <Text style = {styles.captionLabel}>
                Create a Password
                </Text>
                <TextInput
                style = {this.state.isValidPassword ? styles.rightPassword : styles.wrongPassword}
                secureTextEntry = {true}
                placeholder = 'Password'
                autoCorrect = {false}
                autoCapitalize = 'none'
                maxLength = {20}
                onChangeText = {(text) => this._onTextChange(text)}
                onSubmitEditing = {() => this._onSubmit()}
                />
                <Text style = {this.state.isValidPassword ? styles.instructionText : styles.instructionTextOnError}>
                    Enter a combibnation of atleast six numbers, letters and punctuation marks (like ! and &).
                </Text>
             </View>
            <TouchableOpacity onPress = {()=>  this.props.navigation.dispatch(showLoginNavigationAction)} style = {styles.alreadyHaveAccount}> 
                <Text style = {{ color : 'rgba(66,109,159,0.8)',fontSize : 15,fontWeight :'600'}}> Already have an account? </Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
  }

  _onTextChange(val) {
    this.setState({ enteredPassword: val , isValidPassword : true});
  }

  _onSubmit() {

    let val = this.state.enteredPassword.slice()
    if(this._validatePassword(val) == true) {
      alert("Validation Successful")
      this.setState({password : val, isValidPassword : true})
    }
    else if(val == ''){
        this.setState({isValidPassword : true})
    }
    else {
      this.setState({password : '' ,isValidPassword : false})
    }
  }

  _validatePassword(val){
    let regex = /^(?=.*\d+)(?=.*[a-zA-Z])(?=.*[!&])[0-9a-zA-Z!&]{6,20}$/
      return regex.test(val)
  }
}

const styles = StyleSheet.create({
container : {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#E9EBEE',
  },
  captionLabel : {
    color : '#4267B2',
    marginBottom : 22,
    fontWeight : 'bold',
    fontSize : 23,
  },
  rightPassword : {
    borderWidth : 0,
    height : '20%',
    width : '88%',
    backgroundColor : 'white',
    borderRadius : 3,
    fontSize : 18,
    paddingLeft : 20
  },
  wrongPassword : {
    borderWidth : 0.5,
    height : '20%',
    borderColor : 'red',
    width : '90%',
    fontSize : 18,
    borderRadius : 5,
    paddingLeft : 20
  },
  instructionText : {
    width : '90%',
    fontSize : 16,
    textAlign : 'center',
    color : '#4E5665',
    marginTop : 20,
  },
  instructionTextOnError : {
    width : '90%',
    fontSize : 16,
    textAlign : 'center',
    color : 'red',
    marginTop : 18,
  },
  alreadyHaveAccount : {
    borderTopWidth : 1.8,
    borderTopColor:'rgba(76,87,100,0.2)', 
    width : '100%',
    height : 45,
    position: 'absolute',
    bottom:0,
    backgroundColor : 'transparent',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:6
 }
});