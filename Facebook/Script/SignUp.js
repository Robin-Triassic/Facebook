import React , {Component} from 'react'
import {View,
    AppRegistry,
    Text,
    SafeAreaView,
    StyleSheet, 
    TextInput,
    KeyboardAvoidingView,
    Button,
    Alert} from 'react-native'

export default class SignUp extends Component{

    render(){
        return(
            <SafeAreaView style = {{flex:1}}>
                <KeyboardAvoidingView style = {{flex:1,
                                                alignItems : 'center',
                                                justifyContent : 'center',
                                                padding : 20, 
                                                backgroundColor: 'rgb(227,230,234)'}}>
                <SignUpDetails style = {{textAlign : 'center'}}/>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}


class SignUpDetails extends Component{

    _onPressButton() {
        Alert.alert('You tapped the button!')
      }

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }
    render(){
        return(
            <View style = {styles.containerView}>
                <Text style = {styles.HeadingText}>What's your email Address?</Text>
                <TextInput style = {styles.TextFieldView}
                    placeholder="Enter your email address"
                    placeholderTextColor="rgb(211,211,211)"
                    keyboardType='email-address'
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text} >
                </TextInput>
                <Text style = {styles.defaultText}>You'll use this email when you log in and if you ever need to reset to your password.</Text>
                <View style = {styles.buttonContainerView}> 
                    <Button style = {styles.Button}
                        onPress={this._onPressButton}
                        title="Use your mobile number"
                        color="rgb(61,68,82)"    
                    />
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    defaultText : {
        color : 'rgb(61,68,82)',
        textAlign: 'center', 
        width: 320,
        height: 80,
        padding: 20

    },
    linkText :{
        color : 'blue'
    },
    HeadingText: {
        textAlign: 'center',
        color : 'rgb(20,60,155)',
        fontSize : 20,
        width: 300,
        height: 40,
    },
    TextFieldView: {
        backgroundColor : 'white',
        color : 'black',
        fontSize: 20,
        width: 300,
        height: 40,
        textAlign: 'center', 
        borderRadius: 5

    },
    buttonView: {
        color: 'rgb(61,68,82)',
    },
    containerView: {
        alignItems: 'center',
    },
    buttonContainerView : {
        borderColor: 'rgb(180,180,180)',
        borderRadius: 2,
        width: 300,
        height: 40
    }
})