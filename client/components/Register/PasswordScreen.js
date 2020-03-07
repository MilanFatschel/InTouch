import React from "react";

import { StyleSheet, Button, View, Text, TextInput } from "react-native";

export default class PasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
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
        <Text>Set a password</Text>
        <Text>PASSWORD</Text>
        <TextInput
          placeholder="Password"
          blurOnSubmit={true}
          value={this.state.password}
          onChangeText={password => {
            this.setState({ password });
          }}>
        </TextInput>
        <Button
          title="Continue"
          onPress={() => this.props.navigation.navigate('Email',
            {
              firstName: this.props.navigation.state.params.firstName,
              lastName: this.props.navigation.state.params.lastName,
              username: this.props.navigation.state.params.username,
              password: this.state.password
            })}
        />
      </View>
    );
  }
}