import React from "react";

import { Text } from "react-native";

export class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Text style={{ borderWidth: 2, top: 500 }}>{this.props.messageText}</Text>
    );
  }
}
