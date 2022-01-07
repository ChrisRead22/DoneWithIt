import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View, StatusBar, Platform, View, SafeAreaView, Alert, Button } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

// View -> UIView
export default function App() {

  console.log(Dimensions.get('screen'));
  
  return (
    <SafeAreaView style={styles.container, contatinerStyle}>
        <Text>
        Hello React Native
        </Text>
        <TouchableNativeFeedback onPress={() => console.log("Image tapped")}>
        <View
         style={{ 
          backgroundColor: 'dodgerblue',
          width: '50%',
          height: 70
        }}
        ></View>
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
