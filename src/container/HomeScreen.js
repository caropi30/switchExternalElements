import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import CardList from "../components/CardList";
import colors from "../constants/colors";

const { LIGHT_BLUE } = colors;
const HomeScreen = ({ title, data, cardOnPress }) =>{
    return (
        <View style={style.container}>
            <Header title={title} />
            <CardList data={data} cardOnPress={cardOnPress}/>
        </View>
    );

};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_BLUE, 
        alignItems: 'center', 
    }
})

export default HomeScreen;