import React from "react";

import { StyleSheet, Text, View, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native-gesture-handler";



export class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const styles= StyleSheet.create({
      headerContainer: {
        height: "13%",
        width: "100%",
        backgroundColor: "#E8E8E8",
        flexDirection: "row",
        fontSize: 30,
        alignItems: "center",
        justifyContent: "space-evenly",
      },
      titleText: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        alignContent: "center"
      },
    });

    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
        onPress={() => this.props.navigation.goBack(null)}>
          <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
        </TouchableOpacity>
        <Text style={styles.titleText}>{this.props.title}</Text>
        <TouchableOpacity>
          <Ionicons name="ios-more" size={24} color="#52575D"></Ionicons>
        </TouchableOpacity>
      </View>
    );
  }
}