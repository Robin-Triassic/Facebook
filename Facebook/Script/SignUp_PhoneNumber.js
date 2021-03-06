import React, {Component} from 'react';
import {View, 
        Text, 
        SafeAreaView, 
        TextInput, 
        StyleSheet, 
        Dimensions, 
        Button, 
        TouchableOpacity,
        KeyboardAvoidingView,
        Alert} from 'react-native';
import {NavigationActions} from 'react-navigation'
import ModalDropdown from 'react-native-modal-dropdown';
import Data from '../assets/PhoneNumberInput/DropDown/CountryList.json';
import GestureRecognizer,{swipeDirectons} from 'react-native-swipe-gestures'
import SignUp_EmailId from './SignUp_EmailId';


const { width, height } = Dimensions.get('window');
const equalWidth =  (width / 3 );

// const showEmailNavigationAction = NavigationActions.reset({
//     index:1,
//     actions : [NavigationActions.navigate({routeName:'JoinFB'}),NavigationActions.navigate({routeName:'SignUpEmailId'})]
// })

// const showNameNavigationAction = NavigationActions.navigate({
//     routeName : 'SignUp_Name'
// })

const showLoginNavigationAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'LogIn' })],
});



export default class SignUp_PhoneNumber extends Component{

    constructor(props) {
        super(props)
        this.state = {  data : Data, 
                        stateCodeList : [], 
                        selectedCountryNumber : '', 
                        inputedNumber: this.props.navigation.state.params.user.phoneNumber != null ? this.props.navigation.state.params.user.phoneNumber : '', 
                        phoneNumber : '', 
                        isValidPhoneNumber : true, 
                        user:this.props.navigation.state.params.user 
                     }
    }


    getCountryCode = () => {
        var tmpArray = this.state.stateCodeList.slice()
        this.state.data.forEach(element => {
          tmpArray.push(element.code)
        });
        this.setState({stateCodeList : tmpArray})
        this.getSelectedCountryNumber(tmpArray[0])
    }
    
    getSelectedCountryNumber = (value) => {
        this.state.data.forEach(element => {
        if(element.code == value) {
            this.setState({selectedCountryNumber : element.dial_code}) 
        }
        });
    }
    
    _dropdown_3_adjustFrame(style) {
        style.left -= 7;
        return style;
    }

    static navigationOptions = {
        header : null
    }

    didSwipeRight(gestureState){
        this.props.navigation.pop(1)
    }

    componentDidMount(){
        console.log('Phon number page did mount')
        this.getCountryCode()
        console.log(this.state.user)
    }

    render() {     
        const showEmailNavigationAction = NavigationActions.reset({
            index:1,
            actions : [NavigationActions.navigate({routeName:'JoinFB',params:{user:this.state.user}}),NavigationActions.navigate({routeName:'SignUpEmailId',params : {user:this.state.user}})],
        })

        return(
            <SafeAreaView style = {{flex : 1, backgroundColor:'#E9EBEE',}} >
                <KeyboardAvoidingView style = {styles.container} >
                <Text style = { styles.captionLabelProperties }>What's Your Mobile Number?</Text>
                <View style = {styles.inputContainerView}>
                    <ModalDropdown 
                        style     = {styles.countryDropDownBttn}
                        textStyle = {{fontSize : 15}}
                        defaultValue={this.state.stateCodeList[0]}
                        dropdownStyle={styles.dropdownStyle}
                        adjustFrame={style => this._dropdown_3_adjustFrame(style)}
                        options = {this.state.stateCodeList}
                        dropdownTextStyle = {{ textAlign : 'center' }}
                        onSelect = {(index, value) => this.getSelectedCountryNumber(value)}
                    />
                    <Text style = {styles.countryCodeTxt}>{this.state.selectedCountryNumber}</Text>
                    <TextInput style = {this.state.isValidPhoneNumber ? styles.phoneNumberRightFormat : styles.phoneNumberWrongFormat}
                        placeholder = "Enter your mobile number" 
                        returnKeyType = 'next' 
                        value = {this.state.inputedNumber}
                        maxLength = {10}
                        autoCorrect = {false}
                        onChangeText = {(text) => this._onChangeValue(text)}
                        onSubmitEditing = {()=> this._onSubmiting()}
                        underlineColorAndroid = 'transparent'
                        //keyboardType = "phone-pad"
                    />
                </View>
                <Text style = {styles.instructionText}>You'll use this number when you log in and if you ever need to reset your password.</Text>
                {/* <View style = {styles.emailBtn}>
                    <Text style = {styles.emailBtnContents}
                          onPress= {()=> this.props.navigation.dispatch(showEmailNavigationAction)} >Use your email address</Text>
                </View> */}
                <TouchableOpacity onPress = {()=>  this.props.navigation.dispatch(showLoginNavigationAction)} style = {styles.alreadyHaveAccount}> 
                    <Text style = {{ color : 'rgba(66,109,159,0.8)',fontSize : 15,fontWeight :'600'}}> Already have an account? </Text>
                </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }

    _onSubmitPhoneNumber() {
        const showNameNavigationAction1 = NavigationActions.navigate({
            routeName : 'SignUp_Name',
            params : {user:this.state.user}
        })
        const showEmailNavigationAction = NavigationActions.push({
            routeName : 'SignUpEmailId',
            params : {user:this.state.user}
        })
        this.props.navigation.dispatch(showEmailNavigationAction)
    }

    _onSubmiting() {
        console.log("_onSubmiting()")
        let val = this.state.inputedNumber.slice()
        console.log("The entered number is: "+val)
        if(this.validatePhoneNumber(val) == true) {
          this.setState({phoneNumber : val})
          this.setState({isValidPhoneNumber : true})
          this.state.user.phoneNumber = val
          this._onSubmitPhoneNumber()
        }
        else {
          this.setState({isValidPhoneNumber : false})
        }
      }
    
      _onChangeValue(val) {
        console.log("_onChangeValue()")
        this.setState({inputedNumber : val});
        this.setState({isValidPhoneNumber : true})
      }
    
      validatePhoneNumber = (phoneNumber) => {
        var re = /^\d{10}$/;
            return re.test(phoneNumber)
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
        flex : 0.7,
        alignSelf: 'center',
        alignItems : 'center',
    },
    dropdownStyle: {
        flex : 1,
        height: 250,
        borderColor: 'black',
        borderRadius: 3,
        borderWidth :0
    },
    countryCodeTxt : {
        flex :1.5,
        textAlign : 'center',
        alignSelf: 'center',
    },
    phoneNumberRightFormat : {
        borderWidth : 0,
        flex :6,
        padding : 5,
        color : 'blue'
    },
    phoneNumberWrongFormat : {
        borderWidth : 0.5,
        borderColor : 'red',
        flex :6,
        padding : 5,
        color : 'blue'
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
    },
    alreadyHaveAccount : {
        borderTopWidth : 1.8,
        borderTopColor:'rgba(76,87,100,0.2)', 
        width : '100%',
        height : 45,
        position: 'absolute',
        bottom:0,
        backgroundColor : 'transparent',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:6
    }
});
