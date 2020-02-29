import React from "react";

import { StyleSheet, ScrollView, View } from "react-native";
import { Message } from "./Message";

export class MessageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageToSend: ""
    };
  }

  componentDidMount() {
    this.props.socket.on("UpdateClientMessageList", msg => {
      console.log(msg);
      this.setState({
        messages: [...this.state.messages, msg]
      });
    });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        height: 400,
        width: 370,
        flexDirection: "column",
        backgroundColor: "#F5F5F5",
      }
    });

    // Map message list to message component
    const messagesToDisplay = this.state.messages.map(message => (
      <Message message={message}> </Message>
    ));

    return (
      <ScrollView style={styles.container}>
        <View>{messagesToDisplay}
        </View>
      </ScrollView>
    );
  }
}
