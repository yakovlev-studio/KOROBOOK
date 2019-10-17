import React from "react";
import { View, Text } from "react-native";
import styles from "./LaunchScreenSliderEntry.style";

const LaunchScreenSliderEntry = ({ data }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </View>
  );
};

export default LaunchScreenSliderEntry;
