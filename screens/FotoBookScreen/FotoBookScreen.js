import React, { useState, useEffect } from "react";
import { View, Text, Platform, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./FotoBookScreen.style";
import { Ionicons } from "@expo/vector-icons";
import colors from "korobook/constants/colors";
import ShuffleBook from "korobook/components/ShuffleBook/ShuffleBook";
import Popup from "korobook/components/UI/Popup/Popup";
import Manual from "korobook/components/Manual/Manual";

const FotoBookScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    navigation.setParams({ toggleModalVisibility });
  }, [modalVisible]);
  const toggleModalVisibility = () => setModalVisible(!modalVisible);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.screen}>
        <Popup animationType="fade" transparent={true} visible={modalVisible}>
          <Manual toggleModalVisibility={toggleModalVisibility} />
        </Popup>
        <ShuffleBook />
      </View>
    </SafeAreaView>
  );
};

const iconName =
  Platform.OS === "android" ? "md-information-circle" : "ios-information-circle-outline";
const iconColor = Platform.OS === "android" ? colors.white : colors.IOSprimary;
const iconBackgroundColor = Platform.OS === "android" ? colors.white : "";

FotoBookScreen.navigationOptions = ({ navigation }) => ({
  title: "Shuffle book",
  headerBackTitle: "Shuffle book",

  headerRightContainerStyle: {
    paddingRight: 20
  },
  headerRight: (
    <TouchableOpacity onPress={navigation.getParam("toggleModalVisibility")}>
      <Ionicons name={iconName} size={34} backgroundColor={iconBackgroundColor} color={iconColor} />
    </TouchableOpacity>
  )
});

export default FotoBookScreen;
