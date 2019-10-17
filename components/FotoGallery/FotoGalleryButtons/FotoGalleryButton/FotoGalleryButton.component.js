import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./FotoGalleryButton.style";
import { Ionicons } from "@expo/vector-icons";
import { renderPlatformSpecificIcon } from "korobook/utils/utils";
import colors from "korobook/constants/colors";
import ShuffleBookContext from "korobook/contexts/ShuffleBookContext";

// Redux
import { useDispatch } from "react-redux";
import * as actions from "korobook/store/shuffleBook/shuffleBook.actions";

const FotoGalleryButton = ({ icon = {}, buttonStyles = {} }) => {
  const navigateToPhotoEditorScreen = fn => alert("Screen changed to PhotoEditorScreen");

  const pickFotoHandler = fn => fn();

  return (
    <ShuffleBookContext.Consumer>
      {({ onNavigateToImageBrowser, onNavigateToPhotoEditor }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              return icon.name === "add"
                ? onNavigateToImageBrowser()
                : navigateToPhotoEditorScreen(onNavigateToPhotoEditor);
            }}
            style={[styles.galleryButtonContainer, buttonStyles]}
          >
            <Ionicons name={renderPlatformSpecificIcon(icon.name)} color={icon.color} size={40} />
          </TouchableOpacity>
        );
      }}
    </ShuffleBookContext.Consumer>
  );
};

export default FotoGalleryButton;
