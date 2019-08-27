import { StyleSheet } from "react-native";
import colors from "korobook/constants/colors";

export default StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1
  },
  menuContainer: {
    paddingVertical: 20
  },
  slider: {
    marginTop: 10,
    overflow: "visible"
  }
});
