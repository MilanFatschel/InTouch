import React from "react";

import { StyleSheet, Button, View, Text } from "react-native";
import { TextField } from 'react-native-material-textfield';

export default class PasswordScreen extends React.Component {

  // Constants
  minPasswordLength = 8;

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isPasswordValidated: false,
      errorText: ''
    };
  }

  componentDidMount() {
  }

  handleOnPasswordTextChange(password) {
    this.validatePassword(password);
  }

  isFormValidated() {
    return this.state.isPasswordValidated
  }

  validatePassword(password) {
    if (password.length < this.minPasswordLength) {
      this.state.isPasswordValidated = false;
    }
    else {
      this.state.isPasswordValidated = true;
    }
  }

  getValidationErrorText(password) {
    if(password.length == 0) {
      this.state.errorText = "";
    }
    else if (password.length < this.minPasswordLength) {
      this.state.errorText = "Password must be at least 8 characters";
    }
    else {
      this.state.errorText = ""
    }
    return this.state.errorText;
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
        <Text style={styles.titleText}>Set a password</Text>
        <View style={styles.contentContainer}>
          <TextField
            label='Password'
            secureTextEntry={true}
            error={this.getValidationErrorText(this.state.password)}
            value={this.state.password}
            onChangeText={value => {
              this.setState({ password: value }, this.handleOnPasswordTextChange(value));
            }} />
          <Button
            title="Continue"
            disabled={!this.isFormValidated()}
            onPress={() => this.props.navigation.navigate(
              'Email',
              {
                firstName: this.props.navigation.state.params.firstName,
                lastName: this.props.navigation.state.params.lastName,
                username: this.props.navigation.state.params.username,
                password: this.state.password
              })}
          />
        </View>
      </View>
    );
  }
}