import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import Amplify from "@aws-amplify/core";
import config from "../../../aws-exports";
Amplify.configure(config);

import API, { graphqlOperation } from "@aws-amplify/api";

const listMessages = `
  query {
    listMessage {
      items {
        id
        user
        message
      }
    }
  }
`;

const createMessage = `
  mu
`;

export class GroupChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: ""
    };
  }
}
