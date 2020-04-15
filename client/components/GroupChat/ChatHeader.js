import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        profileName: "[Profile or Channel Name Here]" // TODO: Get this through props
    };
  }

  componentDidMount() {
  }

  onSettingsDrawerClicked() {
    this.props.navigation.toggleDrawer();
  }

  render() {
    const styles= StyleSheet.create({
      headerContainer: {
        height: "15%",
        width: "100%",
        backgroundColor: "#E8E8E8",
        textAlign: "center",
        textAlignVertical: "center",
        alignItems: "center",
        padding: 40,
        fontSize: 30
      },
      settingsNavigationIconContainer: {
        position: 'absolute',
        left: 16
      }
    });

    return (
      <View style={styles.headerContainer}>
        <MaterialIcons name = 'menu'
        onPress = {this.onSettingsDrawerClicked}
        />
        <Text>{this.state.profileName}</Text>
      </View>
    );
  }
}