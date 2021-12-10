import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// View -> UIView
export default function App() {
  
  const handlePress = () => console.log("Text Pressed");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello React Native
        </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
