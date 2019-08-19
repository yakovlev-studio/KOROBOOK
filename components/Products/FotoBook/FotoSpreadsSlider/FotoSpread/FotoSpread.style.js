import { StyleSheet, Dimensions } from 'react-native';
import { calculatePercentOfTotal } from 'korobook/utils/utils';

export const { width: viewportWidth } = Dimensions.get('window');
export const { height: viewportHeight } = Dimensions.get('window');


export const slideHeight = calculatePercentOfTotal(66, viewportWidth); 
export const slideWidth = calculatePercentOfTotal(90, viewportWidth);

// Position of an activeSpread on X axios
export const fotoSpreadX0 = (viewportWidth - slideWidth) / 2;
export const fotoSpreadX1 = viewportWidth - fotoSpreadX0;

// Position of an activeSpread on Y axios
export const fotoSpreadY0 = slideHeight * 0.5;
export const fotoSpreadY1 = fotoSpreadY0 + slideHeight;

export const midpointOfSpread = (fotoSpreadX1 + fotoSpreadX0) / 2;


export default StyleSheet.create({
    slideInnerContainer: {
        width: slideWidth,
        height: slideHeight,
        borderWidth: 1,
        borderColor: '#333',
        flexDirection: 'row'
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        width: '100%',
        height: '100%',
        zIndex: 100
    },
    dashContainer: {
        position: 'absolute',  
        top: 0,
        bottom: 0, 
        left: '50%'
    },
    dash: {
       height: '100%', 
       flexDirection: 'column'
    },
});

