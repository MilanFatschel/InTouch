import React from "react";
import io from "socket.io-client";

import { MessageList } from "./../components/MessageList";
import { MessageEdit } from "./../components/MessageEdit";

const masterSocket = io("http://127.0.0.1:3000");

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <MessageList socket={masterSocket}></MessageList>
        <MessageEdit socket={masterSocket}></MessageEdit>
      </React.Fragment>
    );
  }
}
