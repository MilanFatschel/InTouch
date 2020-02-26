import React from "react";
import io from "socket.io-client";

import { MessageList } from "./../components/MessageList";
import { MessageEdit } from "./MessageEdit";

const masterSocket = io("http://127.0.0.1:3000");

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <MessageList socket={masterSocket}></MessageList>
        <MessageEdit socket={masterSocket}></MessageEdit>
      </div>
    );
  }
}
