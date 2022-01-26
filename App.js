import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View, StatusBar, Platform, View, SafeAreaView, Alert, Button } from 'react-native';
import { useDimensions, useDeviceOrientation, } from '@react-native-community/hooks';

// View -> UIView
export default function App() {

  const {landscape} = useDeviceOrientation();
  
  return (
    <SafeAreaView style={styles.container, contatinerStyle}>
        <Text>
        Hello React Native
        </Text>
        <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View
         style={{ 
          backgroundColor: '#fff',
          flex: 1,
          flexDirection: "row", // horizontal axis
          justifyContent: "center", // main axis
          alignItems: "center", // secondary
          alignContent: "center",
          flexWrap: "wrap",
        }}
        >
          <View style={{
            backgroundColor: "dodgerblue"
            flex: -1,
            width: 400,
            height: 300,
          }}
          />
          <View style={{
            backgroundColor: "gold"
            width: 100,
            height: 200,
            top: 20,
            left: 20,
            position: "absolute",
          }}
          />
          <View style={{
            backgroundColor: "tomato"
            width: 100,
            height: 100,
          }}
          />
          <View style={{
            backgroundColor: "grey"
            width: 100,
            height: 100,
          }}
          />
          <View style={{
            backgroundColor: "greenyellow"
            width: 100,
            height: 100,
          }}
          />
        </View>
        </TouchableNativeFeedback>
      <StatusBar style="auto" />
      <Button 
      color="Red"
      title="Click Me" 
      onPress={() => 
        Alert.prompt("My title", "My message", text => console.log(text))
    }
     />
    </SafeAreaView>
  );
}

const contatinerStyle = { backgroundColor: "orange"}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
