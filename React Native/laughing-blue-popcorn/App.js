import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const App = () => {
  const [imageSource, setImageSource] = useState(require('./assets/apple.jpg')); 

  const images = {
    APPLE: require('./assets/apple.jpg'),    //source/name of image
    BANANA: require('./assets/banana.png'),
    MELON: require('./assets/melon.png'),
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Choose Your Hero</Text>
    <Image source={imageSource} style={styles.image} />
    {Object.keys(images).map((fruit) => (
    <Button key={fruit} title={fruit} onPress={() => setImageSource(images[fruit])} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({  //image allign
  container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: "#900C3F",
  },
   title: {
  fontSize: 24,
   fontWeight: "bold",
    marginBottom: 20,
    color: "#000000",
  },
  image: {           //sizer 
    width: 300,
    height: 300,
    marginBottom: 20,
  },
});

export default App;
