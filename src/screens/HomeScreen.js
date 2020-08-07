import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        title="Go to components demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        title="Go to List demo"
        onPress={() => navigation.navigate('List')}
      />
      <Button
        title="Go to Image demo"
        onPress={() => navigation.navigate('Image')}
      />
      <Button
        title="Go to Counter demo"
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title="Go to Color demo"
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title="Go to Square demo"
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title="Go to Text demo"
        onPress={() => navigation.navigate('TextScreen')}
      />
      <Button
        title="Go to Box demo"
        onPress={() => navigation.navigate('Box')}
      />
      {/* <TouchableOpacity onPress={() => console.log('Go to List pressed.')}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
