import React , {Component} from 'react'
import {View,
    AppRegistry,
    Text,
    SafeAreaView,
    StyleSheet, 
    TextInput,
    KeyboardAvoidingView,
    Button,
    Alert} from 'react-native'
import {StackNavigator,NavigationActions} from 'react-navigation'
import SignUp_Password from './SignUp_Password';


export default class SignUp_Name extends Component{
    static navigationOptions = {
        header : null
    }
    constructor(props){
        super(props)
        this.state = {user:this.props.navigation.state.params.user}
        console.log('name constructor')
        console.log(this.props.navigation)
    }
    componentDidMount(){
        console.log('Signup name did mount')
        console.log(this.state.user)
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

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            user:this.props.navigation.state.params.user
        };
    }
    render(){
        const showDOBNavigationAction = NavigationActions.reset({
            index : 0,
            actions : [NavigationActions.navigate({routeName:'SignUp_DOB',params : {user:this.state.user}})]
        })
        const showPasswordNavigationAction = NavigationActions.push({
            routeName : 'SignUp_Password',
            params:{user:this.state.user}
        })
        return(
            <View style = {styles.containerView}>
                <Text style = {styles.HeadingText}>What's your Name?</Text>
                <View style = {{flexDirection: 'row'}}>
                <TextInput style = {styles.TextFieldView}
                    placeholder="First Name"
                    placeholderTextColor="rgb(211,211,211)"
                    onChangeText={(text) => this.setState({firstName: text})}
                    value={this.state.firstName} >
                </TextInput>
                <TextInput style = {styles.TextFieldView}
                    placeholder="Last Name"
                    placeholderTextColor="rgb(211,211,211)"
                    onChangeText={(text) => this.setState({lastName: text})}
                    value={this.state.lastName} 
                    onSubmitEditing = {() => 
                        {
                            this.state.user.firstName = this.state.firstName
                            this.state.user.lastName = this.state.lastName
                            this.props.navigation.dispatch(showPasswordNavigationAction)
                        }
                    }
                    >
                </TextInput>
                </View>
                
                <Text style = {styles.defaultText}>
                    Using your real name makes it easier for friends to recognize you.
                </Text>
                
                
            </View>
        )
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
        fontSize: 20,
        width: 140,
        height: 40,
        textAlign: 'center', 
        borderRadius: 5,
        marginLeft: 5

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