import React from "react";
import {View, Text,  StyleSheet, Pressable} from 'react-native';
import labels from "../constants/labels";
import colors from "../constants/colors";


const {HEADER: {BTN_BACK}} = labels;
const {PINK} = colors;
const Header = ({ title, goBack }) => {
    return (
        <View style={style.container}>
            <Pressable  style={style.btnBack} onPress={goBack}>
                <Text>{BTN_BACK}</Text>            
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
        width: '10%',
    },
    title: {
        width: '90%',
        textAlign: 'center'
    }
});

export default Header;