import React from "react";

import { TextInput, StyleSheet, View } from "react-native";

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
    // let socket = io.connect("http://127.0.0.1:3000");
    // socket.on("connect", () => {
    //   this.state.clientId = socket.id;
    // });
  }

  onSubmitMessage() {
    if (this.state.textToSend.length > 0) {
      // this.props.socket.emit("MessageSentToServer", {
      //   text: this.state.textToSend,
      //   clientId: this.state.clientId
      // });
      this.setState({ textToSend: "" });
    }
  }

  render() {
    const styles = StyleSheet.create({
      editMessageContainer: {
        backgroundColor: "#F5F5F5",
        height: 50,
        width: "100%",
        padding: 5
      },
      inputBox: {
        height: 39,
        width: "100%",
        borderWidth: 1,
        borderColor: "#DCDCDC",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        padding: 10,
        fontSize: 18,
      }
    });

    return (
      <View style={styles.editMessageContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter a Message..."
          multiline={true}
          blurOnSubmit={true}
          value={this.state.textToSend}
          onSubmitEditing={() => this.onSubmitMessage()}
          onChangeText={textToSend => {
            this.setState({ textToSend });
          }}/>
      </View>
    );
  }
}
