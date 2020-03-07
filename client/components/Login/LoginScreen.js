import React from "react";

import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Auth } from 'aws-amplify';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user: ''
    };
  }

  componentDidMount() {
  }

  // Login - check for username and password in aws
  signIn() {
    Auth.signIn(this.state.username, this.state.password)
      .then(user => {
        this.setState({ user });
        console.log('successful sign in!');
        this.props.navigation.replace('ChatRoom')
      })
      .catch(err => console.log('error signing in!: ', err));
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center'
      }
    });
    return (
      <View style = {styles.container}>
        <Text>Please Login</Text>
        <TextInput
          placeholder="Username"
          blurOnSubmit={true}
          value={this.state.username}
          onChangeText={username => {
            this.setState({ username });
          }}>
        </TextInput>
        <TextInput
          placeholder="Password"
          blurOnSubmit={true}
          value={this.state.password}
          onChangeText={password => {
            this.setState({ password });
          }}>
        </TextInput>
        <Button
          title="Continue"
          onPress={this.signIn.bind(this)}
        />
      </View>
    );
  }
}