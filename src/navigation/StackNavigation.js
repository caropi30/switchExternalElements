import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../containers/HomeScreen';
import CategoryScreen from '../containers/CategoryScreen';
import ProductsByCategoryScreen from '../containers/ProductsByCategoryScreen';
import ProductDetailScreen from '../containers/ProductDetailScreen';
import CartScreen from '../containers/CartScreen';
import Header from '../components/Header';

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
    <Stack.Navigator
        screenOptions={{
            gestureEnabled: true,
            header: () => <Header />,
        }}
        initialRouteName="HomeStack"
    >
        <Stack.Screen name="HomeStack" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="ProductsByCategory" component={ProductsByCategoryScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
);

export default StackNavigation;
