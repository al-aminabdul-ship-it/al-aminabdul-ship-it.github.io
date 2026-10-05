import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Item = ({ item, addToCart }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{item.name} - ₱{item.price}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <AntDesign name="shoppingcart" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  item: { backgroundColor: "#2a2a2a", padding: 15, borderRadius: 10, marginBottom: 10, flexDirection: "row", justifyContent: "space-between" },
  text: { color: "#ccc" },
  button: { backgroundColor: "#5865F2", padding: 10, borderRadius: 5 },
});
