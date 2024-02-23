import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardList from "../components/CardList";
import colors from "../constants/colors";
import labels from "../constants/labels";

const { LIGHT_BLUE } = colors;

const { CATEGORIES } = labels

const HomeScreen = () => {
    const [category, setCategory] = useState('');
    const navigation = useNavigation();

    return (
        <View style={style.container}>
            <CardList data={CATEGORIES}
                setSelection={setCategory}
                screen='ProductScreen'
                cardOnPress={({ title }) => navigation.navigate('ProductScreen', { screen: 'ProductScreen', category: title })}
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

export default HomeScreen;