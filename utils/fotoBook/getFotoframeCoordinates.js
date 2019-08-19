import templates from 'korobook/static/fotoSpreadTemplates';
import {
  fotoSpreadX0,
  fotoSpreadX1,
  fotoSpreadY0,
  fotoSpreadY1,
  midpointOfSpread,
  convertPercentToDecimal
} from 'korobook/components/Products/FotoBook/FotoSpreadsSlider/FotoSpread/FotoSpread.style';



function getComputedFotoFrameCoordinates (indexOfTemplate) {

  // Create Cache object
  if(!getComputedFotoFrameCoordinates.cache) {
    getComputedFotoFrameCoordinates.cache = {}
  }


  // Compute coordinates of FotoFrameContainer
  return function b (sideOfFotoSpread) {
  
    getComputedFotoFrameCoordinates.cache[sideOfFotoSpread] = {};
    getComputedFotoFrameCoordinates.cache[sideOfFotoSpread].fotoFramesContainer = {
      x0: fotoSpreadX0 + templates[indexOfTemplate][sideOfFotoSpread].paddingLeft,
      x1: midpointOfSpread - templates[indexOfTemplate][sideOfFotoSpread].paddingRight,
      y0: fotoSpreadY0 + templates[indexOfTemplate][sideOfFotoSpread].paddingTop,
      y1: fotoSpreadY1 - templates[indexOfTemplate][sideOfFotoSpread].paddingBottom,
    };

    const fotoFramesContainerComputedCoordinates = getComputedFotoFrameCoordinates.cache[sideOfFotoSpread].fotoFramesContainer;

    fotoFramesContainerComputedCoordinates.widthOfFotoFramesContainer = fotoFramesContainerComputedCoordinates.x1 - fotoFramesContainerComputedCoordinates.x0;

    fotoFramesContainerComputedCoordinates.heightOfFotoFramesContainer = fotoFramesContainerComputedCoordinates.y1 - fotoFramesContainerComputedCoordinates.y0;

    b.styles = {...fotoFramesContainerComputedCoordinates}

    //  Compute size of each frame inside FotoFrameContainer
    return function (indexOfFotoFrame) {
     
      const { 
        widthOfFotoFramesContainer, 
        heightOfFotoFramesContainer,
        x0,
        x1,
        y0,
        y1 
      } = fotoFramesContainerComputedCoordinates; 
      
      const widthOfFrame = convertPercentToDecimal(templates[indexOfTemplate][sideOfFotoSpread].fotoFramesContainer.fotoFrames[indexOfFotoFrame].width) * widthOfFotoFramesContainer;

      const heightOfFrame = convertPercentToDecimal(templates[indexOfTemplate][sideOfFotoSpread].fotoFramesContainer.fotoFrames[indexOfFotoFrame].height) * heightOfFotoFramesContainer;

      return {
        width: widthOfFrame,
        height: heightOfFrame
      }


    }
  }
}



