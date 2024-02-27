import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import ProductDetail from "../components/ProductDetail";
import colors from "../constants/colors";


const { BLACK } = colors;

const DetailScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { product } = route.params;
    console.log('product', product)

    const handleGoBack = ({ title }) => {
         navigation.navigate('Product', { screen: 'ProductScreen', category: title })
    };

    return (
        <View style={style.container}>
            <ProductDetail title={product} />
            {/* <TouchableOpacity onPress={handleGoBack}>
                <Text>Volver</Text>
            </TouchableOpacity> */}
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