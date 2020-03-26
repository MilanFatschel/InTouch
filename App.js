import React from "react";
import Amplify from "@aws-amplify/core";
import Auth from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import config from "./aws-exports";
Amplify.configure(config);
import { withAuthenticator } from "aws-amplify-react-native";
import { StyleSheet, Text, View } from "react-native";

import RootNavigationStack from "./client/navigators/RootNavigator"

export default class App extends React.Component {

  render() {
    return (
      <RootNavigationStack/>
    );
  }
}
