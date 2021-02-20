import React, { useState } from 'react';
import { ScrollView, Text, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import ButtonStyles from './ButtonStyles';
import { useFonts, Baloo2_600SemiBold } from '@expo-google-fonts/baloo-2';

function Button(props) {
    
    const [loaded] = useFonts({
        Baloo2_600SemiBold
    });

    const styles = StyleSheet.create({
        text: {
            color: 'black',
            fontSize: 18,
            fontFamily: 'Baloo2_600SemiBold',
        }
    });

    if (!loaded)
        return null;

    return (
        <ScrollView style={ButtonStyles.container}>
            <TouchableOpacity style={ButtonStyles.button} onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}

export default Button;