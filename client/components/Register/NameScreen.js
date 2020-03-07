import React from "react";
import { Auth } from "aws-amplify";

import { StyleSheet, Button, View, Text, TextInput } from "react-native";

export default class NameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: ''
    };
  }

  componentDidMount() {
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
          <Text>What's your name?</Text>
          <Text>First Name</Text>
          <TextInput
            placeholder="First Name"
            blurOnSubmit={true}
            value={this.state.firstName}
            onChangeText={firstName => {
              this.setState({ firstName });
            }}>
          </TextInput>
          <Text>Last Name</Text>
          <TextInput
            placeholder="Last Name"
            blurOnSubmit={true}
            value={this.state.lastName}
            onChangeText={lastName => {
              this.setState({ lastName });
            }}>
          </TextInput>
        </View>
        <Button
          title="Continue"
          onPress={() => this.props.navigation.navigate(
            'Username',
            {
              firstName: this.state.firstName,
              lastName: this.state.lastName
            })}
        />
      </View>
    );
  }
}