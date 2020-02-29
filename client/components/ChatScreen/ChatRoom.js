import React from "react";
import io from "socket.io-client";
import { StyleSheet, Text } from "react-native";

import { Header } from "./Header"
import { MessageList } from "./MessageList";
import { MessageEdit } from "./MessageEdit";


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
    });
  }

  render() {
    let messagingEditProps = {
      socket: masterSocket,
      clientId: this.state.clientId
    }
    
    const styles= StyleSheet.create({
      headerContainer: {
        height: 400,
        width: 400,
        backgroundColor: "#F5F5F5",
      }
    });

    return (
      <React.Fragment>
        <Header></Header>
        <MessageList socket={masterSocket}></MessageList>
        <MessageEdit {...messagingEditProps}></MessageEdit>
      </React.Fragment>
    );
  }
}
