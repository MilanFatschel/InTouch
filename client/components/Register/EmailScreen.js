import React from "react";

import { StyleSheet, Button, View, Text } from "react-native";
import { TextField } from 'react-native-material-textfield';

export default class EmailScreen extends React.Component {

  minEmailLength = 1;

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmailValidated: false
    };
  }

  componentDidMount() {
  }

  handleOnEmailTextChange(value) {
    this.validateEmail(value)
  }

  isFormValidated() {
    return this.state.isEmailValidated;
  }

  validateEmail(email) {
    if (email.length < this.minEmailLength) {
      this.state.isEmailValidated = false;
    }
    else {
      this.state.isEmailValidated = true;
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
        <Text style={styles.titleText}>What's your email?</Text>
        <View style={styles.contentContainer}>
          <TextField
            label='Email'
            value={this.state.email}
            onChangeText={value => {
              this.setState({ email: value }, this.handleOnEmailTextChange(value));
            }} />
          <Button
            title="Continue"
            disabled={!this.isFormValidated()}
            onPress={() => this.props.navigation.navigate(
              'PhoneNumber',
              {
                firstName: this.props.navigation.state.params.firstName,
                lastName: this.props.navigation.state.params.lastName,
                username: this.props.navigation.state.params.username,
                password: this.props.navigation.state.params.password,
                email: this.state.email
              })}
          />
        </View>
      </View>
    );
  }
}