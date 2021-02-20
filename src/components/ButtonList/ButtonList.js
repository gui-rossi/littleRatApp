import React from 'react';
import {TouchableNativeFeedback} from 'react-native';
import Button from './../Button/Button';

function ButtonList(props) {
    return (
        props.array.map((value, index) => {
            return <Button key={index} text={value.text} onPress={value.function}/>
        })
    );
}

export default ButtonList;