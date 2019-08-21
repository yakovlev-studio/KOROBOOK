import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./GradientButton.style";
import colors from "korobook/constants/colors";

const GradientButton = ({ customStyles = {}, title = "" }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableHighlight style={[styles.button, customStyles.customButtonSize]}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1.0, y: 0 }}
          colors={colors.gradient}
          style={[styles.linearGradient, customStyles.customButtonSize]}
        >
          <Text style={[styles.textButton, customStyles.sizeOfTitleOfShuffleButton]}>{title}</Text>
        </LinearGradient>
      </TouchableHighlight>
    </View>
  );
};

export default GradientButton;
