import React from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import styles from "./Manual.style";
import colors from "korobook/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { INSTRUCTIONS } from "korobook/data/ModalManual";
import GradientButton from "korobook/components/UI/GradientButton/GradientButton.component";

const Manual = ({ toggleModalVisibility = f => f }) => {
  const closeIconName = Platform.OS === "android" ? "md-close-circle" : "ios-close-circle";
  const closeIconColor = Platform.OS === "android" ? colors.primary : colors.lightGrey;

  const infoIconName =
    Platform.OS === "android" ? "md-information-circle" : "ios-information-circle-outline";
  const infoIconColor = Platform.OS === "android" ? colors.white : colors.primary;
  const infoIconBackgroundColor = Platform.OS === "android" ? colors.white : "";

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={() => toggleModalVisibility()}>
        <Ionicons name={closeIconName} size={32} color={closeIconColor} />
      </TouchableOpacity>

      <View style={styles.contentWrapper}>
        <Ionicons
          name={infoIconName}
          size={40}
          backgroundColor={infoIconBackgroundColor}
          color={infoIconColor}
        />
        <Text style={styles.title}>Создание фотокниги</Text>

        <View style={styles.instructionsContainer}>
          {INSTRUCTIONS.map((instruction, index) => (
            <View key={instruction.id} style={styles.instruction}>
              <Text>{index + 1}. </Text>
              <Text style={styles.instructionText}>{instruction.title}</Text>
            </View>
          ))}
        </View>
        <GradientButton title="Понятно" onPressed={() => toggleModalVisibility()} />
      </View>
    </View>
  );
};

export default Manual;
