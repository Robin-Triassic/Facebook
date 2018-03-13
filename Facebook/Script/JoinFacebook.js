import React , {Component} from 'react'
import {View,AppRegistry,Text,SafeAreaView,StyleSheet} from 'react-native'

export default class JoinFaceBookScreen extends Component{
    render(){
        return(
            <SafeAreaView style = {{flex:1}}>
                <View style = {{flex:1,alignItems : 'center',justifyContent : 'center',padding : 20}}>
                <JoinFacebookDescription style = {{textAlign : 'center'}}/>
                </View>
            </SafeAreaView>
        )
    }
}


class JoinFacebookDescription extends Component{
    render(){
        return(
            <Text style = {{textAlign : 'center'}}>
                <Text style = {MyStyles.defaultText}>By, signing up, you agree to our </Text>
                <Text style = {MyStyles.linkText}>Facebook Terms </Text >
                <Text style = {MyStyles.defaultText}>and that you have read our </Text>
                <Text style = {MyStyles.linkText}>Privacy Policy, </Text>
                <Text style = {MyStyles.defaultText}>including our </Text>
                <Text style = {MyStyles.linkText}>Cookies Use. </Text>
                <Text style = {MyStyles.defaultText}>You may receive </Text>
                <Text style = {MyStyles.linkText}>SMS Notification </Text>
                <Text style = {MyStyles.defaultText}>from Facebook and can opt-out any time. </Text>
                </Text>
        )
    }
}

const MyStyles = StyleSheet.create({
    defaultText : {
        color : 'black'
    },
    linkText :{
        color : 'blue'
    }
})