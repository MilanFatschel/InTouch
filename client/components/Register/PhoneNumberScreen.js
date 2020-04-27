import React from "react";

import { Auth } from 'aws-amplify';
import { StyleSheet, Button, View, Text } from "react-native";
import { TextField } from 'react-native-material-textfield';

export default class PhoneNumberScreen extends React.Component {

  // constants 
  phoneNumberLength = 10;

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      errorText: '',
      isSignUpError: false,
      isPhoneNumberValidated: false,
      phoneErrorText: ''
    };
  }

  componentDidMount() {
  }

  handleOnPhoneNumberTextChange(value) {
    this.validatePhoneNumber(value)
  }

  isFormValidated() {
    return this.state.isPhoneNumberValidated;
  }

  validatePhoneNumber(phoneNumber) {
    if (phoneNumber.length != this.phoneNumberLength) {
      this.state.isPhoneNumberValidated = false;
    }
    else {
      this.state.isPhoneNumberValidated = true;
    }
  }

  getValidationErrorText(phoneNumber) {
    if(phoneNumber.length == 0) {
      this.state.phoneErrorText = "";
    }
    else if (phoneNumber.length != this.phoneNumberLength) {
      this.state.phoneErrorText = "Your phone number should be 10 digits";
    }
    else {
      this.state.phoneErrorText = ""
    }
    return this.state.phoneErrorText;
  }

  // Send confirmation number though aws
  signUp() {
    Auth.signUp({
      username: this.props.navigation.state.params.username,
      password: this.props.navigation.state.params.password,
      attributes: {
        email: this.props.navigation.state.params.email,
      }
    })
      .then(() => {
        this.props.navigation.navigate('Confirmation',
          {
            firstName: this.props.navigation.state.params.firstName,
            lastName: this.props.navigation.state.params.lastName,
            username: this.props.navigation.state.params.username,
            password: this.props.navigation.state.params.password,
            email: this.props.navigation.state.params.email,
            phoneNumber: this.state.phoneNumber
          })
      })
      .catch(err => this.setState({errorText: err.message, isSignUpError: true}));
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

    const isSignUpError = this.state.isSignUpError;
    let errorTextPlaceHolder;
    if (isSignUpError) {
      errorTextPlaceHolder= <Text style={styles.errorText}>{this.state.errorText}</Text>
    }

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>What's your phone number?</Text>
        <View style={styles.contentContainer}>
          <TextField
            label="Phone Number"
            keyboardType="phone-pad"
            error={this.getValidationErrorText(this.state.phoneNumber)}
            value={this.state.phoneNumber}
            onChangeText={value => {
              this.setState({ phoneNumber: value }, this.handleOnPhoneNumberTextChange(value));
            }} />
          {errorTextPlaceHolder}
          <Button
            disabled={!this.isFormValidated()}
            title="Send Code to Email"
            onPress={this.signUp.bind(this)}
          />
        </View>
      </View>
    );
  }
}