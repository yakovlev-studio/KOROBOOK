import { StyleSheet } from "react-native";
import colors from "korobook/constants/colors";
import { wp } from "korobook/utils/utils";

export default StyleSheet.create({
  fotoGalleryContainer: {
    flex: 1,
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderTopColor: colors.lightGrey
  },
  fotoGallery: {
    flexGrow: 1
  },
  flatListItemSeparator: {
    height: wp(16.6666667),
    backgroundColor: colors.lightGrey,
    width: 1,
    position: "absolute",
    bottom: 0
  }
});
