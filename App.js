import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/container/HomeScreen';
import ProductScreen from './src/container/ProductScreen';
import labels from './src/constants/labels';
import useData from './src/hooks/useData';
import useFont from './src/hooks/useFont';

const { CATEGORIES,  HEADER: { TITLE }, } = labels; 

export default function App() {
  const {fontsLoaded} = useFont();
  console.log('fontsLoaded', fontsLoaded)
  const {selectedCategory, filteredProductList, handleSelectedCategory,handleProductList,handleCategoryGoBack} = useData();

  if(!fontsLoaded) {
    return <Text>Cargando ...</Text>
  }

  return (
    <View style={styles.container}>
      {!selectedCategory ? 
            <HomeScreen title={TITLE} cardOnPress={handleSelectedCategory} data={CATEGORIES} />  
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
