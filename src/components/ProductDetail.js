import React from "react";
import { View, Text, StyleSheet } from "react-native";
import useFont from "../hooks/useFont";
import colors from "../constants/colors";

const { DARK_PURPLE, BLACK, WHITE } = colors;

const ProductDetail = ({ title }) => {
    const { fontsLoaded } = useFont();
    return (
        <View style={style.container}>
            <Text style={style.txt}>{title}</Text>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        fontSize: 30,
        fontWeight: 600,
        color: WHITE,
        fontFamily: 'Montserrat-VariableFont'
    }
});

export default ProductDetail;