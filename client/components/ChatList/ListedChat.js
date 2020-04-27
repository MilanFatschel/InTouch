import React from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export class ListedChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onComponentDidMount() {
  }

  render() {
    const styles = StyleSheet.create({
      listedChatTitleText: {
        backgroundColor: "#F5F5F5",
        color: "#000000",
        fontSize: 16,
        width: "85%"
      },
      listedChatContainer: {
        flexDirection: "row",
        height: 75,
        borderBottomWidth: .5
      },
      listedChatIconContainer: {
        height: "50%",
        width: "20%",
      },
      listedChatContentContainer: {
        width: "80%"
      }
    });

    return (
    <TouchableOpacity
    onPress={() => this.props.navigation.navigate('ChatRoom', {
        listedChatDetails: this.props.listedChatDetails,
        currentUserDetails: this.props.currentUserDetails,
        navigation: this.props.navigation
      })}
    >
      <View style={styles.listedChatContainer}>
        <Text style={styles.listedChatIconContainer}>[ICON]</Text>
        <View style={styles.listedChatContentContainer}>
          <Text style={styles.listedChatTitleText}>{this.props.listedChatDetails.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
    );
  }
}