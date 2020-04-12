import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_exports from "./../../../aws-exports";
import * as mutations from '../../../src/graphql/mutations';

Amplify.configure(aws_exports);



export class MessageEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messageToSend: {
        ID: String,
        content: String,
        author: String,
        createdAt: String
      },
      messageInputText: String,
    };
  }

  componentDidMount() {
  }

  async onSubmitMessage() {
    this.state.messageToSend.ID = 'testID';
    this.state.messageToSend.author = this.props.currentUserDetails.username;
    this.state.messageToSend.content = this.state.messageInputText;
    this.state.messageToSend.createdAt = '12345';

    const params = {
      input: this.state.messageToSend
    };

    await API.graphql(graphqlOperation(mutations.createMessage, params));
    this.setState({ messageInputText: "" });
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
          value={this.state.messageInputText}
          onSubmitEditing={() => this.onSubmitMessage()}
          onChangeText={messageInputText => {
            this.setState({ messageInputText });
          }}
        />
      </View>
    );
  }
}
