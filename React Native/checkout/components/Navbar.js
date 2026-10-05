import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.title}>🏄 Palace Cart</Text>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  navbar: { backgroundColor: "#202225", padding: 15, alignItems: "center" },
  title: { color: "#ccc", fontSize: 24, fontWeight: "bold" },
});
