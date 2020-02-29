import React from "react";

import { View, StyleSheet, Text } from "react-native";

export class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const styles = StyleSheet.create({
      messageText: {
        backgroundColor: "#1E90FF",
        borderTopRightRadius: 14,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
        borderBottomRightRadius: 14,
        padding: "8px",
        color: "#eee",
      },
      messageContainer: {
        padding: "7px"
      }
    });

    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageText}>
          {this.props.message.text} {"\n"}
          Client ID: {this.props.message.clientId}
        </Text>
      </View>
    );
  }
}
