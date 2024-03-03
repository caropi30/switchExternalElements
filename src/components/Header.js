import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../constants/colors';

const { BLACK } = colors;

const Header = () => (
    <View style={styles.container}>
        <Ionicons name="chevron-back" size={28} color={BLACK} style={styles.icon} />
    </View>
);

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        backgroundColor: 'lightblue',
        width: '100%',
        paddingTop: 40,
        paddingBottom: 10,
        paddingHorizontal: 10,
    },
    txt: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        textAlign: 'center',
        paddingTop: 30,
    },
    icon: {},
});
