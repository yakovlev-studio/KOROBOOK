import { Animated } from "react-native";

export class Fade {
  // this defines the terms of our fading animation.
  static getFadeStyle(animated = new Animated.Value(1), startValue = 1, endValue = 0) {
    const interpolation = animated.interpolate({
      inputRange: [1, 0],
      outputRange: [startValue, endValue]
    });
    return {
      opacity: interpolation
    };
  }

  // This defines animation behavior onPress
  static onPressFadeAnimation(animated = new Animated.Value(1), duration = 150) {
    animated.setValue(1);
    Animated.timing(animated, {
      toValue: 0,
      duration,
      useNativeDriver: true
    }).start();
  }
}
