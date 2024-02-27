import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import colors from '../constants/colors'

const { BLACK, WHITE, LIGHT_BLUE } = colors;

const CartScreen = () => {
    return (
        <View style={style.container}>
            <Text style={style.txt}>CartScreen</Text>
        </View>
    )
}

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

export default CartScreen
