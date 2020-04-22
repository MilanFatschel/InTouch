import React from "react";

import { StyleSheet, ScrollView, View , Text } from "react-native";
import { ListedChat } from './ListedChat'

import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_exports from "../../../aws-exports";
import * as queries from '../../../src/graphql/queries'
import * as subscriptions from '../../../src/graphql/subscriptions'
Amplify.configure(aws_exports);

export class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: []
    };
  }

  async componentDidMount() {

    const params = {
      filter : {
        username: {eq : this.props.currentUserDetails.username }
      }
    }

    const chatsFromServer = await API.graphql(graphqlOperation(queries.listChats, params));

    this.setState({ chats: chatsFromServer.data.listChats.items });
    this.createChatListener();
  }

  createChatListener() {

    const params = {
      username: this.props.currentUserDetails.username
    }

    const subscription = API.graphql(
      graphqlOperation(subscriptions.onCreateChat, params)
    ).subscribe({
      next: (event) => {
        this.onRecievedNewChat(event.value.data.onCreateChat);
      }})
  }

  onRecievedNewChat(newChat) {
    this.state.chats.push(newChat);
    this.setState({chats: this.state.chats});
    // this.refs.scrollViewer.scrollTop({animated:true});
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        height: "70%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#F5F5F5"
      }
    });

    // Map chat list to chat component
    const data = this.state.chats.map(item => (
      <ListedChat 
      listedChatDetails={item}
      currentUserDetails={this.props.currentUserDetails}
      navigation={this.props.navigation}
      ></ListedChat>
    ));

    return (
      <ScrollView 
      style={styles.container}
       ref = 'scrollViewer'>
        <View>{data}</View>
      </ScrollView>
    );
  }
}