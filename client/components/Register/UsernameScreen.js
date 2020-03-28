import React from "react";

import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import { TextField } from 'react-native-material-textfield';

export default class UsernameScreen extends React.Component {

  // Constants
  minUsernameLength = 3;
  maxUsernameLength = 15;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      usernameErrorText: '',
      isUsernameValidated: false,
    };
  }

  componentDidMount() {
  }

  handleOnUsernameTextChange(username) {
    this.validateUsername(username);
  }

  isFormValidated() {
    return this.state.isUsernameValidated
  }

  validateUsername(username) {
    if (username.length < this.minUsernameLength) {
      this.state.isUsernameValidated = false;
    }
    else if (username.length > this.maxUsernameLength) {
      this.state.isUsernameValidated = false;
    }
    else {
      this.state.isUsernameValidated = true;
    }
  }

  getValidationErrorText(username) {
    if (username.length < this.minUsernameLength && username.length != 0) {
      errorText = "Username must be at least 3 characters";
    }
    else if (username.length > this.maxUsernameLength) {
      errorText = "Username must be less than 15 characters"
    }
    else {
      errorText = ""
    }
    return errorText;
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
      }
    });
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Pick a username</Text>
        <View style={styles.contentContainer}>
          <TextField
            label='Username'
            error={this.getValidationErrorText(this.state.username)}
            characterRestriction={this.maxUsernameLength}
            value={this.state.username}
            onChangeText={value => {
              this.setState({ username: value }, this.handleOnUsernameTextChange(value));
            }} />
          <Button
            title="Continue"
            disabled={!this.isFormValidated()}
            onPress={() => this.props.navigation.navigate(
              'Password',
              {
                firstName: this.props.navigation.state.params.firstName,
                lastName: this.props.navigation.state.params.lastName,
                username: this.state.username
              })}
          />
        </View>
      </View>
    );
  }
}