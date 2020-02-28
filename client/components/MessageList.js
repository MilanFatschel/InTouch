import React from "react";

import { StyleSheet, View } from "react-native";
import { Message } from "./../components/Message";

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
        width: 300,
        flex: 1,
        backgroundColor: "#A9A9A9"
      }
    });

    // Map message list to message component
    const messagesToDisplay = this.state.messages.map(message => (
      <Message message={message}> </Message>
    ));

    return <View style={styles.container}>{messagesToDisplay}</View>;
  }
}
