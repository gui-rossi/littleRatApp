import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundImage from './src/components/BackgroundImage/BackgroundImage';
import Button from './src/components/Button/Button';

export default function App() {
  return (
    <View style={style.container}>
      
      <BackgroundImage />

      <Button
        text="Uepá"
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
