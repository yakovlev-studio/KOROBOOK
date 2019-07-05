import { Dimensions } from 'react-native'
import { slideHeight, slideWidth } from '../FotoSpreadsSlider/FotoSpread/FotoSpread.style'
import calculateFotoSize from './calculateFotoSize'
import fotoSpreadTemplates from 'korobook/static/fotoSpreadTemplates'





const { width: viewportWidth } = Dimensions.get('window')
const { height: viewportHeight } = Dimensions.get('window')
    
    // Position of an activeSpread on X axios
    const fotoSpreadX0 = (viewportWidth - slideWidth) / 2
    const fotoSpreadX1 = viewportWidth - fotoSpreadX0

    // Position of an activeSpread on Y axios
    const fotoSpreadY0 = slideHeight * 0.5
    const fotoSpreadY1 = fotoSpreadY0 + slideHeight

    const midpointOfSpread = (fotoSpreadX1 + fotoSpreadX0) / 2

    
/**
 * Обновляет коллекцию фотографии прикрепленные к активному фоторазвороту
 */
const updateFotosOfActiveFotoSpread = ({
        fotoSpreads, 
        activeFotoSpread, 
        selectedFoto, 
        activeFotoTemplate,
        topCoordinateOfFloatingFoto,
        leftCoordinateOfFloatingFoto,
}) => {
        
        
        // console.log("fotoSpreadX0", fotoSpreadX0);
        // console.log("fotoSpreadX1", fotoSpreadX1);
        // console.log("fotoSpreadY0", fotoSpreadY0);
        // console.log("fotoSpreadY1", fotoSpreadY1);
        // console.log("leftCoordinateOfFloatingFoto", leftCoordinateOfFloatingFoto);
        // console.log("topCoordinateOfFloatingFoto", topCoordinateOfFloatingFoto);

        
        const fotoSpread = fotoSpreads[activeFotoSpread]

         const amountOfFotoFrames = fotoSpread.fotoSpreadTemplate.length

         const amountOfAttachedFotos = fotoSpread.fotos.length

        const arrOfCoords = []

        Array.from({ length: amountOfFotoFrames }).forEach((_, i) => {
                arrOfCoords.push(calculateFotoSize(activeFotoTemplate, i))
                
        })


        let fotos = Array.from ({ length: amountOfFotoFrames })

        // console.log("arrOfCoords", arrOfCoords)
        if(fotoSpread.fotos.length > 0){
                fotos = [...fotoSpread.fotos]
                // console.log('fotos > 0 - ', fotos);
        }
      

          // ОДИН фрейм
        if (arrOfCoords.length === 1 && amountOfAttachedFotos > 0) {
                fotoSpread.fotos = []
        }
        if(arrOfCoords.length === 1) {
                
                const [ coordinates ] = arrOfCoords
                const { top, bottom, left, right, width, height } = coordinates

                if( ((leftCoordinateOfFloatingFoto > left) && (leftCoordinateOfFloatingFoto < right)) 
                        && ((topCoordinateOfFloatingFoto > top) && (topCoordinateOfFloatingFoto < bottom) )
                ){
                   fotos[0] = selectedFoto
                } else {
                        console.log("Not in target area")
                }
        }



        // ДВА фрейма
        if(arrOfCoords.length === 2) {
                const [ firstFrame, secondFrame ] = arrOfCoords
                // console.log("firstFrame - ", firstFrame)
                // console.log("secondFrame - ", secondFrame)

                if( ((leftCoordinateOfFloatingFoto > firstFrame.left) && (leftCoordinateOfFloatingFoto < firstFrame.right)) 
                        && ((topCoordinateOfFloatingFoto > firstFrame.top) && (topCoordinateOfFloatingFoto < firstFrame.bottom) )
                ){

                        fotos[0] = selectedFoto
                } else if( ( (leftCoordinateOfFloatingFoto > secondFrame.left ) && (leftCoordinateOfFloatingFoto < secondFrame.right)) 
                && ((topCoordinateOfFloatingFoto > secondFrame.top) && (topCoordinateOfFloatingFoto < secondFrame.bottom) )
                ){
         
                        fotos[1] = selectedFoto  
                }
                else {
                        console.log("Not in target area")
                }
        }

        fotoSpread.fotos = fotos 
        return fotoSpread

};

// store.subscribe(updateFotosOfActiveFotoSpread)


// store.subscribe(updateFotosOfActiveFotoSpread)

// const mapStateToProps = (state) => {
//         console.log(state);
//         return {
//                 xAxisOffsetOfAnimatedFotospreadFoto: state.fotoBook.xAxisOffsetOfAnimatedFotospreadFoto,
//                 yAxisOffsetOfAnimatedFotospreadFoto: state.fotoBook.yAxisOffsetOfAnimatedFotospreadFoto 
//         }
// } 



export default updateFotosOfActiveFotoSpread





