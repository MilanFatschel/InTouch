import React from "react";

import { StyleSheet, ScrollView, View , Text} from "react-native";
import { ListedChat } from './ListedChat'
import { ChatRoom } from "./ChatRoom";

import Amplify, { API, graphqlOperation } from "aws-amplify";
import aws_exports from "./../../../aws-exports";
import * as queries from '../../../src/graphql/queries'
import * as subscriptions from '../../../src/graphql/subscriptions'
Amplify.configure(aws_exports);

export class ChatList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [
          {ID: '1', title: 'Chat 1'},
          {ID: '2', title: 'Chat 2'},
          {ID: '3', title: 'Chat 3'},
          {ID: '4', title: 'Chat 4'},
          {ID: '5', title: 'Chat 5'},
          {ID: '6', title: 'Chat 6'}
      ]
    };
  }

  async componentDidMount() {
    // const chatsFromServer = await API.graphql(graphqlOperation(queries.listChats));
    // this.setState({ chats: chatsFromServer.data.listChats.items });

    // const subscription = API.graphql(
    //   graphqlOperation(subscriptions.onCreateChat)
    // ).subscribe({
    //   next: (event) => {
    //     this.onRecievedNewMessage(event.value.data.onChat);
    //   }
    // });
  }

  onRecievedNewChat(newChat) {
    this.state.messages.push(newChat);
    this.setState({messages: this.state.chats});
    this.refs.scrollViewer.scrollTop({animated:true});
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        height: "70%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#F5F5F5"
      },
      titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      }
    });

    // Map chat list to chat component
    const data = this.state.chats.map(item => (
      <ListedChat 
      listedChatDetails={item}
      navigation={this.props.navigation}
      ></ListedChat>
    ));

    return (
      <React.Fragment>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Messages</Text>
        </View> 
        <ScrollView 
        style={styles.container}
        ref = 'scrollViewer'>
          <View>{data}</View>
        </ScrollView>
      </React.Fragment>
    );
  }
}