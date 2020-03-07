import React from "react";

import { StyleSheet, Button, View, Text, TextInput } from "react-native";
import { Auth } from 'aws-amplify';

export default class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      email: '',
      confirmationCode: ''
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
        <View>
          <Text>A message has been sent to your device, confirm your code</Text>
          <TextInput
            placeholder="Confirmation code"
            blurOnSubmit={true}
            value={this.state.confirmationCode}
            onChangeText={confirmationCode => {
              this.setState({ confirmationCode });
            }}>
          </TextInput>
        </View>
        <Button
          title="Confirm"
          onPress={this.confirmSignUp.bind(this)}
        />
      </View>
    );
  }
}