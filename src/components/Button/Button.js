import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ButtonStyles from './ButtonStyles';

function saiSom () {
    console.warn('alo');
}

function Button(props) {
    return (
        <View style={ButtonStyles.container}>
            <Pressable style={ButtonStyles.button} onPress={() => saiSom()}>
                <Text style={ButtonStyles.text}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default Button;