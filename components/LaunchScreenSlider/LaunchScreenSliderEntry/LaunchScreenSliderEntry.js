import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "./LaunchScreenSliderEntry.style";

const LaunchScreenSliderEntry = ({ data }) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subtitle}>{data.subtitle}</Text>
    </View>
  );
};

LaunchScreenSliderEntry.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string
  })
};

LaunchScreenSliderEntry.defaultProps = {
  data: { title: "", subtitle: "" }
};

export default LaunchScreenSliderEntry;
