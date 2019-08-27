import { StyleSheet } from "react-native";
import colors from "korobook/constants/colors";
import { wp, hp } from "korobook/utils/utils";

export default StyleSheet.create({
  container: {
    width: wp(80),
    height: hp(50),
    backgroundColor: colors.white,
    borderRadius: 10
  },
  icon: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 10
  },
  contentWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },
  title: {
    fontSize: 18
  },
  instructionsContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    paddingLeft: 10
  },
  instruction: {
    flexDirection: "row",
    paddingBottom: 6,
    fontSize: 14
  },
  instructionText: {
    paddingLeft: 7
  }
});
