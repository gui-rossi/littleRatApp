import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import BackgroundImage from './src/components/BackgroundImage/BackgroundImage';
import ButtonList from './src/components/ButtonList/ButtonList';
import Button from './src/components/Button/Button';
import { Audio } from 'expo-av';

export default function App() {

  const [sound, setSound] = useState();

  async function playCalma() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/calma.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playCavalo() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/cavalo.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playIhá() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/ihaa.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playMuitoviado() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/muitoviado.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playNoexiste() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/noexiste.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playPare() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/pare.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playPatrao() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/patrao.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playPotencia() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/potencia.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playRapazz() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/rapaz.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playRatinhooo() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/ratinhooo.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playRisada() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/risada.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playTarzan() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/tarzan.mp3')
    );
    setSound(sound);
  
    await sound.playAsync(); 
  }

  async function playUepa() {
    const { sound } = await Audio.Sound.createAsync(
       require('./audio/uepa.mp3')
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

  const array = [
    {text: "Que isso meu filho calma", function: playCalma},
    {text: "Cavalooo", function: playCavalo},
    {text: "Ihááá", function: playIhá},
    {text: "É muito viado!", function: playMuitoviado},
    {text: "Isso no existee", function: playNoexiste},
    {text: "Pare!", function: playPare},
    {text: "Esse é meu patrãoo heheh", function: playPatrao},
    {text: "Aoooooo potência", function: playPotencia},
    {text: "Rapaiizzz", function: playRapazz},
    {text: "Ratinhoooo", function: playRatinhooo},
    {text: "Risada", function: playRisada},
    {text: "Tarzan", function: playTarzan},
    {text: "Uepááá", function: playUepa},
  ];

  return (
    <View style={style.container}>
      
      <BackgroundImage/>
      
      <View style={style.mainView}>

        <View>
          {/* <ButtonList array={array}/> */}
        </View>

        <ScrollView style={style.scrollView}>
          <ButtonList array={array}/>
        </ScrollView> 
        
      </View>
      
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
  mainView: {
    width: '100%',
  },
  scrollView: {
    height: '40%',
  }
});
