import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
    return { ...state, counter: state.counter + action.playload};
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, { counter: 0 });
    console.log(state);
    return (
        <View>
            <Button 
                title="Increase"
                onPress={() => {
                    dispatch({ playload: 1 });
                }}
            />
            <Button 
                title="Decrease"
                onPress={() => {
                    dispatch({ playload: -1 });
                }}
            />
            <Text>Current counter: {state.counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;