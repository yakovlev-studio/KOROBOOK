import { StyleSheet } from "react-native";
import colors from "korobook/constants/colors";
import { calculatePercentOfTotal, viewportHeight, viewportWidth, wp } from "korobook/utils/utils";

export const slideHeight = viewportHeight * 0.34;
export const slideWidth = viewportWidth * 0.9;

const imageGalleryWidth = calculatePercentOfTotal(80, viewportWidth);
const addImageButtonWidth = calculatePercentOfTotal(20, viewportWidth);

const imageGalleryItemWidth = calculatePercentOfTotal(20, viewportWidth);
const imageGalleryItemHeight = calculatePercentOfTotal(15, viewportHeight);

export default StyleSheet.create({
  container: {
    flex: 1
  },
  scrollview: {
    flex: 1
  },
  floatingFoto: {
    ...StyleSheet.absoluteFillObject,
    height: wp(16.6666667),
    width: wp(16.6666667)
  }
});
