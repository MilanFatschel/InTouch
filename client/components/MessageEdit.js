import React from "react";

import { TextInput } from "react-native";

export class MessageEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToSend: ""
    };
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  onSubmitMessage() {
    this.props.socket.emit("MessageSentToServer", this.state.messageToSend);
    this.setState({ messageToSend: "" });
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, borderWidth: 2, top: 600 }}
        autoCorrect={false}
        value={this.state.messageToSend}
        onSubmitEditing={() => this.onSubmitMessage()}
        onChangeText={messageToSend => {
          this.setState({ messageToSend });
        }}
      />
    );
  }
}
