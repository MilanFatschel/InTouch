import React from "react";
import Amplify from "@aws-amplify/core";
import config from "../../../aws-exports";
import API, { graphqlOperation } from "@aws-amplify/api";

import { ChatHeader } from "./ChatHeader";
import { MessageList} from "./../Message/MessageList"
import { MessageEdit} from "./../Message/MessageEdit"

Amplify.configure(config);

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

export class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <React.Fragment>
        <ChatHeader></ChatHeader>
        <MessageList></MessageList>
        <MessageEdit></MessageEdit>
      </React.Fragment>
    );
  }  
}

