import { StyleSheet, Dimensions, Platform } from "react-native";
import colors from "korobook/constants/colors";

const IS_IOS = Platform.OS === "ios";
const { width: viewportWidth, height: viewportHeight } = Dimensions.get("window");

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}
const itemHorizontalMargin = wp(7);

export const slideHeight = viewportHeight * 0.35;
export const sliderWidth = viewportWidth;

const entryBorderRadius = 14;

export default StyleSheet.create({
  slideInnerContainer: {
    width: sliderWidth,
    height: slideHeight,
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18 // needed for shadow
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius
  },
  categoryContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering isssue
    borderRadius: entryBorderRadius,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    paddingHorizontal: 20
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 18,
    textAlign: "center"
  },
  title: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
    letterSpacing: 0.4
  },
  subtitle: {
    marginTop: 10,
    color: "white",
    fontSize: 15
  }
});
