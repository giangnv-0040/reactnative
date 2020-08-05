import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;
const reducer = (state, action) => {
    switch (action.changeToColor) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
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
                onIncrease={() => dispatch({ changeToColor: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ changeToColor: 'red', amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Green"
                onIncrease={() => dispatch({ changeToColor: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ changeToColor: 'green', amount: -1 * COLOR_INCREMENT })}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => dispatch({ changeToColor: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ changeToColor: 'blue', amount: -1 * COLOR_INCREMENT })}
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