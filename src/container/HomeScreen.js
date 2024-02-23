import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CardList from "../components/CardList";
import colors from "../constants/colors";
import labels from "../constants/labels";
import useData from "../hooks/useData";

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
<<<<<<< HEAD
                cardOnPress={({ title }) => navigation.navigate('ProductScreen', { screen: 'ProductScreen', category: title })}
=======
                goTo={() => navigation.navigate('ProductScreen', { screen: 'ProductScreen', category: category })}
>>>>>>> 57c1cc1fe556816f221d010fef0064dd97e7ab37
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