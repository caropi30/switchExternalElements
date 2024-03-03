import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import colors from '../constants/colors';
import { setCategory } from '../actions/categorySlice';
import useGetCategories from '../hooks/useGetCategories';

const { LIGHT_PURPLE, BLACK, LIGHT_BLUE } = colors;

const HomeScreen = () => {
    const { categories } = useGetCategories();
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const handleNavigation = () => {
        navigation.navigate('Category', { screen: 'CategoryScreen' });
    };

    const handleCategoryFilter = () => {
        dispatch(setCategory(categories));
        navigation.navigate('Category', { screen: 'CategoryScreen', params: { categories } });
    };

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.title}>¿Qué te provoca hoy?</Text>
                <Text style={styles.paragraph}>Escoge entre nuestras opciones individuales y combos</Text>
            </View>
            <TouchableOpacity style={styles.btn} onPress={handleCategoryFilter}>
                <Text style={styles.btnTxt}>Individuales</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={handleNavigation}>
                <Text style={styles.btnTxt}>Combos</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: LIGHT_BLUE,
    },
    info: {
        alignItems: 'flex-start',
    },
    title: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 10,
    },
    paragraph: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 15,
        fontWeight: '500',
    },
    btn: {
        height: 100,
        width: '100%',
        backgroundColor: LIGHT_PURPLE,
        borderRadius: 7,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    btnTxt: {
        color: BLACK,
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default HomeScreen;