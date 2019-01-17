import React, {Component} from "react";
import {View, Text, FlatList, Image, TouchableHighlight, TextInput, StyleSheet} from "react-native";
import { Header, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../styles/headerStyle";
import {welcomeemailauth} from "../../styles/screensStyle";
import {gotoOTP, goAllDealScreen} from "../../screens/navigation";

const search = (<Icon name="search" size={20}/>)



class EmailAuth extends Component{
    render(prps){
        return(
            <View style={styles.header} >
                 <Text style={welcomeemailauth.welcome}>Welcome!</Text>
                 <Text style={welcomeemailauth.instructions}>Enter the email assosiated with your Lifecare account.</Text>

                 <View style={welcomeemailauth.inputfieldsContainer}>
                    <TouchableHighlight style={welcomeemailauth.fullWidth}>
                        <TextInput
                            style={welcomeemailauth.input}
                            placeholder="Email Address .."
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={welcomeemailauth.fullWidth} >
                        <Text style={welcomeemailauth.fullWidthButtonText} onPress={gotoOTP}>Next</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={welcomeemailauth.fullWidth}>
                         <Text style={welcomeemailauth.createaccount}>Create an account</Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={welcomeemailauth.fullWidth}>
                        <Text style={welcomeemailauth.needhelp}>Need Help?</Text>
                    </TouchableHighlight>
                 </View>
            </View>
        )
    }
}

class OtpAuth extends Component{
    render(){
        return(
            <View style={styles.header} >
                 <Text style={welcomeemailauth.welcome}>Check E-mail</Text>
                 <Text style={welcomeemailauth.instructions}>
                     A verification code has been sent to
                    lifemart91@gmail.com. {"\n"}Enter the code below to finalize
                    your login.
                 </Text>

                 <View style={welcomeemailauth.inputfieldsContainer}>

                    <TouchableHighlight style={welcomeemailauth.fullWidth}>
                         <Text style={welcomeemailauth.createaccount}>Not the right email? Go back</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={welcomeemailauth.fullWidth}>
                        <TextInput
                            style={welcomeemailauth.input}
                            placeholder="verification code .."
                        />
                    </TouchableHighlight>
                    <TouchableHighlight style={welcomeemailauth.fullWidth} >
                        <Text style={welcomeemailauth.fullWidthButtonText} onPress={goAllDealScreen}>Submit</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={welcomeemailauth.fullWidth}>
                         <Text style={welcomeemailauth.createaccount}>Didn't get the email? Remember to check your spam folder.</Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={welcomeemailauth.fullWidth}>
                        <Text style={welcomeemailauth.needhelp}>Request a new code</Text>
                    </TouchableHighlight>
                    <TouchableHighlight  style={welcomeemailauth.fullWidth}>
                        <Text style={welcomeemailauth.needhelp}>Need help</Text>
                    </TouchableHighlight>
                 </View>
            </View>
        )
    }
}


class BottomMenu extends Component{
    render(prps){
        return(
            <View style={styles.termPrivacy}>
                <View style={styles.bottomLink}>
                    <Text style={styles.flink}>Terms of Use</Text>
                </View>
                <View  style={styles.bottomLink}>
                     <Text style={styles.flink}>Privacy Policy</Text>
                </View>
            </View>    
        )
    }
}

class LifeMartLogo extends Component{
    render(prps){
        return(
           <View style={styles.imageWrapper}>
                <Image
                style={styles.image}
                source={require('../.././assets/images/logo.png')}
                />
           </View>
        )
    }
}


const AuthWrapperEmail = () => {
    return (
       <View style={styles.authwrapper}>
            <LifeMartLogo />
             <EmailAuth />
             <BottomMenu />
       </View>
    );
}


const AuthWrapperOTP = () => {
    return (
       <View style={styles.authwrapper}>
            <LifeMartLogo />
            <OtpAuth />
            <BottomMenu />
       </View>
    );
}



  module.exports = {
    AuthWrapperEmail: AuthWrapperEmail,
    EmailAuth: EmailAuth,
    OtpAuth:OtpAuth,
    AuthWrapperOTP:AuthWrapperOTP
}
