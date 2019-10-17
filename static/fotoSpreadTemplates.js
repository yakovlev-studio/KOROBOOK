import { calculatePercentOfTotal } from "korobook/utils/utils";
import { slideWidth } from "korobook/components/FotoSpreadsSlider/FotoSpread/FotoSpread.style.js";

const halfOfFotoSpreadWidth = slideWidth * 0.5;
const borderColor = "#333";
const borderWidth = 0.5;

const lg = [41, 1];
const md = [31, 1];
const sm = [21, 1];

export default {
  // 7-3
  1: {
    serialNumber: "7-3",
    left: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        alignContent: "space-between",
        flexWrap: "wrap",

        fotoFrames: {
          1: {
            width: "48%",
            height: "49%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: "48%",
            height: "49%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          3: {
            width: "48%",
            height: "49%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          4: {
            width: "48%",
            height: "49%",
            borderColor,
            borderWidth,
            iconSize: sm
          }
        }
      }
    },

    right: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(40, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: "column",
        alignContent: "space-between",
        alignItems: "flex-start",
        justifyContent: "space-between",

        fotoFrames: {
          1: {
            width: "100%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: md
          },
          2: {
            width: "100%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: md
          },
          3: {
            width: "100%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: md
          }
        }
      }
    }
  },

  // 7-2
  2: {
    serialNumber: "7-2",
    left: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            iconSize: lg
          }
        }
      }
    },

    right: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(10, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "space-between",
        justifyContent: "space-between",
        flexWrap: "wrap",

        fotoFrames: {
          1: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: "48%",
            height: "66%",
            borderColor,
            borderWidth,
            iconSize: md
          },
          3: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          4: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          5: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          }
        }
      }
    }
  },

  // 7-1
  3: {
    serialNumber: "7-1",
    left: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: halfOfFotoSpreadWidth,
      paddingLeft: 0,
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,

      fotoFramesContainer: {
        flex: 1,

        fotoFrames: {
          1: {
            flex: 1,
            iconSize: lg
          }
        }
      }
    },
    right: {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: halfOfFotoSpreadWidth,
      paddingLeft: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingTop: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingRight: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),
      paddingBottom: calculatePercentOfTotal(7, halfOfFotoSpreadWidth),

      fotoFramesContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "flex-start",
        alignContent: "space-between",
        justifyContent: "space-between",
        flexWrap: "wrap",

        fotoFrames: {
          1: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          2: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          3: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          4: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          5: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          },
          6: {
            width: "48%",
            height: "32%",
            borderColor,
            borderWidth,
            iconSize: sm
          }
        }
      }
    }
  }
};
