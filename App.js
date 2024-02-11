import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/container/HomeScreen';
import ProductScreen from './src/container/ProductScreen';
import labels from './src/constants/labels';
import React from 'react';
import useData from './src/hooks/useData';

const { CATEGORIES } = labels; 

export default function App() {
  const {handleCategory} = useData();

  return (
    <View style={styles.container}>
      <HomeScreen title='HOME' data={CATEGORIES} cardOnPress={handleCategory} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
