import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import aws_exports from "./../../../aws-exports"; // specify the location of aws-exports.js file on your project
Amplify.configure(aws_exports);

const createMessage = `mutation createMessage($message: String!){
  createMessage(input:{
    message: $message
  }){
    __typename
    id
    message
  }
}`;

export class MessageEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      value: ""
    };
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  async onSubmitMessage() {
    const message = { message: this.state.value };
    await API.graphql(graphqlOperation(createMessage, message));
    this.listNotes();
    this.setState({ value: "" });
  }

  async listNotes() {
    const notes = await API.graphql(graphqlOperation(readNote));
    this.setState({ notes: notes.data.listNotes.items });
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
        fontSize: 18
      }
    });

    return (
      <View style={styles.editMessageContainer}>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter a Message..."
          multiline={true}
          blurOnSubmit={true}
          value={this.state.value}
          onSubmitEditing={() => this.onSubmitMessage()}
          onChangeText={value => {
            this.setState({ value });
          }}
        />
      </View>
    );
  }
}
