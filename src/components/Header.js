import React from "react";
import {View, Text,  StyleSheet, Pressable} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "../constants/colors";
import useFont from "../hooks/useFont";
import labels from "../constants/labels";

const { PINK, BLACK} = colors;
const { HEADER: {TITLE} } = labels;
const Header = ({ title, goBack }) => {
    const {fontsLoaded} = useFont();
    console.log('fontsLoaded', fontsLoaded)

    return (
        <View style={style.container}>
            <Pressable  style={style.btnBack} onPress={goBack}>
                {title !== TITLE ? <Ionicons name="chevron-back-sharp" size={24} color={BLACK} />  : null}      
            </Pressable>
            <Text style={style.title} >{title}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: PINK,
    },
    btnBack: {
        width: '5%',
    },
    title: {
        width: '95%',
        textAlign: 'center',
        fontFamily: 'Montserrat-VariableFont',
        fontWeight: '700',
        fontSize: 20,
        color: BLACK,        
    }
});

export default Header;