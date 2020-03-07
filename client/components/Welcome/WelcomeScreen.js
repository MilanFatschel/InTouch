import React from "react";

import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements"

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
      ScreenContainer: {
        flex: 1,
        flexDirection: "column-reverse",
        // justifyContent: 'center',
        backgroundColor: '#ADD8E6',
      },
      LoginButtonContainer: {
        width: "100%",
      },
      SignUpButtonContainer: {
        width: "100%",
      },
      CodeConfirmButtonContainer: {
        width: "100%",
      }
    });
    return (
      <View style={styles.ScreenContainer}>
        <Button
          style={styles.SignUpButtonContainer}
          title="Sign Up"
          buttonStyle={{ backgroundColor: '#FF6347' }}
          onPress={() => this.props.navigation.navigate('Name')}
        />
        <Button
          style={styles.LoginButtonContainer}
          title="Login"
          buttonStyle={{ backgroundColor: '#008B8B' }}
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}