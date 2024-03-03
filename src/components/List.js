import React from 'react';
import { FlatList } from 'react-native';
import Card from './Card';

const List = ({ data, cardOnPress }) => (
    <FlatList
        data={data}
        renderItem={(item) => (
            <Card
                id={item.item.id}
                category={item.item.category}
                nameProduct={item.item.title}
                itemTitle={item.item}
                cardOnPress={cardOnPress}
            />
        )}
        keyExtractor={(item) => item.id}
    />
);

export default List;
