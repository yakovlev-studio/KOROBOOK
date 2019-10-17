import React from "react";
import { Platform, TouchableOpacity, SafeAreaView } from "react-native";
import Categories from "korobook/components/Categories/Categories.component";
import { EvilIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import styles from "./CategoriesScreen.style";

const CategoriesScreen = ({ navigation }) => {
  const navigateToCategoryHandler = (category = "") => {
    return navigation.navigate({ routeName: `${category}` });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Categories onNavigateToCategory={navigateToCategoryHandler} />
    </SafeAreaView>
  );
};

const iconColor = Platform.OS === "android" ? colors.white : colors.primary;

CategoriesScreen.navigationOptions = () => ({
  title: "Продукция",
  headerBackTitle: "Назад",
  headerRightContainerStyle: {
    paddingRight: 20
  },
  headerRight: (
    <TouchableOpacity onPress={() => alert("User")}>
      <EvilIcons name="user" size={34} color={iconColor} />
    </TouchableOpacity>
  )
});

export default CategoriesScreen;
