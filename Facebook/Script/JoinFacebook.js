import React, { Component } from 'react'
import { View, AppRegistry, Text, SafeAreaView, StyleSheet, Alert, TouchableOpacity, ScrollView, Button} from 'react-native'
import Modal from 'react-native-modal'
import { StackNavigator, NavigationActions } from 'react-navigation'
import Example from './Example'
import firebase from 'firebase'
export default class JoinFaceBookScreen extends React.Component {

    componentWillMount() {
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
          }
        // firebase.auth().createUserWithEmailAndPassword('robin.jr@triassicsolutions.com','123456').then(()=>{
        //     console.log('Created')
        // }).catch((error)=>{
        //     console.log(error)
        // })

        // firebase.auth().signInWithEmailAndPassword('robin.jr@triassicsolutions.com','123456').then((response)=>{
        //     this.updateProfileInfo()
        // }).then((error)=>{
        //     console.log(error)
        // })

    }
    updateProfileInfo(){
        console.log('called')
        var user = firebase.auth().currentUser
        console.log(user)
    }
    static navigationOptions = {
        header: null
    }
    render() {

        const showLoginNavigationAction = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'LogIn' })],
        });

        const { navigate } = this.props.navigation;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgb(232,235,238)' }}>
                    <View style={{ flex: 1, justifyContent: 'center' }} >
                        <JoinFacebookDescription style={{ textAlign: 'center' }} navigation={this.props.navigation} />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.dispatch(showLoginNavigationAction)} style={{ borderTopWidth: 1.8, borderTopColor: 'rgba(76,87,100,0.2)', width: '100%', height: 45, marginBottom: 0, backgroundColor: 'transparent', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                        <Text style={{ color: 'rgba(66,109,159,0.8)', fontSize: 15, fontWeight: '600' }}> Already have an account? </Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }

}

class JoinFacebookDescription extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        isModalVisible: false
    }

    renderModalContent = () => (
        <View style={MyStyles.modalContent}>
            <Text onPress={this.toggleModal}>Terms and Conditions</Text>
            <Text style={{ marginTop: 20, marginBottom: 20 }}>Terms and Conditions are a set of rules and guidelines that a user must agree to in order to use your website or mobile app. It acts as a legal contract between you (the company) who has the website or mobile app and the user who access your website and mobile app.
  
  It’s up to you to set the rules and guidelines that the user must agree to. You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, and where you maintain your legal rights against potential app abusers, and so on.
  
  Terms and Conditions are also known as Terms of Service or Terms of Use.
  
This type of legal agreement can be used for both your website and your mobile app. It’s not required (it’s not recommended actually) to have separate Terms and Conditions agreements: one for your website and one for your mobile app.</Text>
            <Button onPress={this.toggleModal} title='Continue'> </Button>
        </View>
    );

    toggleModal = () => this.setState({ isModalVisible: !this.state.isModalVisible })
    render() {

        const showPhoneNumberInput = NavigationActions.push({
            routeName: 'SignUp_PhoneNumber',
            params : {user:{'test':'test'}}
        });


        return (
            <View style={{ marginLeft: 20, marginRight: 20 }}>
                <Text style={{ fontWeight: '700', fontSize: 24, color: 'rgba(40,108,175,0.8)', padding: 25, textAlign: 'center' }}>Join Facebook</Text>
                <Text style={{ textAlign: 'center' }}>
                    <Text style={MyStyles.defaultText}>By, signing up, you agree to our </Text>
                    <Text style={MyStyles.linkText} onPress={this.toggleModal}>Facebook Terms </Text >
                    <Text style={MyStyles.defaultText}>and that you have read our </Text>
                    <Text style={MyStyles.linkText} onPress={this.privacyPolicy}>Privacy Policy, </Text>
                    <Text style={MyStyles.defaultText}>including our </Text>
                    <Text style={MyStyles.linkText}>Cookies Use. </Text>
                    <Text style={MyStyles.defaultText}>You may receive </Text>
                    <Text style={MyStyles.linkText}>SMS Notification </Text>
                    <Text style={MyStyles.defaultText}>from Facebook and can opt-out any time. </Text>
                </Text>
                <TouchableOpacity onPress={() => this.props.navigation.dispatch(showPhoneNumberInput)} style={{ marginTop: 30, marginLeft: 0, marginRight: 0, height: 45, backgroundColor: 'rgba(47,152,250,1)', alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}> Get Started </Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible === true} >
                    {this.renderModalContent()}
                </Modal>

            </View>
        )
    }
    facebookTerms() {
    }
    privacyPolicy() {

    }
}

const MyStyles = StyleSheet.create({
    defaultText: {
        color: 'rgba(76,87,100,0.8)',
        fontSize: 18,
        lineHeight: 28,
    },
    linkText: {
        color: 'rgba(66,109,159,0.8)',
        fontSize: 18,
        lineHeight: 28,
    },
    modalContent: {
        backgroundColor: "white",
        padding: 22,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        borderColor: "rgba(0, 0, 0, 0.1)"
    }
})