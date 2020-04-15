import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

export class ChatHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        padding: 40,
      },
      settingsNavigationIconContainer: {
        position: 'absolute',
        left: 5
      }
    });

    return (
      <View style={styles.headerContainer}>
        <MaterialIcons name = 'menu' 
        size = {28}
        onPress = {this.props.navigation.openDrawer}
        />
        <Text>{this.state.profileName}</Text>
      </View>
    );
  }
}