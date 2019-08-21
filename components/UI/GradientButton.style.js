import { StyleSheet } from "react-native";
import { colors } from "korobook/App.style";

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25
  },
  buttonContainer: {
    alignItems: "center",
    flex: 1
  },
  button: {
    height: 50,
    width: 250
  },
  textButton: {
    color: colors.white,
    fontWeight: "600"
  }
});
