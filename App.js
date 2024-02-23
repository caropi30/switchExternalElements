import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from './src/components/Header';
import HomeScreen from './src/container/HomeScreen';
import ProductScreen from './src/container/ProductScreen';
import DetailScreen from './src/container/DetailScreen';
import labels from './src/constants/labels';
import useData from './src/hooks/useData';
import useFont from './src/hooks/useFont';

const { CATEGORIES, HEADER: { TITLE }, } = labels;

const Stack = createNativeStackNavigator();

export default function App() {
    const { fontsLoaded } = useFont();
    if (!fontsLoaded) {
        return <Text>Cargando ...</Text>
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ProductScreen" component={ProductScreen} />
                <Stack.Screen name="DetailScreen" component={DetailScreen} />
            </Stack.Navigator>
        </NavigationContainer>
        // <View style={styles.container}>
        //     {!selectedCategory ?
        //         <HomeScreen title={TITLE} cardOnPress={handleSelectedCategory} data={CATEGORIES} />
        //         :
        //         <ProductScreen title={selectedCategory} goBack={handleCategoryGoBack} data={filteredProductList} cardOnPress={handleProductList} />
        //     }
        // </View>
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
