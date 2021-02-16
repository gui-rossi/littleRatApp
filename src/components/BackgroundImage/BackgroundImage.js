import React from 'react';
import { ImageBackground } from 'react-native';
import BackgroundImageStyles from './BackgroundImageStyles';

function BackgroundImage() {
    return (
        <ImageBackground 
            source={require('../../../assets/Rato.jpg')}
            style={BackgroundImageStyles.container}
        />
    );
}

export default BackgroundImage;