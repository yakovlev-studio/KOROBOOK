import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { CATEGORIES } from "korobook/data/Categories";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./Category.style";
import colors from "korobook/constants/colors";

const Category = ({ data = {}, activeCategoryIndex = 0, onNavigateToCategory = f => f }) => {
  let category = null;
  // console.log(data);

  if (CATEGORIES[activeCategoryIndex].title === data.title) {
    category = (
      <View style={styles.categoryContainer}>
        <Image source={data.illustration} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
      </View>
    );
  } else {
    category = (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={colors.gradient}
        style={styles.categoryContainer}
      >
        <View style={styles.textContainer}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subtitle}>{data.subtitle}</Text>
        </View>
      </LinearGradient>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.slideInnerContainer}
      onPress={onNavigateToCategory.bind(this, data.name)}
      // onPress={() => onProductClicked(title)}
    >
      {category}
    </TouchableOpacity>
  );
};

export default Category;
