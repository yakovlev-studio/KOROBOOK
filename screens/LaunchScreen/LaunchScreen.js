import React from "react";
import { View, SafeAreaView, Image } from "react-native";
import Slider from "korobook/components/LaunchScreenSlider/LaunchScreenSlider";
import GradientButton from "korobook/components/UI/GradientButton";
import styles from "./LaunchScreen.style";

const LaunchScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={require("../../assets/icon.png")} />
        </View>

        <Slider />

        <GradientButton title="Создать фотокнигу" />
      </View>
    </SafeAreaView>
  );
};

export default LaunchScreen;
