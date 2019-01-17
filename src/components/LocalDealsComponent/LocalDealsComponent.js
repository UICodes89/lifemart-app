import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from "react-native";

/**
 * @props
*/
const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

/**
 * @all deals method genrate List
 * @props
 */

const localDeals = props => {
  return (

    // <FlatList
    //   style={styles.listContainer}
    //   data={props.places}
    //   renderItem={(info) => (
    //     <ListItem
    //       placeName={info.item.name}
    //       onItemPressed={() => props.onItemSelected(info.item.key)}
    //     />
    //   )}
    // />
    <View>
      <Text>Local Deal Component</Text>
    </View>
  );
};
/**
 * module exprts
 * @listItem
 * @allDeals
*/

module.exports = {
    localDeals: localDeals,
    listItem:listItem
}