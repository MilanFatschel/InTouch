import React from "react";
import Amplify from "@aws-amplify/core";
import config from "../../../aws-exports";
import { Auth } from 'aws-amplify';
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./../Message/MessageList"
import { MessageEdit } from "./../Message/MessageEdit"

Amplify.configure(config);

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserDetails: Object
    };
    this.getCurrentUserDetails = this.getCurrentUserDetails.bind(this);
  }

  componentDidMount() {
    this.getCurrentUserDetails();
  }

  getCurrentUserDetails() {
    Auth.currentUserInfo({
      bypassCache: false
    })
      .then(user => { this.setState({ currentUserDetails: user }); })
      .catch(err => console.log(err));
  }

  render() {
    const styles = StyleSheet.create({
      keyboardAvoidContainer: {
        flex: 1,
        width: "100%",
        height: "100%"
      }
    });

    return (
      <React.Fragment>
        <ChatHeader navigation={this.props.navigation}></ChatHeader>
        <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior="padding">
          <MessageList></MessageList>
          <MessageEdit currentUserDetails={this.state.currentUserDetails}></MessageEdit>
        </KeyboardAvoidingView>
      </React.Fragment>
    );
  }
}