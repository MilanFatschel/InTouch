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
      isPhoneNumberValidated: false
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
    if (phoneNumber.length != this.phoneNumberLength && phoneNumber.length != 0) {
      errorText = "Your phone number should be 10 digits";
    }
    else {
      errorText = ""
    }
    return errorText;
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
        console.log('successful sign up!')
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
      .catch(err => console.log('error signing up!: ', err));
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
          <Button
            disabled={!this.isFormValidated()}
            title="Continue"
            onPress={this.signUp.bind(this)}
          />
        </View>
      </View>
    );
  }
}