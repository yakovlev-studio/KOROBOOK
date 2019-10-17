import React, { useState } from "react";
import { View, Image, Animated, TouchableHighlight } from "react-native";
import styles from "./FotoGalleryItem.style";
import { wp } from "korobook/utils/utils";
import colors from "korobook/constants/colors";
import FotoGalleryContext from "korobook/contexts/FotoGallery";
import { Fade } from "korobook/animations/Fade";

// Redux
import { useDispatch } from "react-redux";
import * as actions from "korobook/store/shuffleBook/shuffleBook.actions";

const AnimatedTouchableHighlight = Animated.createAnimatedComponent(TouchableHighlight);

const FotoGalleryItem = ({ item }) => {
  const [fadeAnimValue] = useState(new Animated.Value(1));
  let flatlistItem = null;

  if (item.file) {
    flatlistItem = (
      <FotoGalleryContext.Consumer>
        {({ handlePressIn, handleLongPress }) => {
          return (
            <AnimatedTouchableHighlight
              onPressIn={evt => handlePressIn(evt, item.file)}
              onLongPress={evt => {
                handleLongPress(evt);
                Fade.onPressFadeAnimation(fadeAnimValue);
              }}
              style={{ flex: 1, opacity: fadeAnimValue }}
            >
              <View style={styles.photoContainer}>
                <Image style={styles.photo} source={{ uri: item.file }} />
              </View>
            </AnimatedTouchableHighlight>
          );
        }}
      </FotoGalleryContext.Consumer>
    );
  } else {
    flatlistItem = (
      <View style={{ flex: 1 }}>
        <View style={styles.photoContainer} />
      </View>
    );
  }

  return <React.Fragment>{flatlistItem}</React.Fragment>;
};

export default FotoGalleryItem;
