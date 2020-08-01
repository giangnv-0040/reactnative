import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Friend #1', age: 'Age 1' },
        { name: 'Friend #2', age: 'Age 2' },
        { name: 'Friend #3', age: 'Age 3' },
        { name: 'Friend #4', age: 'Age 4' },
        { name: 'Friend #5', age: 'Age 5' },
        { name: 'Friend #6', age: 'Age 6' },
        { name: 'Friend #7', age: 'Age 7' },
        { name: 'Friend #8', age: 'Age 8' },
    ];
    return (
        <FlatList
            // horizontal
            // showsHorizontalScrollIndicator={false}
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
            }}
        />
    );
}

const styles = StyleSheet.create({
    textStyle: {
        // marginVertical: 5,
        borderWidth: 1
    },
});

export default ListScreen;
