import React from "react";

import { StyleSheet, ScrollView, View } from "react-native";
import { Message } from "./Message";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import aws_exports from "./../../../aws-exports"; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);

const readMessage = `query listMessages{
  listMessages{
    items{
      __typename
      id
      message
    }
  }
}`;

export class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  async componentDidMount() {
    const messages = await API.graphql(graphqlOperation(readMessage));
    this.setState({ messages: messages.data.listMessages.items });
  }

  async listMessages() {
    const notes = await API.graphql(graphqlOperation(readMessage));
    this.setState({ messages: messages.data.listMessages.items });
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
      <ScrollView style={styles.container}>
        <View>{data}</View>
      </ScrollView>
    );
  }
}
