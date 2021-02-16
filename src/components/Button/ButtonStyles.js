import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 35,
    },
    button: {
        backgroundColor: 'yellow',
        borderRadius: 20,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '100',
    }
});

export default ButtonStyles;