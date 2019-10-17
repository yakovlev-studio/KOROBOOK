import {
  viewportHeight,
  viewportWidth,
  viewportMiddlePoint,
  halfOfFotoSpread,
  slideWidth,
  slideHeight
} from "korobook/components/FotoSpreadsSlider/FotoSpread/FotoSpread.style";
import { calculatePercentOfTotal } from "korobook/utils/utils";
import { templates, fotoSpreadTemplates } from "korobook/data/FotoSpreadTemplates";

var borderColor = "#ccc";
var borderWidth = 0.5;

// COMPUTED FOTOSPREAD EDGE POINTS
var FSX0 = (viewportWidth - slideWidth) / 2;
var FSX1 = FSX0 + slideWidth;
var FSY0 = viewportHeight / 2 - slideHeight / 2; // ВЫЧИСЛЯЕМ ВЕРХНУЮ ТОЧКУ СЛАЙДА ИСХОДЯ ИЗ ПРЕДПОЛОЖЕНИЯ ЧТО СЛАЙДЫ ЦЕНТРУЮТСЯ
var FSY1 = FSY0 + slideHeight;

export class FotoSpreadTemplate {
  constructor(props) {
    this.fotoSpread = props;
  }

  get fotoSpread() {
    return this._fotoSpread;
  }

  set fotoSpread(props) {
    var fotoSpread = new Map();
    var fotoSpreadStyles = this._generateStyles(props);
    // console.log(fotoSpreadStyles);
    var isDashRequired = this._isDashRequired(fotoSpreadStyles);
    fotoSpread.set("fotoSpreadStyleSheet", fotoSpreadStyles);
    fotoSpread.set("meta", {
      isDashRequired
    });

    console.log("==========FOTOSPREAD=============");
    console.log(fotoSpread);
    console.log("==========FOTOSPREAD=============");
    this._fotoSpread = fotoSpread;
  }

  _mapCellsToPhotoFramesIndices(styles) {
    var modifiedStyles = new Map(styles);

    // console.log(modifiedStyles);
    for (let [key, value] of modifiedStyles) {
      value.mapCellsToProps = new Map();
      // console.log(value);
      var arr = [];

      for (let [key, val] of value.styles.fotoFrames) {
        arr = [...val.meta.position.row, ...val.meta.position.col];
        value.mapCellsToProps.set(arr, key);
      }
    }

    return modifiedStyles;
  }

  _computeTracksCoordinates(styles) {
    var modifiedStyles = new Map(styles);

    for (let [key, value] of modifiedStyles) {
      var res = this._computeTrackCoordinates(value, key);
      value.tracks = {
        colsLines: [...res.colsLines],
        rowsLines: [...res.rowsLines],
        fotoFramesContainer: { ...res.edgePointsOfFotoFramesContainer }
      };
    }
    return modifiedStyles;
  }

  _isDashRequired(props) {
    return props.size > 1 ? true : false;
  }

  _generateStyles(props) {
    var styles = new Map();
    var sizeOfProps = props.length;
    // console.log(props);

    props.forEach((mapObj, index) => {
      var style = {};

      var outerFotoFramesContainer = {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };

      var outerFotoFramesContainerProps = mapObj.get("outerFotoFramesContainer");
      var { rows, cols, direction = undefined } = mapObj.get("innerFotoFramesContainer");
      var fotoFramesProps = mapObj.get("fotoFrames");

      // console.log(innerFotoFramesContainerProps)

      // outerFotoFramesContainerProps
      if ("padding" in outerFotoFramesContainerProps) {
        var { padding } = outerFotoFramesContainerProps;
        if (typeof padding === "number") {
          outerFotoFramesContainer = Object.assign(outerFotoFramesContainer, {
            padding
          });
        } else if (Array.isArray(padding) && padding.length === 2) {
          // console.log(padding);
          outerFotoFramesContainer = Object.assign(outerFotoFramesContainer, {
            paddingVertical: padding[0],
            paddingHorizontal: padding[1]
          });
        } else if (Array.isArray(padding) && padding.length === 4) {
          outerFotoFramesContainer = Object.assign(outerFotoFramesContainer, {
            paddingTop: padding[0],
            paddingRight: padding[1],
            paddingBottom: padding[2],
            paddingLeft: padding[3]
          });
        }
      }

      if (sizeOfProps > 1) {
        switch (index) {
          case 0:
            outerFotoFramesContainer = Object.assign(outerFotoFramesContainer, {
              right: halfOfFotoSpread
            });
            break;
          case 1:
            outerFotoFramesContainer = Object.assign(outerFotoFramesContainer, {
              left: halfOfFotoSpread
            });
            break;
        }
      } else if (sizeOfProps === 1) {
        outerFotoFramesContainer = Object.assign(outerFotoFramesContainer, {
          right: 0
        });
      }

      style = Object.assign(style, { outerFotoFramesContainer });
      // console.log(style.outerFotoFramesContainer.paddingVertical);

      style.fotoFramesContainer = {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "flex-start",
        alignContent: "space-between",
        flexWrap: "wrap",
        meta: {
          layout: {
            rows: rows,
            cols: cols
          }
        }
      };

      // innerFotoFramesContainerProps
      if (cols > 1) {
        style.fotoFramesContainer.flexDirection = "row";
      } else if (cols === 1) {
        style.fotoFramesContainer.flexDirection = "column";
      }

      if (direction) {
        direction === "column"
          ? (style.fotoFramesContainer.flexDirection = "column")
          : (style.fotoFramesContainer.flexDirection = "row");
      }

      // fotoFrames
      var sizeOfSingleRow = 100 / rows;
      var sizeOfSingleCol = 100 / cols;

      var rowLines = rows + 1;
      var colLines = cols + 1;

      var borderTopWidth = 0.5;
      var borderRightWidth = 0.5;
      var borderBottomWidth = 0.5;
      var borderLeftWidth = 0.5;

      if (cols === 1 && rows === 1 && style.outerFotoFramesContainer.padding === 0) {
        borderTopWidth = 0;
        borderRightWidth = 0;
        borderBottomWidth = 0;
        borderLeftWidth = 0;
      }

      var heightOfFotoFrame = null;
      var widthOfFotoFrame = null;
      var fotoFrames = new Map();

      console.log(index);
      var side = "left";
      if (index === 1) {
        side = "right";
      }

      fotoFramesProps.forEach((frame, index) => {
        var differenceRows = frame.row[1] - frame.row[0];
        var differenceCols = frame.col[1] - frame.col[0];

        heightOfFotoFrame = differenceRows * sizeOfSingleRow;
        widthOfFotoFrame = differenceCols * sizeOfSingleCol;

        // Проверяем сколько процентов нужно вычесть из ширины и высоты для установки margin
        var horizontalMargin = 1 / differenceCols;
        var verticalMargin = 1 / differenceRows;
        if (rows === 3) {
          verticalMargin = 1.03 / differenceRows;
        }
        if (cols === 1 || differenceCols === cols) {
          horizontalMargin = 0;
        }
        if (rows === 1 || differenceRows === rows) {
          verticalMargin = 0;
        }
        if (cols > 1 && rows > 1 && cols === rows && style.outerFotoFramesContainer.padding === 0) {
          horizontalMargin = 0.3;
          verticalMargin = 0.3;
        }

        if (style.outerFotoFramesContainer.paddingVertical === 0) {
          borderTopWidth = 0;
          borderBottomWidth = 0;
        }

        fotoFrames.set(index + 1, {
          width:
            "" + (widthOfFotoFrame - calculatePercentOfTotal(horizontalMargin, slideWidth)) + "%",
          height:
            "" + (heightOfFotoFrame - calculatePercentOfTotal(verticalMargin, slideWidth)) + "%",
          borderColor: borderColor,
          borderTopWidth: borderTopWidth,
          borderRightWidth: borderRightWidth,
          borderBottomWidth: borderBottomWidth,
          borderLeftWidth: borderLeftWidth,
          meta: {
            position: {
              row: frame.row,
              col: frame.col
            }
          },
          side: side
        });
      });

      style = Object.assign(style, { fotoFrames });

      // console.log(style)

      if (index === 1) {
        styles.set("right", { styles: style });
      } else if (index === 0) {
        styles.set("left", { styles: style });
      }
    });

    // console.log(styles);

    return this._computeTracksCoordinates(this._mapCellsToPhotoFramesIndices(styles));
  }

  /**
   * Compute rowLines and colLines coordinates for a single fotoFramesContainer of the FotoSpread
   *
   * @param {*} {styles}
   * @memberof FotoSpreadTemplate
   * @returns coordsOfLayout = {
   *  colsLines: [1,2,3],
   *  rowsLines: [1,2,3],
   * }
   */
  _computeTrackCoordinates({ styles }, side) {
    var FFrCX0, FFrCX1, FFrCY0, FFrCY1;
    // console.log(fotoSpreadStyleSheet);
    var { outerFotoFramesContainer, fotoFramesContainer, fotoFrames } = styles;

    // console.log('fotoFramesContainer');
    // console.log(fotoFramesContainer);

    // PADDINGS
    var paddLeft =
      outerFotoFramesContainer.padding ||
      outerFotoFramesContainer.paddingHorizontal ||
      outerFotoFramesContainer.paddingLeft ||
      0;
    var paddRight =
      outerFotoFramesContainer.padding ||
      outerFotoFramesContainer.paddingHorizontal ||
      outerFotoFramesContainer.paddingRight ||
      0;
    var paddTop =
      outerFotoFramesContainer.padding ||
      outerFotoFramesContainer.paddingVertical ||
      outerFotoFramesContainer.paddingTop ||
      0;
    var paddBottom =
      outerFotoFramesContainer.padding ||
      outerFotoFramesContainer.paddingVertical ||
      outerFotoFramesContainer.paddingBottom ||
      0;

    // COMPUTE EDGE POINTS OF FOTOFRAMESCONTAINER

    var edgePointsOfFotoFramesContainer = {};

    if (side === "left") {
      FFrCX0 = FSX0 + paddLeft;
      FFrCX1 = viewportMiddlePoint - paddRight;
      FFrCY0 = FSY0 + paddTop;
      FFrCY1 = FSY1 - paddBottom;
    } else if (side === "right") {
      FFrCX0 = viewportMiddlePoint + paddLeft;
      FFrCX1 = FSX1 - paddRight;
      FFrCY0 = FSY0 + paddTop;
      FFrCY1 = FSY1 - paddBottom;
    }

    edgePointsOfFotoFramesContainer.x0 = FFrCX0;
    edgePointsOfFotoFramesContainer.x1 = FFrCX1;
    edgePointsOfFotoFramesContainer.y0 = FFrCY0;
    edgePointsOfFotoFramesContainer.y1 = FFrCY1;

    // HEIGHT/WIDTH OF FOTOFRAMESCONTAINER
    var heightOfFotoFramesContainer = FFrCY1 - FFrCY0;
    var widthOfFotoFramesContainer = FFrCX1 - FFrCX0;

    // AMOUNT OF FOTOFRAMES
    var amountOfFotoFrames = fotoFrames.size;

    // ESTABLISH STARTING POINTS FOR x AND y COORDINATES
    var y0 = FFrCY0;
    var y1 = 0;
    var x0 = FFrCX0;
    var x1 = 0;

    // COMPUTE PARAMS OF SINGLE ROW AND COLUMN
    var sizeOfSingleRow = heightOfFotoFramesContainer / fotoFramesContainer.meta.layout.rows;
    var sizeOfSingleCol = widthOfFotoFramesContainer / fotoFramesContainer.meta.layout.cols;

    var computeTracksCoodinates = function(sizeOfSingleTrack, tracks) {
      if (tracks === "rows") {
        point0 = FFrCY0;
        point1 = 0;
      } else if (tracks === "cols") {
        point0 = FFrCX0;
        point1 = 0;
      }
      var result = [];
      for (let track = 0; track < fotoFramesContainer.meta.layout[tracks]; track++) {
        point1 = point0 + sizeOfSingleTrack;
        if (!result.includes(point0)) {
          result.push(point0);
        }
        if (!result.includes(point1)) {
          result.push(point1);
        }
        point0 = point1;
      }

      return result;
    };

    // HERE WE PUT COORDS OF LAYOUT
    var coordsOfLayout = {
      rowsLines: [].concat(computeTracksCoodinates(sizeOfSingleRow, "rows")),
      colsLines: [].concat(computeTracksCoodinates(sizeOfSingleCol, "cols")),
      edgePointsOfFotoFramesContainer
    };

    return coordsOfLayout;
  }
}
