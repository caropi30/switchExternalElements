import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import CategoryScreen from "./CategoryScreen";
import colors from "../constants/colors";


const { BLACK, WHITE, LIGHT_BLUE } = colors;

const HomeScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    console.log('home')

    // const handleGoBack = ({ title }) => {
    //      navigation.navigate('Category', { screen: 'CategoryScreen', })
    // };

    return (
        <View style={style.container}>
           <Text style={style.txt}>HomeScreen</Text>
            {/* <TouchableOpacity style={style.btn}onPress={handleGoBack}>
                <Text style={style.txt}>Ir a categoríq</Text>
            </TouchableOpacity> */}
        </View >
    );

};
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: BLACK,
        alignItems: 'center',
    },
    txt: {
        color: WHITE,
    },
    btn:{
        backgroundColor: LIGHT_BLUE,
        padding: 10,
    }
})

export default HomeScreen;