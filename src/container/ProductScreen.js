import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import CardList from "../components/CardList";
import labels from "../constants/labels";
import colors from "../constants/colors";
import useData from "../hooks/useData";

const { PRODUCTS } = labels;

const { LIGHT_BLUE } = colors;

const ProductScreen = () => {
    const { setProduct } = useData();
    const route = useRoute();
    const navigation = useNavigation();
    const { category } = route.params;

    return (
        <View style={style.container}>
            <CardList
                data={PRODUCTS.filter(product => product.category === category)}
                setSelection={setProduct}
                screen='DetailScreen'
                cardOnPress={({ title }) => navigation.navigate('Detail', { screen: 'DetailScreen', product: title })}
            />
        </View>
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

export default ProductScreen;