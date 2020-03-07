import React from "react";

import { StyleSheet, Button, View } from "react-native";

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Button
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('Name')}
        />
      </View>
    );
  }
}