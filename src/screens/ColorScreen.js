import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [ colors, setState ] = useState([]);
    return (
        <View>
            <Button title="Add a Color" onPress={() => {
                return setState([...colors, randomRgb()]);
            }} />
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={( item ) => {
                    return (
                        <View style={{ width: 100, height: 100, backgroundColor: randomRgb() }}></View>
                    );
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${blue}, ${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;