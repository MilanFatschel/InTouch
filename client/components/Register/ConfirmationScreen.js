import React from "react";

import { StyleSheet, Button, View, Text } from "react-native";
import { TextField } from 'react-native-material-textfield';
import { Auth } from 'aws-amplify';

export default class Confirmation extends React.Component {

  // Constants 
  minConfirmationCodeLength = 1;

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
      confirmationCode: '',
      isConfirmationCodeValidated: false
    };
  }

  componentDidMount() {
    this.state.firstName = this.props.navigation.state.params.firstName;
    this.state.lastName = this.props.navigation.state.params.lastName;
    this.state.username = this.props.navigation.state.params.username;
    this.state.password = this.props.navigation.state.params.password;
    this.state.email = this.props.navigation.state.params.email;
    this.state.phoneNumber = this.props.navigation.state.params.phoneNumber;
  }



  // Sign up - send initial information to aws
  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.confirmationCode)
      .then(() => {
        console.log('successful confirm sign up!')
        this.props.navigation.navigate('Welcome')
      })
      .catch(err => console.log('error confirming signing up!: ', err));
  }

  handleOnConfirmationCodeTextChange(value) {
    this.validateConfirmationCode(value)
  }

  isFormValidated() {
    return this.state.isConfirmationCodeValidated;
  }

  validateConfirmationCode(confirmationCode) {
    if (confirmationCode.length < this.minConfirmationCodeLength) {
      this.state.isConfirmationCodeValidated = false;
    }
    else {
      this.state.isConfirmationCodeValidated = true;
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
      }
    });
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Enter your confirmation code</Text>
        <View style={styles.contentContainer}>
          <TextField
            label='Confirmation Code'
            keyboardType="phone-pad"
            value={this.state.confirmationCode}
            onChangeText={confirmationCode => {
              this.setState({ confirmationCode }, this.handleOnConfirmationCodeTextChange(confirmationCode));
            }} />
          <Button
            title="Continue"
            disabled={!this.isFormValidated()}
            onPress={this.confirmSignUp.bind(this)}
          />
        </View>
      </View>
    );
  }
}