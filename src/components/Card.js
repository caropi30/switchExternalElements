import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../constants/colors';
import useFont from '../hooks/useFont';

const { BLACK, LIGHT_PURPLE } = colors;

const Card = ({ id, category, nameProduct, itemTitle, cardOnPress }) => {
    const { fontsLoaded } = useFont();

    const handleData = () => {
        cardOnPress();
    };

    return (
        <TouchableOpacity style={styles.container} key={id} onPress={handleData}>
            {/* <Text style={styles.txt}>{id}</Text>
            <Text style={styles.txt}>{category}</Text>
            <Text style={styles.txt}>{nameProduct}</Text> */}
            <Text style={styles.txt}>{itemTitle}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 300,
        backgroundColor: LIGHT_PURPLE,
        borderRadius: 7,
        justifyContent: 'center',
        marginVertical: 15,
    },
    txt: {
        color: BLACK,
        textAlign: 'center',
        fontFamily: 'Montserrat-Medium',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default Card;
