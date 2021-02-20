import React from 'react';
import Button from './../Button/Button';

function ButtonList(props) {
    return (
        props.array.map((value, index) => {
            return <Button key={index} text={value.text} onPress={value.function}/>
        })
    );
}

export default ButtonList;