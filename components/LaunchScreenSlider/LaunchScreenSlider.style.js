import { StyleSheet } from "react-native";
import { colors } from "korobook/App.style";

export default StyleSheet.create({
  carouselContainer: {
    paddingVertical: 20
    // borderWidth: 2,
    // borderColor: "black"
  },
  title: {
    paddingHorizontal: 15,
    backgroundColor: "transparent",
    color: colors.black,
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    color: colors.black,
    fontSize: 26,
    textAlign: "center"
  },
  slider: {
    marginTop: 15
  },
  sliderContentContainer: {
    paddingVertical: 30
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1
  }
});
