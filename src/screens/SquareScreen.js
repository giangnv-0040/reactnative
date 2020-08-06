import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const reducer = (state, action) => {
    switch (action.type) {
        case 'red':
            return state.red + action.playload > 255 || state.red + action.playload < 0
                ? state
                : { ...state, red: state.red + action.playload };
        case 'green':
            return state.green + action.playload > 255 || state.green + action.playload < 0
                ? state
                : { ...state, green: state.green + action.playload };
        case 'blue':
            return state.blue + action.playload > 255 || state.blue + action.playload < 0
                ? state
                : { ...state, blue: state.blue + action.playload };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue:0 });

    return (
        <View>
            <ColorCounter
                color="Red"
                onIncrease={() => dispatch({ type: 'red', playload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'red', playload: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({ type: 'green', playload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'green', playload: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ type: 'blue', playload: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ type: 'blue', playload: -1 * COLOR_INCREMENT })}
            />
            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }}
            >
            </View>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;