// import calculateFotoSize from './calculateFotoSize'
// import fotoSpreadTemplates from 'korobook/static/fotoSpreadTemplates'

import { viewportWidth, compose } from '../utils';
import { 
        slideHeight, 
        slideWidth 
} from 'korobook/components/Products/FotoBook/FotoSpreadsSlider/FotoSpread/FotoSpread.style';
import { configureStore } from 'korobook/store/configureStore';



const fetchState = () => {
        return configureStore().getState()
}



// Position of an activeSpread on X axios
 const fotoSpreadX0 = (viewportWidth - slideWidth) / 2
 const fotoSpreadX1 = viewportWidth - fotoSpreadX0

// Position of an activeSpread on Y axios
 const fotoSpreadY0 = slideHeight * 0.5
 const fotoSpreadY1 = fotoSpreadY0 + slideHeight

 const midpointOfSpread = (fotoSpreadX1 + fotoSpreadX0) / 2



 const convertPercentToDecimal = (percent) => {
        
        return parseFloat(percent) / 100.0;
 } 
        

        
const fotoGoesInFrame = (fotoBook) => {
        
        const { 
                leftCoordinateOfFloatingFoto, 
                topCoordinateOfFloatingFoto, 
                fotoSpread: { fotoSpreadTemplate } 
        } = fotoBook
        let coords = {}

        // for(let key in fotoSpreadTemplate) {
        //         let padding =  fotoSpreadTemplate[key].padding ? fotoSpreadTemplate[key].padding : null
        //         coords[key] = Array.from({ length: Object.keys(fotoSpreadTemplate[key].fotoFramesContainer.fotoFrames).length })

        //         coordsOfFotoFrameContainer = {
        //                 x0: fotoSpreadTemplate[key].left !== 0 ? (fotoSpreadTemplate[key].left + padding) : (fotoSpreadX0 + padding),
        //                 x1: fotoSpreadTemplate[key].right !== 0 ? (fotoSpreadTemplate[key].right - padding) : (fotoSpreadX1 - padding),
        //                 y0: fotoSpreadTemplate[key].top !== 0 ? (fotoSpreadTemplate[key].top + padding) : (fotoSpreadY0 + padding),
        //                 y1: fotoSpreadTemplate[key].bottom !== 0 ? (fotoSpreadTemplate[key].bottom - padding) : (fotoSpreadY1 - padding)
        //         }

        //       coordsOfFotoFrameContainer.width = coordsOfFotoFrameContainer.x1 - coordsOfFotoFrameContainer.x0
        //       coordsOfFotoFrameContainer.height = coordsOfFotoFrameContainer.y1 - coordsOfFotoFrameContainer.y0
              
                


        //         coords[key] = coords[key].map((_, i) => {

        //               let width = convertPercentToDecimal(fotoSpreadTemplate[key].fotoFramesContainer.fotoFrames[i + 1].width) * coordsOfFotoFrameContainer.width
        //               let height = convertPercentToDecimal(fotoSpreadTemplate[key].fotoFramesContainer.fotoFrames[i + 1].height) * coordsOfFotoFrameContainer.height

                  
        //         //       console.log('Width of FotoFrameContainer - ', coordsOfFotoFrameContainer.width)  
        //         //       console.log('Width of Frame - ', width)  
        //         //       console.log('Height of FotoFrameContainer - ', coordsOfFotoFrameContainer.height)  
        //         //       console.log('Height of Frame - ', height)

        //         //       let x0 = coordsOfFotoFrameContainer.x0
        //         //       let x1 = coordsOfFotoFrameContainer.x0 + widthRelativeToFotoFrameContainer
                      
        //         //       return [ x0, x1  ]
      
        //         })

                


        // }

        
        
        
}


const findActiveFotoSpread = (fotoBook) => {
        return Object.assign({}, fotoBook, {fotoSpread: fotoBook.fotoSpreads[fotoBook.activeFotoSpread]})
}  




const updateFotosOfActiveFotoSpread = (...fns) => {
        return fns.reduce(compose)
}



// export default updateFotosOfActiveFotoSpread(
//         defineMainFramesOfFotoSpread,        
//         findActiveFotoSpread    
// )(state.fotoBook.fotoSpreads, state.fotoBook.activeFotoSpread)

export default () => {
        const { fotoBook } = fetchState()
        return updateFotosOfActiveFotoSpread(
                // fotoGoesInFrame,     
                findActiveFotoSpread    
        )(fotoBook)
}



// const updateFotosOfActiveFotoSpread = ({
//         fotoSpreads, 
//         activeFotoSpread, 
//         selectedFoto, 
//         activeFotoTemplate,
//         topCoordinateOfFloatingFoto,
//         leftCoordinateOfFloatingFoto,
// }) => {
        
//         const { fotoSpreadTemplate, fotos, id } = findActiveFotoSpread(fotoSpreads, activeFotoSpread);




// }

// export default updateFotosOfActiveFotoSpread





