import React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";  
import PropTypes from 'prop-types';
import colors from "../constants/colors";

const propTypes = {
    title: PropTypes.string.isRequired,
    cardOnPress: PropTypes.func.isRequired,
}

const { BLACK, LIGHT_PURPLE} = colors;
const Card = ({title, cardOnPress, id}) => {
    return(
        <TouchableOpacity key={id} onPress={() => cardOnPress(title)} style={style.container}>
            <Text style={style.title}>{title}</Text>
        </TouchableOpacity>
    )
};

const style = StyleSheet.create({
    container: {
        height: 100,
        width: 300,
        backgroundColor: LIGHT_PURPLE,
        borderRadius: 7,
        justifyContent: 'center',
        marginVertical: 15

    },
    title:{
        color: BLACK,
        textAlign: 'center',
    }
});


Card.propTypes;
export default Card;