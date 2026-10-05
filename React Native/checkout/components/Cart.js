import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <View style={styles.cart}>
      <Text style={styles.title}>Your Cart</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text style={styles.text}>{item.name} - ₱{item.price}</Text>
          <TouchableOpacity style={styles.removeButton} onPress={() => removeFromCart(item.id)}>
            <Text style={{ color: "white" }}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text style={styles.total}>Total: ₱{cartItems.reduce((total, item) => total + item.price, 0)}</Text>
      <TouchableOpacity style={styles.checkoutButton} onPress={() => alert("Checkout successful!")}>
        <Text style={{ color: "white" }}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  cart: { padding: 20, backgroundColor: "#1e1e1e" },
  title: { fontSize: 18, color: "#ccc", marginBottom: 10 },
  cartItem: { flexDirection: "row", justifyContent: "space-between", padding: 10, backgroundColor: "#2a2a2a", marginBottom: 10 },
  text: { color: "#ccc" },
  removeButton: { backgroundColor: "#FF3D00", padding: 5, borderRadius: 5 },
  total: { fontSize: 16, color: "#00ff99", marginTop: 20 },
  checkoutButton: { backgroundColor: "#5865F2", padding: 10, borderRadius: 5, marginTop: 10, alignItems: "center" },
});
