/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, Button, ScrollView} from 'react-native';
//custom components
import {goAllDealScreen} from "./navigation";
import {AuthWrapperOTP} from "../components/AuthComponents/AuthComponents"
import { welcomeemailauth} from "../styles/screensStyle";

export default class otpScreen extends Component {

  render() {
    return (
      <ScrollView>
        <View style={welcomeemailauth.container}>
          <AuthWrapperOTP />
        </View>
      </ScrollView>
    );
  }
}
