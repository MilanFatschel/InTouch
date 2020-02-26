import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ChatRoom } from "./client/components/ChatRoom";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatRoom></ChatRoom>
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
