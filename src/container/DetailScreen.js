import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ProductDetail from "../components/ProductDetail";
import colors from "../constants/colors";
import labels from "../constants/labels";

const { LIGHT_BLUE } = colors;

const { CATEGORIES } = labels

const DetailScreen = ({ route }) => {
    const { product } = route.params;
    return (
        <View style={style.container}>
            <ProductDetail title={product} />
        </View >
    );

};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_BLUE,
        alignItems: 'center',
        paddingTop: 50,
    }
})

export default DetailScreen;