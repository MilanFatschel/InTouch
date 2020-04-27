import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    height: "15%",
    width: "100%",
    backgroundColor: "#E8E8E8",
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
    padding: 40,
    fontSize: 30
  }
});

export class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profileName: "[Profile or Channel Name Here]" // TODO: Get this through props
    };
  }

  componentDidMount() {}

  render() {
    return (
      <View style={styles.headerContainer}>
        <Text>{this.state.profileName}</Text>
      </View>
    );
  }
}
