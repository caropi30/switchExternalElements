import React from "react";
import { View, Image, Text, Pressable } from 'react-native';

const Product = ({title, img, quantity}) => {
    return (
        <>
            <Image />
            <Text></Text>
            <View>
                <Pressable>
                    <Text>+</Text>
                </Pressable>
                <Text>{quantity}</Text>
                <Pressable>
                    <Text>-</Text>
                </Pressable>
            </View>
        </>
    );
};

export default Product;