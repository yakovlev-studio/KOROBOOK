import React, { useState, useRef } from "react";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import MenuSlider from "react-native-snap-carousel";
import Category from "./Category/Category";
import styles from "./Categories.style";
import { CATEGORIES } from "korobook/data/Categories";

import { slideHeight } from "./Category/Category.style";

const Categories = ({ onNavigateToCategory = f => f }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const sliderRef = useRef(null);
  const renderCategory = ({ item }) => (
    <Category
      data={item}
      activeCategoryIndex={activeCategoryIndex}
      onNavigateToCategory={onNavigateToCategory}
    />
  );
  const categoriesSlider = () => (
    <View style={styles.menuContainer}>
      <MenuSlider
        ref={sliderRef}
        data={CATEGORIES}
        renderItem={renderCategory}
        sliderHeight={slideHeight * 2}
        itemHeight={slideHeight}
        firstItem={0}
        inactiveSlideScale={0.85}
        inactiveSlideOpacity={0.9}
        containerCustomStyle={styles.slider}
        loop={true}
        loopClonesPerSide={5}
        vertical={true}
        onSnapToItem={index => setActiveCategoryIndex(index)}
      />
    </View>
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>{categoriesSlider()}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Categories;
