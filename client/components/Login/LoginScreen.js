import React from "react";

import { StyleSheet, Text, View, Button } from "react-native";
import { TextField } from 'react-native-material-textfield';
import { Auth } from 'aws-amplify';

export default class LoginScreen extends React.Component {

  // Constants
  minUsernameLength = 1;
  minPasswordLength = 1;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorText: '',
      isLoginError: false,
      isUsernameValidated: false,
      isPasswordValidated: false
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
      .catch(err => this.setState({errorText: err.message, isLoginError: true}));
  }

  handleOnUsernameTextChange(value) {
    this.validateUsername(value)
  }

  handleOnPasswordTextChange(value) {
    this.validatePassword(value)
  }

  isFormValidated() {
    return this.state.isUsernameValidated && this.state.isPasswordValidated;
  }

  validateUsername(username) {
    if (username.length < this.minUsernameLength) {
      this.state.isUsernameValidated = false;
    }
    else {
      this.state.isUsernameValidated = true;
    }
  }

  validatePassword(password) {
    if (password.length < this.minPasswordLength) {
      this.state.isPasswordValidated = false;
    }
    else {
      this.state.isPasswordValidated = true;
    }
  }

  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      contentContainer: {
        height: '60%',
        width: '50%'
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      errorText: {
        color: 'red'
      }
    });
    const isLoginError = this.state.isLoginError;
    let errorTextPlaceHolder;
    if (isLoginError) {
      errorTextPlaceHolder= <Text style={styles.errorText}>{this.state.errorText}</Text>
    }
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Log in</Text>
        <View style={styles.contentContainer}>
          <TextField
            label='Username'
            value={this.state.username}
            onChangeText={value => {
              this.setState({ username: value }, this.handleOnUsernameTextChange(value));
            }} />
          <TextField
            label='Password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={value => {
              this.setState({ password: value }, this.handleOnPasswordTextChange(value));
            }} />
          {errorTextPlaceHolder}
          <Button
            title="Sign In"
            disabled={!this.isFormValidated()}
            onPress={this.signIn.bind(this)}
          />
        </View>
      </View>
    );
  }
}