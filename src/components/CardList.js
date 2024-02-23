import React from "react";
import { FlatList } from "react-native";
import Card from "./Card";
import PropTypes from 'prop-types';

const propTypes = {
    data: PropTypes.array.isRequired,
    cardOnPress: PropTypes.func.isRequired,
}
<<<<<<< HEAD
const CardList = ({ data, cardOnPress }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => <Card title={item.title} id={item.id} category={item.category} cardOnPress={cardOnPress} />}
=======
const CardList = ({ data, cardOnPress, setSelection, screen, goTo }) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => 
                <Card 
                    title={item.title} 
                    id={item.id} 
                    category={item.category} 
                    cardOnPress={cardOnPress} 
                    screen={screen} 
                    setSelection={setSelection} goTo={goTo} 
                />}
>>>>>>> 57c1cc1fe556816f221d010fef0064dd97e7ab37
            keyExtractor={item => item.id}
        />
    );
};



CardList.propTypes;

export default CardList;