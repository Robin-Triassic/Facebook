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
import {NavigationActions} from 'react-navigation'
import GestureRecognizer , {swipeDirections} from 'react-native-swipe-gestures'
import SignUpContainer from './SignUpContainer'

export default class SignUp_EmailId extends Component{
    constructor(render){
        super(render)
        this.state = {user:this.props.navigation.state.params.user}
    }
    static navigationOptions = {
        header : null
    }
    didSwipeRight(gestureState){
        this.props.navigation.pop(1)
    }
    render(){
        console.log('email page render')
        console.log(this.state)
        const config  = {
            velocityThreshold:0.3,
            directionalOffsetThreshold : 10
        }
        return(
                <KeyboardAvoidingView style = {{flex:1,
                                                alignItems : 'center',
                                                justifyContent : 'center',
                                                padding : 20, 
                                                backgroundColor: 'rgb(227,230,234)'}}>
                <SignUpDetails style = {{textAlign : 'center'}} navigation = {this.props.navigation}/>
                </KeyboardAvoidingView>
        )
    }
}


class SignUpDetails extends Component{

    _onPressButton() {
        Alert.alert('You tapped the button!')
      }

    constructor(props) {
        super(props);
        this.state = {user:this.props.navigation.state.params.user}
    }
    render(){

        const showPhoneNumberNavigationAction = NavigationActions.reset({
            index:1,
            actions:[NavigationActions.navigate({routeName:'JoinFB',params:{user:this.state.user}}),NavigationActions.navigate({routeName:'SignUp_PhoneNumber',params:{user:this.state.user}})]                
        })
        
        const navigateToNameScreenAction = NavigationActions.push({
            routeName : 'SignUp_Name',
        })

        return(
            <View style = {styles.containerView}>
                <Text style = {styles.HeadingText}>What's your email Address?</Text>
                <TextInput style = {styles.TextFieldView}
                    placeholder="Enter your email address"
                    placeholderTextColor="rgb(211,211,211)"
                    keyboardType='email-address'
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text} 
                    returnKeyType = 'next'
                    onSubmitEditing = {()=>this.props.navigation.dispatch(navigateToNameScreenAction)}
                    >
                </TextInput>
                <Text style = {styles.defaultText}>You'll use this email when you log in and if you ever need to reset to your password.</Text>
                <View style = {styles.buttonContainerView}> 
                    <Button style = {styles.Button}
                        onPress={()=>this.props.navigation.dispatch(showPhoneNumberNavigationAction)}
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