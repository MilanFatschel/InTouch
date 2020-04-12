import React from "react";

import { StyleSheet, ScrollView, View } from "react-native";
import { Message } from "./Message";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_exports from "./../../../aws-exports";
import * as queries from '../../../src/graphql/queries'
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
    console.log(messagesFromServer);
    // this.setState({ messages: messagesFromServer.data.listMessages});
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
