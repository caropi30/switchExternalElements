import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from '../container/CategoryScreen';
import ProductScreen from '../container/ProductScreen';
import DetailScreen from '../container/DetailScreen';
import useFont from '../hooks/useFont';

const Stack = createNativeStackNavigator();

 const StackNavigation = () => {
    const { fontsLoaded } = useFont();
    if (!fontsLoaded) {
        return <Text>Cargando ...</Text>
    }

    return (
        <Stack.Navigator 
            initialRouteName='Category'  
            initiaolRouteName='Home'  
            screenOptions={{
                headerShown: false,
        }}>
                <Stack.Screen name="Category" component={CategoryScreen} />
                <Stack.Screen name="Product" component={ProductScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
            </Stack.Navigator>
    );
};

export default StackNavigation;

