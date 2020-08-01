import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({title, imageSource, score}) => {
    return (
        <View>
            <Text>{title} - {score}</Text>
            <Image 
                source={imageSource}
                style={styles.image}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200
    }
});

export default ImageDetail;