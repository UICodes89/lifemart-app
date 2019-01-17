import React, {Component} from "react";
import {Text, StyleSheet} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "../../styles/headerStyle";

const search = (<Icon name="search" size={20}/>)

class Search extends Component{
    render(){
        return(
            <Text style={styles.searchIcon}>
                {search}
            </Text>
        )
    }
}

class Logo extends Component{
    render(props){
        return(
            <Text style={styles.header} >
                {this.props.name}
            </Text>
        )
    }
}

class ExpandAll extends Component{
    render(){
        return(
            <Text style={styles.expandall}>
                Expand All
            </Text>
        )
    }
}


module.exports = {
    Search: Search,
    Logo: Logo,
    ExpandAll:ExpandAll
}