import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 32) / 2; 

const PRODUCTS = [
  { id: '1', name: 'Palace Jacket', price: 250, image: require('./assets/jacket.webp') },
  { id: '2', name: 'American Jeans', price: 120, image: require('./assets/jeans.webp') },
  { id: '3', name: 'Silk Scarf', price: 80, image: require('./assets/scarf.jpg') },
  { id: '4', name: 'Dior Sweater', price: 150, image: require('./assets/sweater.webp') },
  { id: '5', name: 'Fairrrie M6 Watch', price: 500, image: require('./assets/watch.png') },
  { id: '6', name: 'Dr. Martens Boots', price: 200, image: require('./assets/boots.webp') },
];

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartView, setCartView] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState(null);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
    setConfirmationMessage(`${product.name} added to cart!`);
    setTimeout(() => setConfirmationMessage(null), 3000); 
  };

  const getTotal = () => cart.reduce((sum, item) => sum + item.price, 0);
  const clearCart = () => setCart([]);

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
      <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  const renderCartItem = ({ item, index }) => (
    <View style={styles.cartItem} key={`${item.id}-${index}`}>
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setCartView(!isCartView)}>
          <Ionicons name="menu" size={28} color="#ffffff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{isCartView ? 'Your Cart' : 'Ultegra'}</Text>
      </View>

      {isCartView ? (
        <View style={styles.cartContainer}>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item, idx) => `${item.id}-${idx}`}
            ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty.</Text>}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total: ${getTotal().toFixed(2)}</Text>
          </View>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={[styles.button, styles.checkoutButton]}>
              <Text style={styles.buttonText}>Check Out</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={clearCart}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          data={PRODUCTS}
          renderItem={renderProduct}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      )}

      {confirmationMessage && (
        <View style={styles.confirmationContainer}>
          <Text style={styles.confirmationText}>{confirmationMessage}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343541',
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#40414f',
    borderBottomWidth: 1,
  },
  headerTitle: {
    flex: 1,
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 28,
  },
  listContainer: {
    padding: 8,
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#40414f',
    borderRadius: 12,
    padding: 8,
    width: CARD_WIDTH,
    margin: 8,
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: CARD_WIDTH,
    borderRadius: 8,
    marginBottom: 8,
  },
  productName: {
    color: '#d1d5db',
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
  },
  productPrice: {
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#10a37f',
    paddingVertical: 10,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  cartContainer: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    backgroundColor: '#40414f',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  emptyText: {
    color: '#d1d5db',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 32,
  },
  totalContainer: {
    borderTopWidth: 1,
    borderTopColor: '#40414f',
    paddingVertical: 16,
    alignItems: 'flex-end',
  },
  totalText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  checkoutButton: {
    flex: 1,
    marginRight: 8,
  },
  cancelButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: '#ff4d4f',
  },
  confirmationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    backgroundColor: '#10a37f',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  confirmationText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
