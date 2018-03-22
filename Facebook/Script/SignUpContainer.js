import React,{Component} from 'react'
import GestureRecognizer , {swipeControl} from 'react-native-swipe-gestures'
import {AppRegistry,SafeAreaView,View,Text} from 'react-native'

export default class SignUpContainer extends Component{

    constructor(props){
        super(props)
    }
    static navigationOptions = {
        header : null
    }
    didSwipeRight(gestureState){
        console.log('Kittyy')
        this.props.navigation.pop(1)
    }
    componentDidMount(){
        console.log('contaniner did mount')
    }
    render(){
        console.log('Sign up container')
        const config = {
            velocityThreshold : 0.3,
            directionalOffsetThreshold : 10
        }
        return(
            <SafeAreaView style ={{flex:1}}>
            <Text> HI </Text>
            <GestureRecognizer
                config = {config}
                style = {{flex:1}}
                onSwipeRight = {()=>this.didSwipeRight(this.state)}
            >
            <View style = {{flex:1,backgroundColor : 'skyblue'}}/>
            </GestureRecognizer>
            </SafeAreaView>
        )
    }
}