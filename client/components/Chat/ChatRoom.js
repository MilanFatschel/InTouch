import React from "react";
import Amplify from "@aws-amplify/core";
import config from "../../../aws-exports";
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./../Message/MessageList"
import { MessageEdit } from "./../Message/MessageEdit"

Amplify.configure(config);

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const styles = StyleSheet.create({
      keyboardAvoidContainer: {
        flex: 1,
        width: "100%",
        height: "100%"
      },
    });

    return (
      <React.Fragment>
        <ChatHeader 
        title={this.props.navigation.state.params.listedChatDetails.title}
        navigation={this.props.navigation.state.params.navigation}>
        </ChatHeader>
        <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior="padding">
          <MessageList 
            currentChatDetails={this.props.navigation.state.params.listedChatDetails}>
          </MessageList>
          <MessageEdit 
          currentUserDetails={this.props.navigation.state.params.currentUserDetails}
          currentChatDetails={this.props.navigation.state.params.listedChatDetails}>
          </MessageEdit>
        </KeyboardAvoidingView>
      </React.Fragment>
    );
  }
}