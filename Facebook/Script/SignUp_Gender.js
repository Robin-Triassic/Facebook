import React , {Component} from 'react'
import {View,
    AppRegistry,
    Text,
    SafeAreaView,
    StyleSheet, 
    TextInput,
    KeyboardAvoidingView,
    Button,
    Alert, 
    TouchableOpacity,
    Image} from 'react-native'
    import {StackNavigator,NavigationActions} from 'react-navigation'

import firebase from 'firebase'

export default class SignUp_Gender extends Component{

    static navigationOptions = {
        header : null
    }
    constructor(props){
        super(props)
        this.state = {user:this.props.navigation.state.params.user}
    }
    componentDidMount(){

    }
    render(){
        return(
            <SafeAreaView style = {{flex:1}}>
                <KeyboardAvoidingView style = {{flex:1,
                                                alignItems : 'center',
                                                justifyContent : 'center',
                                                padding : 20, 
                                                backgroundColor: 'rgb(227,230,234)'}}>
                <SignUpDetails style = {{textAlign : 'center'}} navigation = {this.props.navigation}/>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }
}


class SignUpDetails extends Component{

    _onPressButton() {
        Alert.alert('You tapped the button!')
      }

    constructor(props){
        super(props)
        this.state = {user:this.props.navigation.state.params.user}
    }
render(){
        return(
            <View style = {styles.containerView}>
                <Text style = {styles.HeadingText}>What's your Gender?</Text>
                <View style = {{flexDirection: 'row', alignItems:'flex-start'}}>
                    <TouchableOpacity 
                        style = {styles.buttonContainer}
                        onPress={()=>{
                            this.state.user.gender = 'female'
                            this.signUpUser()
                        }}>
                        <Image source={require('../Images/female.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.buttonContainer}
                        onPress={()=>{
                            this.state.user.gender = 'male'
                            this.signUpUser()
                            console.log(this.state.user)
                        }}>
                        <Image source={require('../Images/male.png')}/>
                    </TouchableOpacity>
                </View> 
                <Text style = {styles.defaultText}>
                    You can change this later in your settings.
                </Text>
            </View>
        )
    }
    navigateToLogin(){
        const showLoginNavigationAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'LogIn' })],
        });
        this.props.navigation.dispatch(showLoginNavigationAction)
    }
    signUpUser(){
        var user = this.state.user
        firebase.auth().createUserWithEmailAndPassword(user.emailId,user.password).then((response)=>{
            console.log('logged User Details',firebase.auth().currentUser)
            this.saveUserDetailsToDB()
            firebase.auth().currentUser.sendEmailVerification().then(()=>{
                Alert.alert('Completed..','Please Verify email address and login',
            [
                {text:'Ok',onPress:()=>{this.navigateToLogin()}}
            ])
            })
            firebase.auth().currentUser.updateProfile({
                displayName : user.firstName + user.lastName,
                phoneNumber : user.phoneNumber,
                photoURL : 'https://firebasestorage.googleapis.com/v0/b/facebook-48600.appspot.com/o/ProfilePick%2Fmale-placeholder-image.jpeg?alt=media&token=1be316d5-a64e-47dc-ac7f-4fc16c25b3e6'
            }).then(()=>{

            }).catch((error)=>{
                console.log(error)
            })
        }).catch((error)=>{
            console.log(error)
        })
    }
    saveUserDetailsToDB(){
        var currentUser = firebase.auth().currentUser
        var user = this.state.user
        
        firebase.database().ref('profiles/').push().set({
            firstName:user.firstName,
            lastName : user.lastName,
            emailId : user.emailId,
            phoneNumber:user.phoneNumber,
            gender:user.gender,
            password:user.password,
            displayName : user.firstName+user.lastName,
            uId : currentUser.uid
        }).then((response)=>{
            console.log(response)
        }).catch((error)=>{
            console.log(error)
        })


        // firebase.database().ref('user/'+currentUser.uid).set({
        //     firstName:user.firstName,
        //     lastName : user.lastName,
        //     emailId : user.emailId,
        //     phoneNumber:user.phoneNumber,
        //     gender:user.gender,
        //     password:user.password,
        //     displayName : user.firstName+user.lastName,
        // }).then((response)=>{
        //     console.log(response)
        // }).catch((error)=>{
        //     console.log(error)
        // })
    }
    sendVerificationMail(){

    }
}

const styles = StyleSheet.create({
    defaultText : {
        color : 'rgb(61,68,82)',
        textAlign: 'center', 
        width: "50%",
        marginTop: 100

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
    buttonContainer: {
        backgroundColor: 'rgb(227,230,234)',
        width: "50%",
        height: 40, 
        borderRadius: 5,
        borderColor: 'black',
        alignItems: 'center',
        flex:0.5

    },
    buttonView: {
        color: 'rgb(61,68,82)',
    },
    containerView: {
        alignItems: 'center',
        padding: 10,
        flexDirection: 'column'
    },
    buttonContainerView : {
        borderColor: 'rgb(180,180,180)',
        borderRadius: 2,
        width: "50%",
        height: 40
    }
})