import React , {Component} from 'react'
import {View,
    AppRegistry,
    Text,
    SafeAreaView,
    StyleSheet, 
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Button,
    Alert} from 'react-native'
import {NavigationActions} from 'react-navigation'
import GestureRecognizer , {swipeDirections} from 'react-native-swipe-gestures'
import SignUpContainer from './SignUpContainer'

export default class SignUp_EmailId extends Component{
    constructor(params){
        super(params)
        this.state = { user:this.props.navigation.state.params.user }
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
        const showLoginNavigationAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'LogIn' })],
        });
        return(
            <SafeAreaView style = {{flex :1, backgroundColor:'#E9EBEE',}}>
                <KeyboardAvoidingView style = {{flex:1,
                                                alignItems : 'center',
                                                justifyContent : 'center',
                                                padding : 20, 
                                                backgroundColor: 'rgb(227,230,234)'}}>
                <SignUpDetails style = {{textAlign : 'center'}} navigation = {this.props.navigation}/>
                </KeyboardAvoidingView>
                <TouchableOpacity onPress = {()=>  this.props.navigation.dispatch(showLoginNavigationAction)} style = {{borderTopWidth : 1.8,borderTopColor:'rgba(76,87,100,0.2)', width : '100%',height : 45,marginBottom:0,backgroundColor : 'transparent',alignItems:'center',justifyContent:'center',borderRadius:6}}> 
                    <Text style = {{ color : 'rgba(66,109,159,0.8)',fontSize : 15,fontWeight :'600'}}> Already have an account? </Text>
                </TouchableOpacity>
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
        this.state = { user:this.props.navigation.state.params.user,
                       enteredEmail : this.props.navigation.state.params.user.emailId == null ? '' : this.props.navigation.state.params.user.emailId
                     }
    }
    render(){

        const showPhoneNumberNavigationAction = NavigationActions.reset({
            index:1,
            actions:[NavigationActions.navigate({routeName:'JoinFB',params:{user:this.state.user}}),NavigationActions.navigate({routeName:'SignUp_PhoneNumber',params:{user:this.state.user}})]                
        })
        
        const navigateToNameScreenAction = NavigationActions.push({
            routeName : 'SignUp_Name',
            params : {user:this.state.user}
        })

        return(
            <View style = {styles.containerView}>
                <Text style = {styles.HeadingText}>What's your email Address?</Text>
                <TextInput style = {styles.TextFieldView}
                    placeholder="Enter your email address"
                    placeholderTextColor="rgb(211,211,211)"
                    autoCorrect = {false}
                    autoCapitalize = 'none'
                    keyboardType='email-address'
                    value = {this.state.enteredEmail} 
                    onChangeText={(text) => this.setState({enteredEmail:text})}
                    returnKeyType = 'next'
                    onSubmitEditing = {()=>{
                        if(this.ValidateEmail(this.state.enteredEmail)){
                            this.state.user.emailId = this.state.enteredEmail
                           this.props.navigation.dispatch(navigateToNameScreenAction)
                        }
                        else{
                            Alert.alert('Invalid Mail Id')
                        }
                    }
                    }
                    >
                </TextInput>
                <Text style = {styles.defaultText}>You'll use this email when you log in and if you ever need to reset to your password.</Text>
                {/* <View style = {styles.buttonContainerView}> 
                    <Button style = {styles.Button}
                        onPress={()=>this.props.navigation.dispatch(showPhoneNumberNavigationAction)}
                        title="Use your mobile number"
                        color="rgb(61,68,82)"    
                    />
                </View> */}
                
            </View>
        )
    }
  
    ValidateEmail(mail) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail.match(mailformat)){
            return true
        }
        return (false)
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
        fontSize: 16,
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