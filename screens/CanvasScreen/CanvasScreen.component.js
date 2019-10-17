import React from "react";
import { View, Text } from "react-native";
import styles from "./CanvasScreen.style";

const CanvasScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>CanvasScreen</Text>
      </View>
    </SafeAreaView>
  );
};

export default CanvasScreen;
