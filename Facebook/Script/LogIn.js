import React , {Component} from 'react'
import {SafeAreaView,View,Text,Image,StyleSheet,AppRegistry,TouchableOpacity,TextInput,TextInputAndroidProperties} from 'react-native'
import {StackNavigator,NavigationActions} from 'react-navigation'
export default class LogIn extends Component{
    static navigationOptions = {
        header : null
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
            <TextInput placeholder = 'Email address or Phone number' style = {MyStyles.inputText} underlineColorAndroid={'transparent'} />
            <TextInput placeholder = 'Password'style = {MyStyles.inputText}underlineColorAndroid={'transparent'} secureTextEntry = {true}/>
            <TouchableOpacity onPress = {() => console.log('Login')}
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