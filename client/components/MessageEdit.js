import React from "react";

import { TextInput } from "react-native";

export class MessageEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messageToSend: ""
    };
    this.textInputMessageEdit = React.createRef();
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  onSubmitMessage() {
    this.props.socket.emit("MessageSentToServer", this.state.messageToSend);
    this.setState({ messageToSend: "" });
    this.refs.textInputMessageEdit.focus();
  }

  render() {
    return (
      <TextInput
        ref = {this.textInputMessageEdit}
        style={{ height: 40, width: 300, borderWidth: 2, top: 600 }}
        placeholder = "Enter a Message..."
        multiline = {true}
        blurOnSubmit = {true}
        value={this.state.messageToSend}
        onSubmitEditing={() => this.onSubmitMessage()}
        onChangeText={messageToSend => {
          this.setState({ messageToSend });
        }}
      />
    );
  }
}
