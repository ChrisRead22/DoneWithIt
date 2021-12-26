import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView, Button } from 'react-native';

// View -> UIView
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
        <Text>
        Hello React Native
        </Text>
        <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View style={{ width: 200, height: 70, backgroundColor: "blue" }}></View>
        </TouchableNativeFeedback>
      <StatusBar style="auto" />
      <Button title="Click Me" onPress={} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
