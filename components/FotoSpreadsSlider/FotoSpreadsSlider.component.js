import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { v4 } from "uuid";
import Slider from "react-native-snap-carousel";
import FotoSpread from "./FotoSpread/FotoSpread.component";
import { fotoSpreadTemplates } from "korobook/data/FotoSpreadTemplates";
import {
  sliderWidth,
  sliderHeight,
  slideWidth,
  itemHeight,
  viewportHeight
} from "./FotoSpread/FotoSpread.style";
import { calculatePercentOfTotal } from "korobook/utils/utils";
import * as actions from "korobook/store/shuffleBook/shuffleBook.actions";

// Redux
import { useSelector, useDispatch } from "react-redux";

let ACTIVE_SLIDE = 0;
const FotoSpreadsSlider = () => {
  const [activeSlide, setActiveSlide] = useState(ACTIVE_SLIDE);
  const dispatch = useDispatch();
  const photoSpreads = useSelector(({ shuffleBook }) => shuffleBook.photoSpreads);
  const leftEdgeOfDroppedPhoto = useSelector(
    ({ shuffleBook }) => shuffleBook.leftEdgeOfDroppedPhoto
  );

  useEffect(() => {
    // console.log(leftEdgeOfDroppedPhoto);
  }, [leftEdgeOfDroppedPhoto]);

  const ENTRIES = Array.from({ length: photoSpreads.length }).map(_ => ({
    id: v4()
  }));

  const renderFotoSpread = ({ item, index }) => {
    return <FotoSpread item={item} index={index} />;
  };
  const renderSlider = () => (
    <View style={styles.sliderContainer}>
      <Slider
        data={ENTRIES}
        contentContainerCustomStyle={styles.contentContainer}
        renderItem={renderFotoSpread}
        vertical={true}
        itemWidth={slideWidth}
        itemHeight={itemHeight}
        sliderHeight={sliderHeight}
        firstItem={0}
        inactiveSlideScale={0.9}
        inactiveSlideOpacity={0.2}
        // activeSlideOffset={40}
        // swipeThreshold={40}
        activeSlideAlignment={"start"}
        onSnapToItem={index => dispatch(actions.snapPhotoSpread(index))}
      />
    </View>
  );

  return <View style={styles.container}>{renderSlider()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sliderContainer: {
    flex: 1
  },
  contentContainer: {
    paddingTop: calculatePercentOfTotal(25, sliderHeight)
  }
});

export default FotoSpreadsSlider;
