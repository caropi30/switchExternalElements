import React from "react";
import {View, Text,  StyleSheet, Pressable} from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import Ionicons from '@expo/vector-icons/Ionicons';
import labels from "../constants/labels";
import colors from "../constants/colors";


const {PINK, DARK_PURPLE, BLACK} = colors;
const Header = ({ title, goBack }) => {
    return (
        <View style={style.container}>
            <Pressable  style={style.btnBack} onPress={goBack}>
                <Ionicons name="chevron-back-sharp" size={24} color={BLACK} />        
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
        fontSize: 20,
        
    }
});

export default Header;