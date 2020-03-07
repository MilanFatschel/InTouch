import React from "react";

import { Auth } from 'aws-amplify';
import { StyleSheet, Button, View, Text, TextInput } from "react-native";

export default class PhoneNumberScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: ''
    };
  }

  componentDidMount() {
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
      }
    });
    return (
      <View style = {styles.container}>
        <View>
          <Text>What's your phone number?</Text>
          <Text>PHONE NUMBER</Text>
          <TextInput
            placeholder="Phone Number"
            blurOnSubmit={true}
            value={this.state.phoneNumber}
            onChangeText={phoneNumber => {
              this.setState({ phoneNumber });
            }}>
          </TextInput>
        </View>
        <Button
          title="Continue"
          onPress={this.signUp.bind(this)}
        />
      </View>
    );
  }
}