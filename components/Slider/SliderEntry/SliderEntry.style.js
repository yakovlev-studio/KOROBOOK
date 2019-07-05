import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from 'korobook/App.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(80);
const itemHorizontalMargin = wp(2);

 export const sliderWidth = viewportWidth;
 export const itemWidth = slideWidth + itemHorizontalMargin * 2;



const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },

    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20 - entryBorderRadius,
        paddingBottom: 20,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius
    },
    title: {
        color: colors.black,
        fontSize: 26,
        fontWeight: 'bold',
        letterSpacing: 0.3,
        textAlign: 'center'
    },
    subtitle: {
        marginTop: 20,
        color: colors.gray,
        fontSize: 16,
        textAlign: 'center'
    }
});
