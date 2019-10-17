import { StyleSheet } from "react-native";
import colors from "korobook/constants/colors";
import { wp } from "korobook/utils/utils";

export default StyleSheet.create({
  photoContainer: {
    width: wp(16.6666667),
    height: wp(16.6666667)
  },
  photo: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: "cover"
  },
  simpleBox: {
    width: 150,
    height: 50,
    backgroundColor: "pink",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  }
});
