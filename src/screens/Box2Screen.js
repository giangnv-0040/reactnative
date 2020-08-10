import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box2Screen = () => {
    return (
        <View style={styles.parent}>
            <Text style={styles.range1}></Text>
            <Text style={styles.range2}></Text>
            <Text style={styles.range3}></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row'
    },
    range1: {
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'tomato',
        height: 100,
        flex: 3,
        right: 20
    },
    range2: {
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'gray',
        height: 100,
        flex: 3,
        top: 200
    },
    range3: {
        borderColor: 'red',
        borderWidth: 1,
        backgroundColor: 'tomato',
        height: 100,
        flex: 3
    }
});

export default Box2Screen;