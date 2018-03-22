import React , {Component} from 'react'
import {SafeAreaView,View} from 'react-native'
import {StackNavigator,NavigationActions,TouchableOpacity} from 'react-navigation'

export default class SignUp_DOB extends Component{
render(){
    const showLoginNavigationAction = NavigationActions.reset({
        index:0,
        actions : [NavigationActions.navigate({routeName:'LogIn'})]
    })
    return(
        <SafeAreaView style = {{flex:1}}>
        <View style = {{flex:1,backgroundColor : 'skyblue'}}>
        </View>
        <TouchableOpacity onPress = {()=>  this.props.navigation.dispatch(showLoginNavigationAction)} style = {{borderTopWidth : 1.8,borderTopColor:'rgba(76,87,100,0.2)', width : '100%',height : 45,marginBottom:0,backgroundColor : 'transparent',alignItems:'center',justifyContent:'center',borderRadius:6}}> 
                <Text style = {{ color : 'rgba(66,109,159,0.8)',fontSize : 15,fontWeight :'600'}}> Already have an account? </Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}
}
