import React, { useEffect } from "react";
import { View } from "react-native";
import FotoGallery from "korobook/components/FotoGallery/FotoGallery.component";
import FotoSpreadsSlider from "korobook/components/FotoSpreadsSlider/FotoSpreadsSlider.component";
import ShuffleButton from "./ShuffleButton/ShuffleButton.component";
import styles from "./ShuffleBook.style";
import Draggable from "korobook/components/Draggable/Draggable.component";

// Redux
import { useSelector, useDispatch } from "react-redux";

const ShuffleBook = props => {
  return (
    <View style={styles.container}>
      <Draggable>
        <FotoSpreadsSlider />

        <ShuffleButton />
        <FotoGallery />
      </Draggable>
    </View>
  );
};

export default ShuffleBook;
