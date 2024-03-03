import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('HomeStack', { screen: 'HomeScreen' });
    };
    return (
        <View style={styles.container}>
            <Text>CartScreen</Text>
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

export default CartScreen;
