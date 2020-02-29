import React from "react";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import config from "./aws-exports";
Amplify.configure(config);
import { withAuthenticator } from "aws-amplify-react-native";
import { StyleSheet, Text, View } from "react-native";

import { ChatRoom } from "./client/components/ChatScreen/ChatRoom";

class App extends React.Component {
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
  }

  signOut = () => {
    Auth.signOut()
      .then(() => this.props.onStateChange("signedOut"))
      .catch(err => console.log("err: ", err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text onPress={this.signOut}>Sign Out</Text>
        <ChatRoom></ChatRoom>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 28
  }
});

export default withAuthenticator(App, {
  includeGreetings: true
});
