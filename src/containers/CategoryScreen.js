import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import List from '../components/List';
import colors from '../constants/colors';
import useFont from '../hooks/useFont';
import useGetCategories from '../hooks/useGetCategories';
import useGetProductsByCategory from '../hooks/useGetProductsByCategory';
import { setProductsByCategory } from '../actions/productsByCategorySlice';

const { LIGHT_BLUE } = colors;

const CategoryScreen = () => {
    //const { productsByCategory } = useGetProductsByCategory();
    const { fontsLoaded } = useFont();
    const { categories } = useGetCategories();
    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('ProductsByCategory', { screen: 'ProductsByCategoryScreen' });
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorías</Text>
            <List data={categories} cardOnPress={handleNavigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: LIGHT_BLUE,
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        fontWeight: '700',
        marginTop: 30,
        marginBottom: 16,
        paddingLeft: 35,
        alignSelf: 'flex-start',
    },
});

export default CategoryScreen;
