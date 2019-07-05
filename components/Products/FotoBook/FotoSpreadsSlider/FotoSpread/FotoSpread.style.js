import { StyleSheet } from 'react-native';

import { 
    viewportWidth, 
    calculatePercentOfTotal 
} from 'korobook/utils/utils'

export const slideHeight = calculatePercentOfTotal(66, viewportWidth); 
export const slideWidth = calculatePercentOfTotal(90, viewportWidth)

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