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

export default class SignUp_Gender extends Component{

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

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         femaleImage: './assets/images/female.png',
    //         maleImage: './assets/images/male.png'
    //     };
    // }
    render(){
        return(
            <View style = {styles.containerView}>
                <Text style = {styles.HeadingText}>What's your Gender?</Text>
                <View style = {{flexDirection: 'row', alignItems:'flex-start'}}>
                    <TouchableOpacity 
                        style = {styles.buttonContainer}
                        onPress={()=>alert('Clicked Female')}>
                        <Image source={require('../Images/female.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style = {styles.buttonContainer}
                        onPress={()=>alert('Clicked Male')}>
                        <Image source={require('../Images/male.png')}/>
                    </TouchableOpacity>
                </View> 
                <Text style = {styles.defaultText}>
                    You can change this later in your settings.
                </Text>
            </View>
        )
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