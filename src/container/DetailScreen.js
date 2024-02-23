import React from "react";
import { StyleSheet, View, Text } from "react-native";
<<<<<<< HEAD
import { useNavigation, useRoute } from "@react-navigation/native";
=======
import { useNavigation } from "@react-navigation/native";
>>>>>>> 57c1cc1fe556816f221d010fef0064dd97e7ab37
import ProductDetail from "../components/ProductDetail";
import colors from "../constants/colors";
import labels from "../constants/labels";

<<<<<<< HEAD
const { BLACK } = colors;

const { CATEGORIES } = labels

const DetailScreen = () => {
    const route = useRoute();
    const { product } = route.params;

=======
const { LIGHT_BLUE } = colors;

const { CATEGORIES } = labels

const DetailScreen = ({ route }) => {
    const { product } = route.params;
>>>>>>> 57c1cc1fe556816f221d010fef0064dd97e7ab37
    return (
        <View style={style.container}>
            <ProductDetail title={product} />
        </View >
    );

};
const style = StyleSheet.create({
    container: {
        flex: 1,
<<<<<<< HEAD
        backgroundColor: BLACK,
        alignItems: 'center',
=======
        backgroundColor: LIGHT_BLUE,
        alignItems: 'center',
        paddingTop: 50,
>>>>>>> 57c1cc1fe556816f221d010fef0064dd97e7ab37
    }
})

export default DetailScreen;