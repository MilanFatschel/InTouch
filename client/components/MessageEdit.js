import React from "react";
import io from "socket.io-client";

import { TextInput } from "react-native";

export class MessageEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textToSend: "",
      clientId: ""
    };
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  componentDidMount() {
    let socket = io.connect("http://127.0.0.1:3000");
    socket.on("connect", () => {
      this.state.clientId = socket.id;
    });
  }

  onSubmitMessage() {
    this.props.socket.emit("MessageSentToServer", {
      text: this.state.textToSend,
      clientId: this.state.clientId
    });
    this.setState({ textToSend: "" });
  }

  render() {
    return (
      <TextInput
        style={{ height: 40, width: 300, borderWidth: 2, top: 600 }}
        placeholder="Enter a Message..."
        multiline={true}
        blurOnSubmit={true}
        value={this.state.textToSend}
        onSubmitEditing={() => this.onSubmitMessage()}
        onChangeText={textToSend => {
          this.setState({ textToSend });
        }}
      />
    );
  }
}
