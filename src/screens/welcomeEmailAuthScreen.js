
import React, {Component} from 'react';
import {Platform, Text, View, Button, ScrollView, StyleSheet} from 'react-native';
//custom components
import {goHome} from "./navigation";
import {EmailAuth, AuthWrapperEmail} from "../components/AuthComponents/AuthComponents"
import { welcomeemailauth, flexDesign} from "../styles/screensStyle";


export default class welcomeEmailAuthScreen extends Component {

  render() {
    return (
      <View style={welcomeemailauth.container}>
           <ScrollView>
            <View>
              <AuthWrapperEmail />
            </View>
          </ScrollView>
      </View>
    );
  }
}

