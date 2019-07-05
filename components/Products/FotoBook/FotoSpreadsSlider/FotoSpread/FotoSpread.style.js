import { StyleSheet, Platform } from 'react-native';
import { colors } from 'korobook/App.style';

// Loading utility functions
import { viewportWidth, viewportHeight, calculatePercentOfTotal } from 'korobook/utils/utils'

const itemHorizontalMargin = calculatePercentOfTotal(7, viewportWidth); 

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
    // plusUp: {
    //     height: 61,
    //     width: 1,
    //     backgroundColor: '#ccc'
    // },
    // plusFlat: {
    //     height: 1,
    //     width: 61,
    //     left: -30,
    //     top: 30,
    //     backgroundColor: '#ccc'
    // }

 
});