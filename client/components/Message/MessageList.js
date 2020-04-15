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
    const messagesFromServer = await API.graphql(graphqlOperation(queries.listMessages));
    this.setState({ messages: messagesFromServer.data.listMessages.items });

    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateMessage)
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

    // Map message list to message component
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
