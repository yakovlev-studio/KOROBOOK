import { StyleSheet } from "react-native";
import colors from "korobook/constants/colors";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    flex: 1
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60
  },
  button: {
    borderRadius: 25
  }
});
