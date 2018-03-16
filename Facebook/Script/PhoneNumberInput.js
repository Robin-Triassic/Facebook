import React, {Component} from 'react';
import {View, 
        Text, 
        SafeAreaView, 
        TextInput, 
        StyleSheet, 
        Dimensions, 
        Button, 
        Alert} from 'react-native';
const { width, height } = Dimensions.get('window');
const equalWidth =  (width / 3 );

export default class PhoneNumberInput extends Component{


    render() {
        return(
            <SafeAreaView style = {styles.container} >
                <Text style = { styles.captionLabelProperties }>What's Your Mobile Number?</Text>
                <View style = {styles.inputContainerView}>
                    <Button 
                        style = {styles.countryDropDownBttn}
                        title = "Dpdn" 
                        onPress = {this._onPressDrpDwnButton.bind(this)}
                    />
                    <Text style = {styles.countryCodeTxt}>+91</Text>
                    <TextInput style = {styles.inputText}
                    placeholder = "Enter your mobile number"
                    />
                </View>
                <Text style = {styles.instructionText}>You'll use this number when you log in and if you ever need to reset your password.</Text>
                <View style = {styles.emailBtn}>
                    <Text style = {styles.emailBtnContents}
                          onPress= {this._onPressEmailConfirmation.bind(this)} >Use your email address</Text>
                </View>
            </SafeAreaView>
        );
    }
    _onPressDrpDwnButton() {
        Alert.alert("Drop Down button has been tapped")
    }
    _onPressEmailConfirmation() {
        Alert.alert("Email address has been tapped")
    }
}



const styles = StyleSheet.create({
    container : {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#E9EBEE',
    },
    captionLabelProperties: {
        color : '#4267B2',
        marginBottom : 10,
        fontWeight : 'bold',
        fontSize : 23,
    },
    inputContainerView : {
        backgroundColor : '#FFFFFF',
        flexDirection: 'row',
        width: '90%',
        height: 50,
        marginTop : 10,
        padding: 10,
        justifyContent: 'flex-start'
    },
    countryDropDownBttn : {
        flex : 1,
        color : 'red',
    },
    countryCodeTxt : {
        flex :1.5,
        textAlign : 'center',
        paddingTop : 6
    },
    inputText : {
        flex :6,
        padding : 5,
    },
    instructionText : {
        width : '90%',
        fontSize : 16,
        textAlign : 'center',
        color : '#4E5665',
        marginTop : 20,
    },
    emailBtn : {
        width : '90%',
        borderWidth : 1,
        marginTop : 40,
        height: 40,
        justifyContent: 'center',
        borderColor : '#BFC1C3'
    },
    emailBtnContents : {
        color : '#4E5665',
        fontSize : 16, 
        textAlign : 'center'
    }
});
