import { Dimensions } from 'react-native'

import fotoSpreadTemplates from 'korobook/static/fotoSpreadTemplates'
import { slideHeight, slideWidth } from 'korobook/components/Products/FotoBook/FotoSpreadsSlider/FotoSpread/FotoSpread.style'

const {
    width: viewportWidth, 
    height: viewportHeight
} = Dimensions.get('window')




/**
 * This function estimates left, top, width and height properties of the floating imagee after releasion gesture event
 *
 * @param {number} [templateIndex=0]
 * @param {number} [indexOfFrame=0]
 * @returns
 */
export default (templateIndex = 0, indexOfFrame=0) => {

    // Position of an activeSpread on X axios
    const spreadX0 = (viewportWidth - slideWidth) / 2
    const spreadX1 = viewportWidth - spreadX0

    // Position of an activeSpread on Y axios
    const spreadY0 = slideHeight * 0.5
    const spreadY1 = spreadY0 + slideHeight

    // height of fotoSpread
    const heightOfFotospread = spreadY1 - spreadY0

    let x0, x1, y0, y1, width, height

    const midpointOfSpread = (spreadX1 + spreadX0) / 2
    //  console.log("midpointOfSpread - ", midpointOfSpread);
    //  console.log("spreadX1 - ", spreadX1);
    // console.log("spreadY0", spreadY0);
    // console.log("spreadY1", spreadY1);


    const { fotoFrameContainerStyles, fotoFrameStyles } = fotoSpreadTemplates[templateIndex][indexOfFrame]
            
    switch(true) {

        /**
        |--------------------------------------------------
        | FIRST spread - single frame
        |--------------------------------------------------
        */
        case (templateIndex === 0) && (indexOfFrame === 0): 
            x0 = spreadX0 + fotoFrameContainerStyles.padding
            x1 = spreadX1 - fotoFrameContainerStyles.padding
        
            y0 = spreadY0 + fotoFrameContainerStyles.padding
            y1 = spreadY1 - fotoFrameContainerStyles.padding
    
            width = x1 - x0
            height = y1 - y0
    
            return {
                // x0,
                // x1, 
                // y0, 
                // y1,
                left: x0, 
                top: y0, 
                right: x1,
                bottom: y1,
                width, 
                height
            }
        break;


        /**
        |--------------------------------------------------
        | SECOND spread - single frame
        |--------------------------------------------------
        */
        case (templateIndex === 1) && (indexOfFrame === 0):
            x0 = spreadX0 
            x1 = spreadX1 
        
            y0 = spreadY0
            y1 = spreadY1
    
            width = x1 - x0
            height = y1 - y0
    
            return {
                left: x0, 
                top: y0, 
                right: x1,
                bottom: y1, 
                width, 
                height
            }
        break;


        /**
        |--------------------------------------------------
        | THIRD spread - single frame
        |--------------------------------------------------
        */
        case (templateIndex === 2) && (indexOfFrame === 0):
            x0 = spreadX0 
            x1 = spreadX1 - fotoFrameContainerStyles.paddingRight 
        
            y0 = spreadY0
            y1 = spreadY1

    
            width = x1 - x0
            height = y1 - y0

            return {
                left: x0, 
                top: y0,
                right: x1,
                bottom: y1,
                width, 
                height
            }
        break;
        
        /**
        |--------------------------------------------------
        | FORTH spread - TWO frames
        |--------------------------------------------------
        */
       case (templateIndex === 3):
            switch(true) {
                case (indexOfFrame === 0):
                    x0 = spreadX0 + fotoFrameContainerStyles.padding
                    x1 = midpointOfSpread - fotoFrameContainerStyles.padding
                
                    y0 = spreadY0 + fotoFrameContainerStyles.padding
                    y1 = spreadY1 - fotoFrameContainerStyles.padding

                    width = x1 - x0
                    height = y1 - y0
        
                    return {
                        left: x0, 
                        top: y0,
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;

                case (indexOfFrame === 1):
                    x0 = midpointOfSpread + fotoFrameContainerStyles.padding
                    x1 = spreadX1 - fotoFrameContainerStyles.padding
                
                    y0 = spreadY0 + fotoFrameContainerStyles.padding
                    y1 = spreadY1 - fotoFrameContainerStyles.padding

                    width = x1 - x0
                    height = y1 - y0
        
                    return {
                        left: x0, 
                        top: y0, 
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;
            }
        break;


         /**
        |--------------------------------------------------
        | FIFTH spread - TWO frames
        |--------------------------------------------------
        */
       case (templateIndex === 4):
            switch(true) {
                case (indexOfFrame === 0):
                    x0 = spreadX0
                    x1 = midpointOfSpread
                
                    y0 = spreadY0
                    y1 = spreadY1

                    width = x1 - x0
                    height = y1 - y0
        
                    return {
                        left: x0, 
                        top: y0,
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;

                case (indexOfFrame === 1):
                    x0 = midpointOfSpread + (((spreadX1 - midpointOfSpread) - fotoFrameStyles.width) / 2)
                    x1 = spreadX1 - (((spreadX1 - midpointOfSpread) - fotoFrameStyles.width) / 2)
                
                    y0 = spreadY0 + ((heightOfFotospread - fotoFrameStyles.height) / 2) 
                    y1 = spreadY1 - ((heightOfFotospread - fotoFrameStyles.height) / 2) 

                    width = fotoFrameStyles.width
                    height = fotoFrameStyles.height
        
                    return {
                        left: x0, 
                        top: y0, 
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;
            }
        break;


         /**
        |--------------------------------------------------
        | SIXTH spread - TWO frames
        |--------------------------------------------------
        */
       case (templateIndex === 5):
            switch(true) {
                case (indexOfFrame === 0):
                    x0 = spreadX0
                    x1 = midpointOfSpread
                
                    y0 = spreadY0
                    y1 = spreadY1

                    width = x1 - x0
                    height = y1 - y0
        
                    return {
                        left: x0, 
                        top: y0,
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;

                case (indexOfFrame === 1):
                    x0 = midpointOfSpread + (((spreadX1 - midpointOfSpread) - fotoFrameStyles.width) / 2)
                    x1 = spreadX1 - (((spreadX1 - midpointOfSpread) - fotoFrameStyles.width) / 2)
                
                    y0 = spreadY0 + ((heightOfFotospread - fotoFrameStyles.height) / 2) 
                    y1 = spreadY1 - ((heightOfFotospread - fotoFrameStyles.height) / 2) 

                    width = fotoFrameStyles.width
                    height = fotoFrameStyles.height
        
                    return {
                        left: x0, 
                        top: y0, 
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;
            }
        break;


         /**
        |--------------------------------------------------
        | SEVENTH spread - TWO frames
        |--------------------------------------------------
        */
       case (templateIndex === 6):
            switch(true) {
                case (indexOfFrame === 0):
                    x0 = spreadX0 + (((midpointOfSpread - spreadX0) - fotoFrameStyles.width) / 2)
                    x1 = midpointOfSpread - (((midpointOfSpread - spreadX0) - fotoFrameStyles.width) / 2)
                
                    y0 = spreadY0 + ((heightOfFotospread - fotoFrameStyles.height) / 2) 
                    y1 = spreadY1 - ((heightOfFotospread - fotoFrameStyles.height) / 2) 

                    width = fotoFrameStyles.width
                    height = fotoFrameStyles.height
        
                    return {
                        left: x0, 
                        top: y0,
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;

                case (indexOfFrame === 1):
                    x0 = midpointOfSpread + (((spreadX1 - midpointOfSpread) - fotoFrameStyles.width) / 2)
                    x1 = spreadX1 - (((spreadX1 - midpointOfSpread) - fotoFrameStyles.width) / 2)
                
                    y0 = spreadY0 + ((heightOfFotospread - fotoFrameStyles.height) / 2) 
                    y1 = spreadY1 - ((heightOfFotospread - fotoFrameStyles.height) / 2) 

                    width = fotoFrameStyles.width
                    height = fotoFrameStyles.height
        
                    return {
                        left: x0, 
                        top: y0, 
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;
            }
        break;


        /**
        |--------------------------------------------------
        | EIGHTH spread - TWO frames
        |--------------------------------------------------
        */
    //    flex: 1,
    //    paddingLeft:calculatePercentOfTotal(7, slideWidth),  
    //    paddingRight:calculatePercentOfTotal(7, slideWidth),  
       case (templateIndex === 7):
            switch(true) {
                case (indexOfFrame === 0):
                    x0 = spreadX0 + fotoFrameContainerStyles.paddingLeft
                    x1 = midpointOfSpread - fotoFrameContainerStyles.paddingRight
                
                    y0 = spreadY0
                    y1 = spreadY1

                    width = x1 - x0
                    height = y1 - y0
        
                    return {
                        left: x0, 
                        top: y0,
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;

                case (indexOfFrame === 1):
                    x0 = midpointOfSpread + fotoFrameContainerStyles.paddingLeft 
                    x1 = spreadX1 - -fotoFrameContainerStyles.paddingRight
                
                    y0 = spreadY0
                    y1 = spreadY1

                    width = x1 - x0
                    height = y1 - y0
        
                    return {
                        left: x0, 
                        top: y0, 
                        right: x1,
                        bottom: y1,
                        width, 
                        height
                    }
                break;
            }
        break;


    
    }   

}
