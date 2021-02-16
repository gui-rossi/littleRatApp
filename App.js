import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import BackgroundImage from './src/components/BackgroundImage/BackgroundImage';
import Button from './src/components/Button/Button';
import { Audio } from 'expo-av';

export default function App() {

  const [sound, setSound] = useState();

  async function playRatinhooo() {
    console.warn('funfou');
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/ratinhooo.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

  return (
    <View style={style.container}>
      
      <BackgroundImage />

      <Button
        text="Ratinhoooo"
        onPress={playRatinhooo}
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
