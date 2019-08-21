import React, { useState, useRef } from "react";
import { View } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import SLIDER_ENTRIES from "korobook/static/LaunchScreenSliderEntries";
import { sliderWidth, itemWidth } from "./LaunchScreenSliderEntry/LaunchScreenSliderEntry.style";
import LaunchScreenSliderEntry from "./LaunchScreenSliderEntry/LaunchScreenSliderEntry";
import styles from "./LaunchScreenSlider.style";
import { colors } from "korobook/App.style";

const LaunchScreenSlider = () => {
  const [sliderActiveSlide, setSliderActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const renderItem = ({ item }) => {
    return <LaunchScreenSliderEntry data={item} />;
  };

  return (
    <View style={styles.carouselContainer}>
      <Carousel
        ref={sliderRef}
        data={SLIDER_ENTRIES}
        renderItem={renderItem}
        sliderWidth={sliderWidth}
        itemWidth={itemWidth}
        firstItem={0}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        loop
        loopClonesPerSide={2}
        onSnapToItem={index => setSliderActiveSlide(index)}
      />
      <Pagination
        dotsLength={SLIDER_ENTRIES.length}
        activeDotIndex={sliderActiveSlide}
        containerStyle={styles.paginationContainer}
        dotColor={colors.mediumpurple}
        dotStyle={styles.paginationDot}
        inactiveDotColor={colors.black}
        inactiveDotOpacity={0.2}
        inactiveDotScale={0.8}
        carouselRef={sliderRef}
        tappableDots={!!sliderRef}
      />
    </View>
  );
};

export default LaunchScreenSlider;
