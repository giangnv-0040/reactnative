import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child1</Text>
            <Text style={styles.textTwoStyle}>Child2</Text>
            <Text style={styles.textThreeStyle}>child3</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        // alignItems: 'stretch' | 'flex-start' | 'flex-end'
        // flexDirection: 'row' | 'column'
        // justifyContent: 'flex-end' | 'space-around'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 4, // do rong cua phan tu con
        alignSelf: 'center', // vi tri cua phan tu con tron ptu cha
        // position: 'absolute'
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'blue',
        flex: 4,
        alignSelf: 'stretch',
        // position: 'absolute',
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        ...StyleSheet.absoluteFillObject
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        // alignSelf: 'center'
    }
});

export default BoxScreen;
