import React from "react";
import { View } from "react-native";
import LaunchScreen from "korobook/screens/LaunchScreen/LaunchScreen";
import styles from "./App.style";

const App = () => {
  return (
    <View style={styles.container}>
      <LaunchScreen />
    </View>
  );
};

export default App;
