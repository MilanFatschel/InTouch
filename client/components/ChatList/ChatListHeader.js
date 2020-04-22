import React from "react";

import { StyleSheet, Text, View, Image,  TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export class ChatListHeader extends React.Component {
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
        justifyContent: "space-evenly",
        alignItems: "center"
      },
      titleText: {
        fontFamily: "HelveticaNeue",
        color: "#52575D",
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 10,
        alignContent: "center"
      },
      image: {
        flex: 1,
        width: undefined,
        height: undefined,
      },
      profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        overflow: "hidden",
        marginTop: 10,
        marginLeft: 13
      },
    });

    return (
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ProfileScreen', {
            currentUserDetails: this.props.currentUserDetails,
            navigation: this.props.navigation
            })}>
          <View style={styles.profileImage}>
            <Image source = {require("./../../images/default_user_profile.png")} 
            style={styles.image}>
            </Image>
          </View>
        </TouchableOpacity>
        <Text style={styles.titleText}>Messages</Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewChatScreen', {
            currentUserDetails: this.props.currentUserDetails,
            navigation: this.props.navigation
            })}>
          <Ionicons name="ios-add" size={24} color="#52575D"></Ionicons>
        </TouchableOpacity>
      </View>
    );
  }
}