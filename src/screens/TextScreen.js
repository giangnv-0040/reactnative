import React, { useReducer } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const reducer = (state, action) => {
    return { validate: action.name.length < 10, name: action.name };
};

const TextScreen = () => {
    const [state, dispatch] = useReducer(reducer, { validate: true, name: ''});

    return (
        <View>
            <Text>Enter Name</Text>

            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={state.name}
                onChangeText={(newValue) => dispatch({ name: newValue })}
            />

            <Text>My name is {state.name}</Text>
            { state.validate ? null : <Text style={styles.error}>That was failed</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    error: {
        color: 'red'
    }
});

export default TextScreen;
