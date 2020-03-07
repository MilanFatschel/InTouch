import React from "react";

import { StyleSheet, Button, View, Text, TextInput } from "react-native";

export default class UsernameScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
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
          <Text>Choose your username</Text>
          <Text>USERNAME</Text>
          <TextInput
            placeholder="Username"
            blurOnSubmit={true}
            value={this.state.username}
            onChangeText={username => {
              this.setState({ username });
            }}>
          </TextInput>
        </View>
        <Button
          title="Continue"
          onPress={() => this.props.navigation.navigate('Password',
            {
              firstName: this.props.navigation.state.params.firstName,
              lastName: this.props.navigation.state.params.lastName,
              username: this.state.username
            })}
        />
      </View>
    );
  }
}