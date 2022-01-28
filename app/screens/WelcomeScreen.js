import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
       <ImageBackground
       style={styles.background}
        source={require('../assets/background.jpg')}
       >
           <View> style={styles.loginButton}</View>
       </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1
    }
})

export default WelcomeScreen;