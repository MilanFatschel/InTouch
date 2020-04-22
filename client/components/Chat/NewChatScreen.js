import React from "react";

import { StyleSheet, Text, View, Button, TouchableOpacity, SafeAreaView} from "react-native";
import { TextField } from 'react-native-material-textfield';
import { Ionicons } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler";
import { v4 as uuidv4 } from 'uuid';

import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_exports from "./../../../aws-exports";
import * as mutations from '../../../src/graphql/mutations';
import { getProvidesAudioData } from "expo/build/AR";

Amplify.configure(aws_exports);


export class NewChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        chatTitleInputText: '',
        usernameToSendInputText: '',
    };
  }

  componentDidMount() {
  }

  async handleOnCreateChat() {
    
    const newChatID = uuidv4();

    const ownerChatToCreate = {
      ID : uuidv4(),
      chatID: newChatID,
      title: this.state.chatTitleInputText,
      username: this.props.navigation.state.params.currentUserDetails.username,
      createdAt: '[Time Sent Here]',
      lastUpdatedAt: '[Time Updated Here]'
    }

    const clientChatToCreate = {
      ID : uuidv4(),
      chatID: newChatID,
      title: this.state.chatTitleInputText,
      username: this.state.usernameToSendInputText,
      createdAt: '[Time Sent Here]',
      lastUpdatedAt: '[Time Updated Here]'
    }
    
    const ownerParams = {
      input: ownerChatToCreate
    };

    const clientParams = {
      input: clientChatToCreate
    };

    await API.graphql(graphqlOperation(mutations.createChat, ownerParams));
    await API.graphql(graphqlOperation(mutations.createChat, clientParams));
    this.props.navigation.state.params.navigation.goBack(null)
  }

  render() {
    const styles= StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: "#fff",
        },
        contentContainer: {
            height: '60%',
            width: '50%',
            alignSelf: 'center'
          },
        text: {
            fontFamily: "HelveticaNeue",
            color: "#52575D"
        },
        subText : {
            fontSize: 12,
            color: "#AEB5BC",
            textTransform: "uppercase",
            fontWeight: "500"
        },
        image: {
            flex: 1,
            width: 200,
            height: 200,
        },
        titleBar: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 24,
            marginHorizontal: 16
        },
        profileImage: {
            width: 200,
            height: 200,
            borderRadius: 100,
            overflow: "hidden"
        },
        addImage: {
            backgroundColor: "#41444B",
            position: "absolute",
            bottom: 0,
            right: 0,
            height: 60,
            width: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center"
        },
        infoContainer: {
            alignSelf: "center",
            alignItems: "center",
            marginTop: 16,
        },
        profilePlaceHolder: {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#E1E2E6",
            marginTop: 48,
            justifyContent: "center",
            alignItems: "center"
        },
        statsContainer: {
            flexDirection: "row",
            alignSelf: "center",
            marginTop: 32
        },
        statsBox: {
            alignItems: "center",
            flex: 1
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
              <View style ={styles.titleBar}>
                  <TouchableOpacity
                  onPress={() => this.props.navigation.state.params.navigation.goBack(null)}>
                    <Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                  </TouchableOpacity>
                  <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>
              </View>
              <View style={styles.infoContainer}>
                <Text style={[styles.text, { fontWeight: "200", fontSize: 36}]}>
                New Group
                </Text>
              </View>
              <View style={styles.contentContainer}>
                <TextField
                label='Username to group with'
                value={this.state.usernameToSendInputText}
                onChangeText={value => {
                this.setState({ usernameToSendInputText: value });
                }} />
                <TextField
                label='Group Title'
                value={this.state.chatTitleInputText}
                onChangeText={value => {
                  this.setState({ chatTitleInputText: value });
                }} />
                <Button
                  title="Create"
                  onPress={this.handleOnCreateChat.bind(this)}
                />
              </View>
            </ScrollView>
        </SafeAreaView>
    );
  }
}