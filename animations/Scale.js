import { Animated } from "react-native";
export const scaleSize = 1.3;

export class Scale {
  // this defines the terms of our scaling animation.
  static getScaleTransformationStyle(
    animated = new Animated.Value(0),
    startSize = 1,
    endSize = scaleSize
  ) {
    const interpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [startSize, endSize]
    });
    return {
      transform: [{ scale: interpolation }]
    };
  }

  // This defines animation behavior we expext onPressIn
  static onPressAnimation(animated = new Animated.Value(0), duration = 150) {
    animated.setValue(0);
    Animated.timing(animated, {
      toValue: 1,
      duration,
      useNativeDriver: true
    }).start();
  }

  // This defines animatiom behavior we expect onPressOut
  static onPressOutAnimation(animated = new Animated.Value(0), duration = 150) {
    animated.setValue(1);
    Animated.timing(animated, {
      toValue: 0,
      duration,
      useNativeDriver: true
    }).start();
  }
}
