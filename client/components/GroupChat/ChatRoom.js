import React from "react";
import Amplify from "@aws-amplify/core";
import config from "../../../aws-exports";
import API, { graphqlOperation } from "@aws-amplify/api";
import { KeyboardAvoidingView, StyleSheet } from 'react-native';

import { ChatHeader } from "./ChatHeader";
import { MessageList} from "./../Message/MessageList"
import { MessageEdit} from "./../Message/MessageEdit"

Amplify.configure(config);

const listMessages = `
  query {
    listMessage {
      items {
        id
        user
        message
      }
    }
  }
`;

const createMessage = `
  mu
`;

export default class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        <ChatHeader></ChatHeader>
        <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior="padding">
          <MessageList></MessageList>
          <MessageEdit></MessageEdit>
        </KeyboardAvoidingView>
      </React.Fragment>
    );
  }  
}


