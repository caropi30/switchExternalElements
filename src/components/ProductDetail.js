import React from "react";
<<<<<<< HEAD
import { View, Text, StyleSheet } from "react-native";
import useFont from "../hooks/useFont";
import colors from "../constants/colors";

const { DARK_PURPLE, BLACK, WHITE } = colors;

const ProductDetail = ({ title }) => {
    const { fontsLoaded } = useFont();
    return (
        <View style={style.container}>
            <Text style={style.txt}>{title}</Text>
=======
import { View, Text } from "react-native";

const ProductDetail = ({ title }) => {
    return (
        <View>
            <Text>{title}</Text>
>>>>>>> 57c1cc1fe556816f221d010fef0064dd97e7ab37
        </View>
    );
};

<<<<<<< HEAD
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

=======
>>>>>>> 57c1cc1fe556816f221d010fef0064dd97e7ab37
export default ProductDetail;