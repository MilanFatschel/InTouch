import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { MessageList } from "./client/components/MessageList";

export default function App() {
  return (
    <View style={styles.container}>
      <MessageList></MessageList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
