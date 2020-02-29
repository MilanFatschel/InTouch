import React from "react";

import { StyleSheet, Text, View } from "react-native";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profileName: "The Clown", // TODO: Get this through props
        profileImage: Image, // TODO: Get this through props
    };
  }

  componentDidMount() {
  }

  render() {
    const styles= StyleSheet.create({
      headerContainer: {
        height: 70,
        width: 370,
        backgroundColor: "#E8E8E8",
        textAlign: "center",
        alignItems: "center",
        padding: 5
      },
      profileImageContainer: {
          width: 45,
          height: 45,
          borderRadius: 27.5,
          overflow: "hidden",
      }
    });

    return (
      <View style={styles.headerContainer}>
        <View style={styles.profileImageContainer}>
          <img src={require("./../../../test_images/lasha.jpg")} 
          width="45" 
          height="45">
          </img>
        </View>
        <Text>{this.state.profileName}</Text>
      </View>
    );
  }
}