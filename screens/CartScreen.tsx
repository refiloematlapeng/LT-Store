import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text } from '@ui-kitten/components';

import { View } from '../components/Themed';

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title} category='h2'>Sorry, your cart is empty! </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Image source={{uri: 'https://img.freepik.com/free-vector/man-shopping-supermarket_74855-7612.jpg?size=626&ext=jpg'}}
       style={{width: 200, height: 200}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
