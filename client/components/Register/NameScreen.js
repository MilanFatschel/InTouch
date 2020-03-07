import React from "react";
import { Auth } from "aws-amplify";

import { StyleSheet, Button, View, Text } from "react-native";
import { TextField } from 'react-native-material-textfield';


export default class NameScreen extends React.Component {

  // Constants
  minNameLength = 1;

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      isFirstNameValidate: false,
      isLastNameValidated: false
    };
  }

  componentDidMount() {
  }

  handleOnFirstNameTextChange(value) {
    this.validateFirstName(value)
  }

  handleOnLastNameTextChange(value) {
    this.validateLastName(value)
  }

  isFormValidated() {
    return this.state.isFirstNameValidated && this.state.isLastNameValidated;
  }

  validateFirstName(name) {
    if (name.length < this.minNameLength) {
      this.state.isFirstNameValidated = false;
    }
    else {
      this.state.isFirstNameValidated = true;
    }
  }

  validateLastName(name) {
    if (name.length < this.minNameLength) {
      this.state.isLastNameValidated = false;
    }
    else {
      this.state.isLastNameValidated = true;
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
        <Text style={styles.titleText}>What's your name?</Text>
        <View style={styles.contentContainer}>
          <TextField
            label='First Name'
            value={this.state.firstName}
            onChangeText={value => {
              this.setState({ firstName: value }, this.handleOnFirstNameTextChange(value));
            }} />
          <TextField
            label='Last Name'
            value={this.state.lastName}
            onChangeText={value => {
              this.setState({ lastName: value }, this.handleOnLastNameTextChange(value));
            }} />
          <Button
            title="Continue"
            disabled={!this.isFormValidated()}
            onPress={() => this.props.navigation.navigate(
              'Username',
              {
                firstName: this.state.firstName,
                lastName: this.state.lastName
              })}
          />
        </View>
      </View>
    );
  }
}