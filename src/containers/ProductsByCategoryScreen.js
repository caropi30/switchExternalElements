import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProductsByCategoryScreen = () => {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('ProductDetail', { screen: 'ProductDetailScreen' });
    };
    return (
        <View style={styles.container}>
            <Text>ProductsByCategoryScreen</Text>
            <TouchableOpacity style={styles.btn} onPress={handleNavigation}>
                <Text>Go to</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        padding: 10,
        backgroundColor: 'lightblue',
    },
});

export default ProductsByCategoryScreen;
