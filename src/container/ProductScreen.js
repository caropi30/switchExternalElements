import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Text } from "react-native";
import CardList from "../components/CardList";
import labels from "../constants/labels";
import colors from "../constants/colors";
import useData from "../hooks/useData";

const { PRODUCTS } = labels;

const { LIGHT_BLUE } = colors;

const ProductScreen = ({ route }) => {
    const [product, setProduct] = useState('');
    const navigation = useNavigation();
    const { category } = route.params;
    
    return (
        <View style={style.container}>
            <CardList
                data={PRODUCTS.filter(product => product.category === category)}
                setSelection={setProduct}
                goTo={() => navigation.navigate('DetailScreen', { screen: 'DetailScreen', product: product })}
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