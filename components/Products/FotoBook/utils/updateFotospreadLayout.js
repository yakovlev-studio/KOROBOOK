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

const updateFotospreadLayout = (state={}, { xOffset=0, yOffset=0 }={}) => {
    console.log("state - ", state);

    const { 
        fotoSpreads, 
        activeFotoSpread, 
        selectedFoto, 
        activeFotoTemplate } = state

    const fotoSpread = fotoSpreads[activeFotoSpread]
    const amountOfFotoFrames = fotoSpread.fotoSpreadTemplate.length
    const amountOfAttachedFotos = fotoSpread.fotos.length
    let fotos = null

    const arrOfCoords = []

        Array.from({ length: amountOfFotoFrames }).forEach((_, i) => {
                arrOfCoords.push(calculateFotoSize(activeFotoTemplate, i))
        })

    console.log("FOTOSPREAD - ", fotoSpread)
    console.log("arrOfCoords - ", arrOfCoords);


    const isAnyUndefinedInArray = fotoSpread.fotos.some((element, index) => {
        return typeof element === 'undefined'
    })

    /**
    |--------------------------------------------------
    | 2 ФРЕЙМА
    |--------------------------------------------------
    */
    // Если один из фреймов пустой
    if(amountOfFotoFrames === 2) {

        if(isAnyUndefinedInArray || (amountOfFotoFrames > fotoSpread.fotos.length)) {
            console.log("xOffset - ", xOffset);
    
            // Если смещение произошло
            if(xOffset !== 0) {
                // Нужно узнать какой индекс у элемента с типом undefined
                if(typeof fotoSpread.fotos[0] === 'undefined') {
                   fotos = [ {...fotoSpread.fotos[1]}, undefined ] 
                } else if(typeof fotoSpread.fotos[1] === 'undefined')  {
                    fotos = [ undefined, {...fotoSpread.fotos[0]} ] 
                }
                fotoSpread.fotos = fotos
                return fotoSpread
            }
            
        }

        if(!isAnyUndefinedInArray) {
            console.log("ДВЕ ФОТКИ В РАЗВОРОТЕ ПРИ ДВУХ ФРЕЙМАХ");
        }

    }
  

    return fotoSpread 
  
}

export default updateFotospreadLayout
