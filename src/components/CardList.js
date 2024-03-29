import React from "react";
import { FlatList } from "react-native";
import Card from "./Card";
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.array.isRequired,
    cardOnPress: PropTypes.func.isRequired,
}
const CardList = ({ data, cardOnPress }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Card title={item.title} id={item.id} category={item.category} cardOnPress={cardOnPress} />}
            keyExtractor={item => item.id}
        />
    );
};



CardList.propTypes;

export default CardList;