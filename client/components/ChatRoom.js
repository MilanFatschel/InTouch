import React from "react";
import io from "socket.io-client";

import { MessageList } from "./../components/MessageList";
import { MessageEdit } from "./../components/MessageEdit";

const masterSocket = io("http://127.0.0.1:3000");

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientId: ""
    };
  }

  componentDidMount() {
    let socket = io.connect(masterSocket);
    socket.on("connect", () => {
      this.state.clientId = socket.id;
      console.log("Testing::::" + socket.id);
    });
  }

  render() {
    let messagingEditProps = {
      socket: masterSocket,
      clientId: this.state.clientId
    };

    return (
      <React.Fragment>
        <MessageList socket={masterSocket}></MessageList>
        <MessageEdit {...messagingEditProps}></MessageEdit>
      </React.Fragment>
    );
  }
}
