import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import BottomNavigator from './src/navigations/BottomNavigator';
import { Tab2, Tab1 } from './src';
import PhotoShap from './src/screen/PhotoShap/PhotoShap';
import Library from './src/screen/Library/Library';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <AppNavigator/> */}
      {/* <PhotoShap/> */}
      <Library/>
      {/* <Tab2/> */}
      {/* <BottomNavigator/> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
