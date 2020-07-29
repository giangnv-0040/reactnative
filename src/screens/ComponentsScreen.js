import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const greeting = <Text> Hello to you! </Text>;
  return (
    <View>
      <Text style={styles.text}>ComponentsScreen</Text>
      {greeting}
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ComponentsScreen;
