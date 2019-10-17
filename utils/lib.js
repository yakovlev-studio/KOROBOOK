/*
  Functions abstracting components logic are collected here
*/

import { v4 } from "uuid";
import { fotoSpreadTemplates } from "korobook/data/FotoSpreadTemplates";
import {
  viewportHeight,
  viewportWidth,
  viewportMiddlePoint,
  halfOfFotoSpread,
  slideWidth,
  slideHeight
} from "korobook/components/FotoSpreadsSlider/FotoSpread/FotoSpread.style";
import { sortedIndex, isValueInTheMiddleOfSortedArray, arraysEqual } from "./utils";

/**
 *
 *
 * @param {*} [photos=[]]
 * @param {number} [numberOfFlatListItems=10]
 * @returns {Array}
 */
const getDataForPhotoGalleryFlatList = (photos = [], numberOfFlatListItems = 10) => {
  return Array.from({ length: numberOfFlatListItems }).map((_, index) => {
    let file = null;
    index < photos.length && (file = photos[index].file);
    return { id: v4(), file };
  });
};

/**
 * Function detects if left edge coordinate of dropped photo comes in the range of fotoframesContainer coordinates
 *
 * @param {*} //coordinate - left edge of dropped photo
 * @param {*} { x0, x1, y0, y1 } - coordinates of fotoFramesContainer
 * @returns TRUE if floating photo has been dropped inside perimeter of fotoFramesContainer FALSE if not
 */
function isDroppedPhotoInFotoFramesContainer(coordinates, coords) {
  var { x0: fotoFrameLeftEdge, y0: fotoFrameTopEdge } = coordinates;
  var { x0, x1, y0, y1 } = coords;
  var xAxis = isValueInTheMiddleOfSortedArray(fotoFrameLeftEdge, x0, x1);
  var yAxis = isValueInTheMiddleOfSortedArray(fotoFrameTopEdge, y0, y1);

  return xAxis && yAxis;
}

function isPhotoFallsInTargetArea(coordinates, state) {
  var { x0, y0 } = coordinates;
  var side = "left";
  if (x0 > viewportMiddlePoint) {
    side = "right";
  }

  var fotoFramesContainerCoordinates = Object.assign(
    {},
    fotoSpreadTemplates
      .get(state.photoSpreads[state.activePhotoSpread].templateIndex)
      .fotoSpread.get("fotoSpreadStyleSheet")
      .get(side).tracks.fotoFramesContainer
  );

  return isDroppedPhotoInFotoFramesContainer(coordinates, fotoFramesContainerCoordinates);
}

/**
 *
 *
 * @param {*} [state={}]
 * @param {*} [coordsOfDroppedPhoto={}]
 * @returns [1,2,1,2] - first two ints represent rowsLines, second two represent colsLines
 */
function findCellDroppedPhotoLandedOn(state = {}, coordsOfDroppedPhoto = {}) {
  var side = "left";
  var { x0, y0 } = coordsOfDroppedPhoto;
  if (x0 > viewportMiddlePoint) {
    side = "right";
  }
  var coordsOfColsLines = [
    ...fotoSpreadTemplates
      .get(state.photoSpreads[state.activePhotoSpread].templateIndex)
      .fotoSpread.get("fotoSpreadStyleSheet")
      .get(side).tracks.colsLines
  ];

  var coordsOfRowsLines = [
    ...fotoSpreadTemplates
      .get(state.photoSpreads[state.activePhotoSpread].templateIndex)
      .fotoSpread.get("fotoSpreadStyleSheet")
      .get(side).tracks.rowsLines
  ];

  var indexOfCoordinateOnColsLines = sortedIndex(coordsOfColsLines, x0);
  var indexOfCoordinateOnRowsLines = sortedIndex(coordsOfRowsLines, y0);

  var cell = [
    ...[indexOfCoordinateOnRowsLines, indexOfCoordinateOnRowsLines + 1],
    ...[indexOfCoordinateOnColsLines, indexOfCoordinateOnColsLines + 1]
  ];

  // console.log(cells);

  return cell;
}

function findFotoFrameMappedToTargetedCell(state = {}, cell = [], coordinates = {}) {
  var side = "left";
  var { x0, y0 } = coordinates;
  if (x0 > viewportMiddlePoint) {
    side = "right";
  }

  var cellsLines = [
    ...fotoSpreadTemplates
      .get(state.photoSpreads[state.activePhotoSpread].templateIndex)
      .fotoSpread.get("fotoSpreadStyleSheet")
      .get(side).mapCellsToProps
  ];

  for (let [key, value] of cellsLines) {
    if (arraysEqual(key, cell)) {
      return value;
    }
  }
  return null;
}

export {
  getDataForPhotoGalleryFlatList,
  isPhotoFallsInTargetArea,
  findCellDroppedPhotoLandedOn,
  findFotoFrameMappedToTargetedCell
};
