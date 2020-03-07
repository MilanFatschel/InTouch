import React from "react";

import { StyleSheet, Button, View, Text, TextInput } from "react-native";

export default class EmailScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
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
          <Text>What's your email?</Text>
          <Text>Email</Text>
          <TextInput
            placeholder="Email"
            blurOnSubmit={true}
            value={this.state.email}
            onChangeText={email => {
              this.setState({ email });
            }}>
          </TextInput>
        </View>
        <Button
          title="Continue"
          onPress={() => this.props.navigation.navigate('PhoneNumber',
            {
              firstName: this.props.navigation.state.params.firstName,
              lastName: this.props.navigation.state.params.lastName,
              username: this.props.navigation.state.params.username,
              password: this.props.navigation.state.params.password,
              email: this.state.email
            }
          )}
        />
      </View>
    );
  }
}