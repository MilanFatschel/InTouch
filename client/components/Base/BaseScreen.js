import React from "react";

import { ChatRoom } from "./../GroupChat/ChatRoom";

export class BaseScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount() {

    }

    render() {
    
      return (
        <ChatRoom navigation={this.props.navigation}></ChatRoom>
      );
    }
}