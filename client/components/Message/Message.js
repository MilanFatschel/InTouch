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
        // backgroundColor: "#1E90FF", //Blue Messsage Box
        // borderTopRightRadius: 14, 
        // borderTopLeftRadius: 14,
        // borderBottomLeftRadius: 14,
        // borderBottomRightRadius: 14,
        // padding: 8,
        backgroundColor: "#F5F5F5", // No box
        color: "#000000",
        fontSize: 16,
        width: "85%"
      },
      messageContainer: {
        flexDirection:"row",
        padding: 7,
        borderRadius: 14
      },
      messageSenderIconContainer: {
        height: "50%",
        width: "20%",
      },
      messageContentContainer: {
        width: "80%"
      },
      nameSenderContainer: {
        fontSize: 10
      }
    });

    return (
      <View style={styles.messageContainer}>
        <Text style={styles.messageSenderIconContainer}>[ICON]</Text>
        <View style={styles.messageContentContainer}>
          <Text style={styles.nameSenderContainer}>
            [Sender Name]
          </Text>
          <Text style={styles.messageText}>
            {this.props.message.text}
          </Text>
        </View>
      </View>
    );
  }
}
