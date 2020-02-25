import React from "react";
import io from "socket.io-client";

import { Message } from './../components/Message'
import { StyleSheet, TextInput, View } from 'react-native';

export class MessageList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      messageToSend: ''
    }
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  componentDidMount() {
    // Connect new user to server when component is created, 
    // Also check for new messages incoming from server.
    this.socket = io("http://127.0.0.1:3000");
    this.socket.on("UpdateClientMessageList", msg => {
      this.setState({
        messages: [...this.state.messages, msg]
      });
    });
  }

  onSubmitMessage() {
    // TODO: Eventually move this to MessageEdit Component (not made yet)
    this.socket.emit('MessageSentToServer', this.state.messageToSend);
    this.setState({ messageToSend: '' });
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        height: 400,
        flex: 1,
        backgroundColor: '#F5FCFF',
      }
    });

    // Map message list to message component
    const messagesToDisplay = this.state.messages.map(message => (
      <Message messageText={message}> </Message>
    ));

    return (
      <View style={styles.container}>
        {messagesToDisplay}
        <TextInput
          style={{height: 40, borderWidth: 2, top: 600}}
          autoCorrect={false}
          value={this.state.messageToSend}
          onSubmitEditing={() => this.onSubmitMessage()}
          onChangeText={messageToSend => {
            this.setState({ messageToSend });
          }}
        />
      </View>
    );
  }
}