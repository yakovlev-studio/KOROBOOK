import { StyleSheet } from 'react-native';
import { colors } from 'korobook/App.style';

export default StyleSheet.create({
    carouselContainer: {
        paddingVertical: 20
    },
    carouselContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(0,0,0,0.8)',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(0,0,0, 0.75)',
        fontSize: 26,
        textAlign: 'center'
    },
    slider: {
        marginTop: 15
    },
    sliderContentContainer: {
        paddingVertical: 40
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 1
    }
})