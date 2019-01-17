
import React, {Component} from 'react';
import {Platform, Text, View, Button} from 'react-native';

//custom components
import { Navigation } from 'react-native-navigation';
import { Header } from 'react-native-elements';

//custom components
import {Search, Logo, ExpandAll} from "../components/HeaderComponents/HeaderComponents";//Header
import {screens} from "../styles/screensStyle";
import {localDeals} from "../components/LocalDealsComponent/LocalDealsComponent";

export default class LocalDeals extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "Local Deals"
      }
    }
  render() {
    return (
      <View>
        <Text>Hello Local Deals Screen</Text>
      </View>
    );
  }
}
