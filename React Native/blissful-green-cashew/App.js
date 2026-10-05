import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const calculate = (operator) => {
    setError("");
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setError("Please enter valid numbers");
      return;
    }
    let res = 0;
    switch (operator) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        if (n2 === 0) {
          setError("Cannot divide by zero");
          return;
        }
        res = n1 / n2;
        break;
      default:
        setError("Invalid operation");
        return;
    }
    setResult(res);
  };

  const clearInputs = () => {
    setNum1("");
    setNum2("");
    setResult(null);
    setError("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter first number:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 10"
        placeholderTextColor="#aaa"
        value={num1}
        onChangeText={setNum1}
      />
      <Text style={styles.text}>Enter second number:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 20"
        placeholderTextColor="#aaa"
        value={num2}
        onChangeText={setNum2}
      />
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={() => calculate("+")} />
        <Button title="-" onPress={() => calculate("-")} />
        <Button title="*" onPress={() => calculate("*")} />
        <Button title="/" onPress={() => calculate("/")} />
      </View>
      <Button title="Clear" onPress={clearInputs} color="red" />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#202123",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 250,
    marginTop: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#0f0",
  },
  error: {
    color: "red",
    marginTop: 10,
    fontSize: 16,
  },
});
