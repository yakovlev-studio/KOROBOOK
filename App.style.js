import { StyleSheet } from "react-native";

export const colors = {
  black: "#1a1917",
  gray: "#888888",
  white: "#FFF",
  mediumorchid: "#A354F2",
  mediumpurple: "#A05BE5",
  buttonGradient: ["#E65346", "#A354F2"]
};

export default StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
