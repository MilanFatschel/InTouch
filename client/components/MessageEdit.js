import React from "react";
import io from "socket.io-client";

import { TextInput, StyleSheet } from "react-native";

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
    const styles = StyleSheet.create({
      container: {
        height: 40,
        width: 500,
        borderWidth: 1,
        borderColor: "#DCDCDC",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 10
      }
    });

    return (
      <TextInput
        style={styles.container}
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
