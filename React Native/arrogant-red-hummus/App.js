import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  const fullName = "Al-amin B. ABDUL"; 
  const currentTime = new Date().toLocaleTimeString();
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello WorldWideWeb!</Text>
      <Text>This is a test run on Snack!</Text>
      <Text>By: {fullName}</Text>
      <Text>Time: {currentTime}</Text>
      <Text>Date: {currentDate}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8A9A5B", 
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ECFFDC", 
  }
});


