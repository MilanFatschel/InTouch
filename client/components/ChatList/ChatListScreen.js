import React from "react";

import {ChatList } from './ChatList'
import { ChatListHeader } from './ChatListHeader'

import Amplify, { API, graphqlOperation } from "aws-amplify";
import { Auth } from 'aws-amplify';
import aws_exports from "../../../aws-exports";
Amplify.configure(aws_exports);

export class ChatListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserDetails: null,
    };
  }

  async componentDidMount() {
      await this.setCurrentUserDetails();
      console.log(this.state.currentUserDetails)
  }

  setCurrentUserDetails() {
    Auth.currentUserInfo({
      bypassCache: false
    })
      .then(user => { this.setState({ currentUserDetails: user });})
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        {this.state.currentUserDetails ? <ChatListHeader
          currentUserDetails={this.state.currentUserDetails}
          navigation={this.props.navigation}>
        </ChatListHeader> : null }
        {this.state.currentUserDetails ? <ChatList
          currentUserDetails={this.state.currentUserDetails}
          navigation={this.props.navigation}>
        </ChatList> : null}
      </React.Fragment>
    );
  }
}