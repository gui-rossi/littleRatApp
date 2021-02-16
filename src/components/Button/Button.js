import React from 'react';
import { View, Text, Pressable } from 'react-native';
import ButtonStyles from './ButtonStyles';

function Button(props) {
    return (
        <View style={ButtonStyles.container}>
            <Pressable style={ButtonStyles.button} onPress={props.onPress}>
                <Text style={ButtonStyles.text}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default Button;