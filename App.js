import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableNativeFeedback, View, StatusBar, Platform, View, SafeAreaView, Alert, Button } from 'react-native';
import { useDimensions, useDeviceOrientation, } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';

// View -> UIView
export default function App() {
  return (
    <WelcomeScreen />;
  );
}


