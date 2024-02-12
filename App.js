import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/container/HomeScreen';
import ProductScreen from './src/container/ProductScreen';
import labels from './src/constants/labels';
import useData from './src/hooks/useData';

const { CATEGORIES } = labels; 

export default function App() {
  const {selectedCategory, filteredProductList, handleSelectedCategory,handleProductList,handleCategoryGoBack} = useData();

  return (
    <View style={styles.container}>
      {!selectedCategory ? 
            <HomeScreen title='HOME' cardOnPress={handleSelectedCategory} data={CATEGORIES} />  
            :
            <ProductScreen title={selectedCategory} goBack={handleCategoryGoBack} data={filteredProductList} cardOnPress={handleProductList}/>
      }
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
