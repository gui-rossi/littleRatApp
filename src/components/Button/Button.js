import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
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
        <View style={ButtonStyles.container}>
            <Pressable style={ButtonStyles.button} onPress={props.onPress}>
                <Text style={styles.text}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default Button;