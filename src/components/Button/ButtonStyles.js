import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
    container: {
        width: '100%',
        paddingLeft: 35,
        paddingRight: 35,
        paddingBottom: 9,
        paddingTop: 9,
    },
    button: {
        backgroundColor: 'rgb(255, 191, 0)',
        borderRadius: 8,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    release: {
        backgroundColor: 'rgb(255, 255, 0)',
        borderRadius: 8,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ButtonStyles;