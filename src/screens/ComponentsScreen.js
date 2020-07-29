import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = 'GiangNV';
  return (
    <View>
      <Text style={styles.text}>Getting started with React Native</Text>
      <Text sytle={styles.subHeader}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 45
  },
  subHeader: {
    fontSize: 20
  }
});

export default ComponentsScreen;
