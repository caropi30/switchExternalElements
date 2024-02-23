import React, { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import CardList from "../components/CardList";
import labels from "../constants/labels";
import colors from "../constants/colors";

const { PRODUCTS } = labels;

const { LIGHT_BLUE } = colors;

const ProductScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [product, setProduct] = useState('');
    const { category } = route.params;

    return (
        <View style={style.container}>
            <CardList
                data={PRODUCTS.filter(product => product.category === category)}
                setSelection={setProduct}
                cardOnPress={({ title }) => navigation.navigate('DetailScreen', { screen: 'DetailScreen', product: title })}
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