import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// View -> UIView
export default function App() {
  console.log("App executed");

  // let x;
  // x.toString();

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={() => console.log("Text Clicked")}>
        Hello React Native
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
