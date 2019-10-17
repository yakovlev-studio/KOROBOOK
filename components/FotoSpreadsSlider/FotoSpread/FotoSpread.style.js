import { StyleSheet, Dimensions } from "react-native";
import { calculatePercentOfTotal } from "korobook/utils/utils";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");
const viewportMiddlePoint = calculatePercentOfTotal(50, viewportWidth);
const verticalMargin = calculatePercentOfTotal(2.5, viewportWidth);
const horizontalMargin = calculatePercentOfTotal(5, viewportWidth);

// Slider
const sliderWidth = viewportWidth;
const sliderHeight = viewportHeight;

// Single Slide
const slideWidth = calculatePercentOfTotal(90, viewportWidth);
const slideHeight = calculatePercentOfTotal(50, slideWidth);
const halfOfFotoSpread = calculatePercentOfTotal(50, slideWidth);

const itemHeight = slideHeight + verticalMargin * 2;
const itemWidth = slideWidth + horizontalMargin * 2;

const styles = StyleSheet.create({
  fotoSpread: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin,
    paddingVertical: verticalMargin
  },

  fotoSpreadInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc"
  },
  dashContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "50%"
  },
  dash: {
    height: "100%",
    flexDirection: "column"
  },
  photo: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  }
});

export {
  styles as default,
  viewportWidth,
  viewportHeight,
  viewportMiddlePoint,
  sliderWidth,
  slideWidth,
  slideHeight,
  sliderHeight,
  halfOfFotoSpread,
  itemHeight
};
