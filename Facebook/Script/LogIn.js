import React , {Component} from 'react'
import {SafeAreaView,View,Text,Image,StyleSheet,AppRegistry,TouchableOpacity,TextInput,TextInputAndroidProperties,Alert} from 'react-native'
import {StackNavigator,NavigationActions} from 'react-navigation'
import firebase from 'firebase'

export default class LogIn extends Component{
    static navigationOptions = {
        header : null
    }
    constructor(props){
    super(props)
        this.state = {userId:'',password:''}
    }
    componentDidMount(){
        var config = {
            apiKey: "AIzaSyD9EYNHJ54FdMyyC42PM2tBxjRVKMlW5N4",
            authDomain: "facebook-48600.firebaseapp.com",
            databaseURL: "https://facebook-48600.firebaseio.com",
            projectId: "facebook-48600",
            storageBucket: "facebook-48600.appspot.com",
            messagingSenderId: "684684211810"
          };
          if (!firebase.app.length){
            firebase.initializeApp(config);
            console.log(firebase.app)
          }
          else{
              debugger
              console.log(firebase)
          }
    }
    render(){
        
        const showInitialFBNavigationAction = NavigationActions.reset({
            index : 0,
            actions : [NavigationActions.navigate({routeName:'JoinFB'})]
        })
        const {navigate} = this.props.navigation
        return(
            <SafeAreaView style = {{flex:1}}>
            <View style = {{flex : 1,backgroundColor:'rgb(232,235,238)'}}>
            <Image source = {require('../Images/loginHeaderImage.png')} style = {MyStyles.headerImage}/>
            <View style ={{flex:1,backgroundColor :'transparent',margin : 30,alignItems : 'center',justifyContent : 'center',alignItems : 'stretch'}}>
            {/* <View style = {{backgroundColor :'white',height : 40}}/>
            <View style = {{flex:1,backgroundColor :'skyblue'}}/> */}
            <TextInput placeholder = 'Email address or Phone number' style = {MyStyles.inputText} underlineColorAndroid={'transparent'} onChangeText = {(text)=>
            this.state.userId = text
            }/>
            <TextInput placeholder = 'Password'style = {MyStyles.inputText}underlineColorAndroid={'transparent'} secureTextEntry = {true} onChangeText = {(text)=>
            this.state.password = text
            }/>
            <TouchableOpacity onPress = {() => this.performLogin()}
             style = {{backgroundColor : 'rgb(66,109,169)',height : 45,alignItems : 'center',justifyContent : 'center',marginTop : 22}}>
                <Text style = {{color : 'rgba(255,255,255,0.4)',fontWeight : 'bold'}}> LOG IN </Text>
            </TouchableOpacity>
            <Text onPress = {()=>console.log('password forgot')} style = {{color:'rgb(66,109,169)',textAlign:'center',paddingTop : 20,fontWeight : 'bold'}}>FORGOTTEN PASSWORD?</Text>

            </View>
            <TouchableOpacity onPress = {()=> this.props.navigation.dispatch(showInitialFBNavigationAction)}
             style = {{backgroundColor : 'rgba(0,161,40,1)',height : 45,alignItems : 'center',justifyContent : 'center',alignSelf :'center',marginBottom : 16}}>
            <Text style = {MyStyles.createNewText}> CREATE NEW FACEBOOK ACCOUNT </Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        )
    }
    performLogin(){
         firebase.auth().signInWithEmailAndPassword(this.state.userId,this.state.password).then((response)=>{
            console.log(response)
            if(!response.emailVerified){
                Alert.alert('Email is not verified')
            }
            else{
                Alert.alert('Valid User : ' + response.email)
            }
        }).catch((error)=>{
            //Alert.alert(error)
            console.log(error)
        })
    }
}

const MyStyles = StyleSheet.create({
    headerImage : {
        width : '100%',
        height : '30%'
    },
    createNewText :{
        color:'white',
        fontWeight : 'bold',
        paddingLeft : 15,
        paddingRight:15,
        paddingTop:5,
        paddingBottom:5
    },
    inputText : {
        alignItems : 'stretch',
        padding:14,
        paddingBottom: 8,
         paddingLeft:0,
        borderBottomWidth : 1,
        borderBottomColor:'rgba(76,87,100,0.2)',
        fontSize : 16,
        fontWeight : '600'
        }
})