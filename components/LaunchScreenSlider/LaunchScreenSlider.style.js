import { StyleSheet } from "react-native";
import colors from "korobook/constants/colors";

export default StyleSheet.create({
  carouselContainer: {
    paddingVertical: 20
  },
  title: {
    paddingHorizontal: 15,
    backgroundColor: "transparent",
    color: colors.black,
    fontSize: 56,
    fontWeight: "bold",
    textAlign: "center"
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    color: colors.black,
    fontSize: 24,
    textAlign: "center"
  },
  paginationContainer: {
    paddingBottom: 16
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1
  }
});
