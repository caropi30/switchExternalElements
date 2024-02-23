import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import ProductDetail from "../components/ProductDetail";
import colors from "../constants/colors";
import labels from "../constants/labels";

const { BLACK } = colors;

const { CATEGORIES } = labels

const DetailScreen = () => {
    const route = useRoute();
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
        backgroundColor: BLACK,
        alignItems: 'center',
    }
})

export default DetailScreen;