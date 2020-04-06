import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    height: "12%",
    width: "100%",
    backgroundColor: "#2a3439",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    padding: 40,
    fontSize: 30
  },
  headerText: {
    color: "#fff"
  }
});

export class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileName: "[Profile or Channel Name Here]" // TODO: Get this through props
    };
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{this.state.profileName}</Text>
      </View>
    );
  }
}
