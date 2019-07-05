import { StyleSheet } from 'react-native';
import { colors } from 'korobook/App.style';

export default StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000080'
    },
    innerContainer: {
        width: 300,
        height: 380,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 14,
    }
})