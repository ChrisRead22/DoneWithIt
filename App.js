import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView, Alert, Button } from 'react-native';

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
      <Button 
      color="Red"
      title="Click Me" 
      onPress={() => Alert.alert("My title", "My message", [
        {text: "Yes", onPress: () => console.log("Yes") },
        {text: "No", onPress: () => console.log("No") },
      ])
    }
     />
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
