import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource={require("../../assets/khunglong1.png")} score={1} />
            <ImageDetail title="Moutain" imageSource={require("../../assets/khunglong2.png")} score={2} />
            <ImageDetail title="Beach" imageSource={require("../../assets/khunglong3.png")} score={3} />
        </View>
    );
};

const style = StyleSheet.create({});

export default ImageScreen;