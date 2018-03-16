import React , {Component} from 'react'
import {View,AppRegistry,Text,SafeAreaView,StyleSheet,Alert,TouchableOpacity,ScrollView,Button} from 'react-native'
import Modal from 'react-native-modal'

export default class JoinFaceBookScreen extends Component{
    render(){
        return(
            <SafeAreaView style = {{flex:1}}>
                <View style = {{flex:1,alignItems : 'center',justifyContent : 'center',padding : 20,backgroundColor:'rgb(232,235,238)'}}>
                <View style = {{flex:1,justifyContent : 'center'}} >
                <JoinFacebookDescription style = {{textAlign : 'center'}}/>
                </View>
                <TouchableOpacity onPress = {this.toggleModal} style = {{borderTopWidth : 1,borderTopColor:'grey', marginLeft : 0,marginRight : 0,height : 40,marginBottom:0,backgroundColor : 'transparent',alignItems:'center',justifyContent:'center',borderRadius:6}}> 
                <Text style = {{color:'blue',fontSize : 14,fontWeight : '300'}}> Already have an account? </Text>
                 </TouchableOpacity>

                </View>
            </SafeAreaView>
        )
    }
}

class JoinFacebookDescription extends Component{
    state = {
        isModalVisible : false
    }

    renderModalContent = () => (
        <View style={MyStyles.modalContent}>
        <Text onPress = {this.toggleModal}>Terms and Conditions</Text>
          <Text style = {{marginTop : 20,marginBottom : 20}}>Terms and Conditions are a set of rules and guidelines that a user must agree to in order to use your website or mobile app. It acts as a legal contract between you (the company) who has the website or mobile app and the user who access your website and mobile app.

It’s up to you to set the rules and guidelines that the user must agree to. You can think of your Terms and Conditions agreement as the legal agreement where you maintain your rights to exclude users from your app in the event that they abuse your app, and where you maintain your legal rights against potential app abusers, and so on.

Terms and Conditions are also known as Terms of Service or Terms of Use.

This type of legal agreement can be used for both your website and your mobile app. It’s not required (it’s not recommended actually) to have separate Terms and Conditions agreements: one for your website and one for your mobile app.</Text>
       <Button onPress= {this.toggleModal} title = 'Continue'> </Button>
        </View>
      );
    
    toggleModal = () => this.setState({isModalVisible : !this.state.isModalVisible})
    render(){
        return(
            <View >
            <Text style = {{fontWeight : '200',fontSize : 26,color:'rgba(40,108,175,0.8)',padding :35,textAlign : 'center'}}>Join Facebook</Text>
            <Text style = {{textAlign : 'center'}}>
                <Text style = {MyStyles.defaultText}>By, signing up, you agree to our </Text>
                <Text style = {MyStyles.linkText} onPress = {this.toggleModal}>Facebook Terms </Text >
                <Text style = {MyStyles.defaultText}>and that you have read our </Text>
                <Text style = {MyStyles.linkText} onPress = {this.privacyPolicy}>Privacy Policy, </Text>
                <Text style = {MyStyles.defaultText}>including our </Text>
                <Text style = {MyStyles.linkText}>Cookies Use. </Text>
                <Text style = {MyStyles.defaultText}>You may receive </Text>
                <Text style = {MyStyles.linkText}>SMS Notification </Text>
                <Text style = {MyStyles.defaultText}>from Facebook and can opt-out any time. </Text>
                </Text>
                <TouchableOpacity onPress = {this.toggleModal} style = {{marginTop : 20,marginLeft : 0,marginRight : 0,height : 40,backgroundColor : 'rgba(47,152,250,1)',alignItems:'center',justifyContent:'center',borderRadius:6}}> 
                <Text style = {{color:'white',fontSize : 20,fontWeight : '300'}}> Get Started </Text>
                 </TouchableOpacity>
                
              
              
                <Modal isVisible = {this.state.isModalVisible === true} >
                 {this.renderModalContent()}
                </Modal>

            </View>
        )
    }
    facebookTerms(){
    }
    privacyPolicy(){

    }
}

const MyStyles = StyleSheet.create({
    defaultText : {
        color : 'rgba(76,87,100,0.8)',
        fontSize : 16
    },
    linkText :{
        color : 'rgba(66,109,159,0.8)',
        fontSize : 16
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