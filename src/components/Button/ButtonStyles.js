import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 15,
        paddingTop: 10,
    },
    button: {
        backgroundColor: 'yellow',
        borderRadius: 8,
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