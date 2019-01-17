
import React, {Component} from 'react';
import {Platform, Text, View, Button} from 'react-native';

//custom components
import { Navigation } from 'react-native-navigation';
import { Header } from 'react-native-elements';

//custom components
import {Search, Logo, ExpandAll} from "../components/HeaderComponents/HeaderComponents";//Header
import {screens} from "../styles/screensStyle";
import {allDeals} from "../components/AllDealsComponent/alldealsComponent";

export default class Setting extends Component {
  constructor(props) {
    super(props);
      this.state = {
        name: "Favourite"
      }
    }
  render() {
    return (
     
      <View style={screens.container}>
       <Header
            leftComponent={<Search />}
            centerComponent={<Logo name={this.state.name}/>}
            rightComponent={<ExpandAll />}
            containerStyle={screens.topbar}
        />
         {/* <View>
          <allDeals></allDeals>
        </View>  */}
      </View>
    );
  }
}
