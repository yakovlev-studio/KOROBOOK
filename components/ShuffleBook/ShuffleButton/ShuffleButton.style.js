import { StyleSheet, Platform } from "react-native";
import { calculatePercentOfTotal } from "korobook/utils/utils";
import { viewportHeight } from "korobook/components/FotoSpreadsSlider/FotoSpread/FotoSpread.style";

const styles = StyleSheet.create({
  shuffleButtonContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
    bottom: calculatePercentOfTotal(13, viewportHeight),
    ...Platform.select({
      // B
      ios: {
        shadowColor: "#A354F2",
        shadowOffset: {
          height: 7
        },
        shadowOpacity: 0.5
      },
      android: {
        elevation: 15
      }
    })
  },
  shuffleButton: {
    borderRadius: 40,
    width: 80,
    height: 80
  },
  shuffleButtonSize: {
    fontSize: 26
  }
});

export default styles;
