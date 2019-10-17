import React from "react";
import { View } from "react-native";
import GradientButton from "korobook/components/UI/GradientButton/GradientButton.component";
import styles from "./ShuffleButton.style";
import * as actions from "korobook/store/shuffleBook/shuffleBook.actions";

// Redux
import { useDispatch, useSelector } from "react-redux";

const ShuffleButton = () => {
  const dispatch = useDispatch();
  const handleShuffleButtonPressed = () => dispatch(actions.snapPhotoTemplate());

  return (
    <View style={styles.shuffleButtonContainer}>
      <GradientButton
        onPressed={handleShuffleButtonPressed.bind(this)}
        customStyles={{
          customButtonSize: styles.shuffleButton,
          sizeOfTitleOfShuffleButton: styles.shuffleButtonSize
        }}
        title="S"
      />
    </View>
  );
};

export default ShuffleButton;
