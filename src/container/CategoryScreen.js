import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardList from "../components/CardList";
import colors from "../constants/colors";
import labels from "../constants/labels";
import useData from "../hooks/useData";

const { LIGHT_BLUE } = colors;

const { CATEGORIES } = labels

const CategoryScreen = () => {
    const { setCategory } = useData();
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <CardList data={CATEGORIES}
                setSelection={setCategory}
                screen='ProductScreen'
                cardOnPress={({ title }) => navigation.navigate('Product', { screen: 'ProductScreen', category: title })}
            />
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

export default CategoryScreen;