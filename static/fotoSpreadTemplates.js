import uuid from 'uuid'

const borderColor = '#333'
const borderWidth = .5

// Loading utils...
import { calculatePercentOfTotal } from '../utils/utils'
import { slideWidth, slideHeight } from '../components/Products/FotoBook/FotoSpreadsSlider/FotoSpread/FotoSpread.style'


export default [

    /**
    |--------------------------------------------------
    | SINGLE fotoFrame
    |--------------------------------------------------
    */

    [
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
               flex: 1,
               padding: calculatePercentOfTotal(5, slideWidth)
            },
            fotoFrameStyles: {
                borderWidth,
                borderColor,
                flex: 1
            }
        }
    ],

    [
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1
             },
            fotoFrameStyles: {
                flex:1   
            }
        
        }
    ],
    [
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                paddingRight: calculatePercentOfTotal(20, slideWidth)
             },
            fotoFrameStyles: {
                flex:1,
                borderRightWidth: borderWidth,
                borderRightColor: borderColor,
                borderLeftWidth: borderWidth,
                borderLeftColor: borderColor  
            }
        
        }
    ],


    /**
    |--------------------------------------------------
    | FORTH spread - TWO frames
    |--------------------------------------------------
    */
  
    [
        
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                padding: calculatePercentOfTotal(3, slideWidth)
            },
            fotoFrameStyles: {
                flex:1,
                borderWidth,
                borderColor,
            }
        },
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                padding: calculatePercentOfTotal(3, slideWidth)
            },
            fotoFrameStyles: {
                flex:1,
                borderWidth,
                borderColor
            }
        }
    ],


    /**
    |--------------------------------------------------
    | FIFTH spread - TWO frames
    |--------------------------------------------------
    */
    [
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1
            },
            fotoFrameStyles: {
                flex: 1
            }
        },
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            fotoFrameStyles: {
                borderWidth,
                borderColor,
                width: calculatePercentOfTotal(30, slideWidth),
                height: calculatePercentOfTotal(75, slideHeight)
                
            }
        }
    ],


     /**
        |--------------------------------------------------
        | SIXTH spread - TWO frames
        |--------------------------------------------------
        */

    [
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1
            },
            fotoFrameStyles: {
                flex: 1
            }
        },
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            fotoFrameStyles: {
                borderWidth,
                borderColor,
                width: calculatePercentOfTotal(40, slideWidth),
                height: calculatePercentOfTotal(50, slideHeight)
                
            }
        }
    ],

    /**
    |--------------------------------------------------
    | SEVENTH spread - TWO frames
    |--------------------------------------------------
    */

    [
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            fotoFrameStyles: {
                borderWidth,
                borderColor,
                width: calculatePercentOfTotal(43, slideWidth),
                height: calculatePercentOfTotal(91, slideHeight),
            }
        },
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            },
            fotoFrameStyles: {
                borderWidth,
                borderColor,
                width: calculatePercentOfTotal(25, slideWidth),
                height: calculatePercentOfTotal(25, slideWidth)
                
            }
        }
    ],

    /**
    |--------------------------------------------------
    | EIGHTH spread - TWO frames
    |--------------------------------------------------
    */

    [
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                paddingLeft:calculatePercentOfTotal(7, slideWidth),  
                paddingRight:calculatePercentOfTotal(7, slideWidth),  
            },
            fotoFrameStyles: {
                borderRightWidth: borderWidth,
                borderRightColor: borderColor,
                borderLeftWidth: borderWidth,
                borderLeftColor: borderColor,
                flex: 1
            }
        },
        {
            id: uuid.v4(),
            fotoFrameContainerStyles: {
                flex: 1,
                paddingLeft:calculatePercentOfTotal(7, slideWidth),  
                paddingRight:calculatePercentOfTotal(7, slideWidth),  
            },
            fotoFrameStyles: {
                borderRightWidth: borderWidth,
                borderRightColor: borderColor,
                borderLeftWidth: borderWidth,
                borderLeftColor: borderColor,
                flex: 1
            }
        },
    ],

// //6
//     [
//         {
//             id: uuid.v4(),
//             fotoFrameStyles: {
//                 width: calculatePercentOfTotal(40, slideWidth),
//                 height: calculatePercentOfTotal(100, slideHeight),
//                 borderWidth,
//                 borderColor
//             },
//             fotoFrameContainerStyles: {
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center'
//             }
//         },
//         {
//             id: uuid.v4(),
//             fotoFrameStyles: {
//                 width: calculatePercentOfTotal(30, slideWidth),
//                 height: calculatePercentOfTotal(70, slideHeight),
//                 borderWidth,
//                 borderColor

//             },
//             fotoFrameContainerStyles: {
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center'
            
//             }
//         }
//     ],

// //7
//     [
//         {
//             id: uuid.v4(),
//             fotoFrameStyles: {
//                 flex: 1,
//                 borderWidth,
//                 borderColor
//             },
//             fotoFrameContainerStyles: {
//                 flex: 1
//             }
//         },
//         {
//             id: uuid.v4(),
//             fotoFrameStyles: {
//                 width: calculatePercentOfTotal(40, slideWidth),
//                 height: calculatePercentOfTotal(70, slideHeight),
//                 borderWidth,
//                 borderColor

//             },
//             fotoFrameContainerStyles: {
//                 flex: 1,
//                 alignItems: 'center',
//                 justifyContent: 'center'
            
//             }
//         }
//     ],
// //8
//     [
        // {
        //     id: uuid.v4(),
        //     fotoFrameStyles: {
        //         width: widthOfFrameWithMargin(20, 2),
        //         height: heightOfFrameWithMargin(20),
        //         borderWidth,
        //         borderColor

        //     },
        //     fotoFrameContainerStyles: {
        //         flex: 1,
        //         alignItems: 'center',
        //         justifyContent: 'center'
               
            
        //     }
        // },

        // {
        //     id: uuid.v4(),
        //     fotoFrameStyles: {
        //         width: 80,
        //         height: 80,
        //         borderWidth,
        //         borderColor
        //     },
        //     fotoFrameContainerStyles: {
        //         flex: 1,
        //         alignItems: 'center',
        //         justifyContent: 'center'
        //     }
        // },
       
    // ]
       
    





]