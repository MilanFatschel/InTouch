import React from "react";

import { StyleSheet, ScrollView, View } from "react-native";
import { Message } from "./Message";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_exports from "./../../../aws-exports";
import * as queries from '../../../src/graphql/queries'
import * as subscriptions from '../../../src/graphql/subscriptions'
Amplify.configure(aws_exports);

export class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  async componentDidMount() {

    const params = {
      filter : {
        chatID: {eq : this.props.currentChatDetails.ID }
      }
    }

    const messagesFromServer = await API.graphql(graphqlOperation(queries.listMessages, params));
    this.setState({ messages: messagesFromServer.data.listMessages.items });
    this.createMessageListener();
  }

  createMessageListener() {
    
    const params = {
      chatID: this.props.currentChatDetails.ID
    }

    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage, params)
    ).subscribe({
      next: (event) => {
        this.onRecievedNewMessage(event.value.data.onCreateMessage);
      }
    });
  }

  onRecievedNewMessage(newMessage) {
    this.state.messages.push(newMessage);
    this.setState({messages: this.state.messages});
    this.refs.scrollViewer.scrollToEnd({animated:true});
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        height: "70%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#F5F5F5"
      }
    });

    const data = this.state.messages.map(item => (
      <Message message={item}> </Message>
    ));

    return (
      <ScrollView 
      style={styles.container}
      ref = 'scrollViewer'>
        <View>{data}</View>
      </ScrollView>
    );
  }
}
