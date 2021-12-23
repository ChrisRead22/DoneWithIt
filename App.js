import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, Image, SafeAreaView } from 'react-native';

// View -> UIView
export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
        <Text>
        Hello React Native
        </Text>
        <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        
        </TouchableNativeFeedback>
      <StatusBar style="auto" />
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
