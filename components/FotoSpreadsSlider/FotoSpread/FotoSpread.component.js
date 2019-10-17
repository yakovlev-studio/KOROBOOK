import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import Dash from "react-native-dash";
import styles from "./FotoSpread.style";
import { fotoSpreadTemplates } from "korobook/data/FotoSpreadTemplates";
import * as actions from "korobook/store/shuffleBook/shuffleBook.actions";
import FotoGalleryContext from "korobook/contexts/FotoGallery";
import { viewportMiddlePoint } from "./FotoSpread.style";

// setPhotoFrameDroppedPhotoLandedOn

// Redux
import { useSelector, useDispatch } from "react-redux";

const FotoSpread = ({ _, index }) => {
  const photos = useSelector(({ shuffleBook }) => shuffleBook.photos);
  const photoSpreads = useSelector(({ shuffleBook }) => shuffleBook.photoSpreads);
  const activePhotoSpread = useSelector(({ shuffleBook }) => shuffleBook.activePhotoSpread);
  const leftEdgeOfDroppedPhoto = useSelector(
    ({ shuffleBook }) => shuffleBook.leftEdgeOfDroppedPhoto
  );
  const targetedFotoFrameIndex = useSelector(
    ({ shuffleBook }) => shuffleBook.targetedFotoFrameIndex
  );
  var leftStyles = null,
    rightStyles = null;

  // useEffect(() => {
  //   console.log(photoSpreads);
  //   // console.log(photos);
  //   // console.log(index);
  //   // console.log(activePhotoSpread);
  //   console.log(leftEdgeOfDroppedPhoto);
  // }, [photoSpreads, leftEdgeOfDroppedPhoto]);

  const templateIndex = photoSpreads[index].templateIndex;

  if (
    fotoSpreadTemplates
      .get(templateIndex)
      .fotoSpread.get("fotoSpreadStyleSheet")
      .has("right")
  ) {
    rightStyles = fotoSpreadTemplates
      .get(templateIndex)
      .fotoSpread.get("fotoSpreadStyleSheet")
      .get("right").styles;
  }
  leftStyles = fotoSpreadTemplates
    .get(templateIndex)
    .fotoSpread.get("fotoSpreadStyleSheet")
    .get("left").styles;

  const renderFotoFrames = ({ outerFotoFramesContainer, fotoFramesContainer, fotoFrames }) => {
    const targetedFotoFrameIndex = photoSpreads[index].targetedFotoFrameIndex; // null || int
    return (
      <FotoGalleryContext.Consumer>
        {({ selectedFotoUri }) => {
          return (
            <View style={[outerFotoFramesContainer]}>
              <View style={[fotoFramesContainer]}>
                {Array.from(fotoFrames).map(([key, fotoFrame]) => {
                  let jsx = null;
                  if (targetedFotoFrameIndex === key) {
                    if (leftEdgeOfDroppedPhoto < viewportMiddlePoint && fotoFrame.side === "left") {
                      jsx = (
                        <View key={key} style={[fotoFrame]}>
                          <Image source={{ uri: selectedFotoUri }} style={styles.photo} />
                        </View>
                      );
                    } else if (
                      leftEdgeOfDroppedPhoto > viewportMiddlePoint &&
                      fotoFrame.side === "right"
                    ) {
                      jsx = (
                        <View key={key} style={[fotoFrame]}>
                          <Image source={{ uri: selectedFotoUri }} style={styles.photo} />
                        </View>
                      );
                    } else {
                      jsx = <View key={key} style={[fotoFrame]}></View>;
                    }
                  } else {
                    jsx = <View key={key} style={[fotoFrame]}></View>;
                  }
                  return jsx;
                })}
              </View>
            </View>
          );
        }}
      </FotoGalleryContext.Consumer>
    );
  };

  return (
    <View style={[styles.fotoSpread]}>
      <View style={styles.fotoSpreadInnerContainer}>
        {leftStyles && renderFotoFrames(leftStyles)}
        {rightStyles && renderFotoFrames(rightStyles)}

        {fotoSpreadTemplates.get(templateIndex).fotoSpread.get("meta").isDashRequired && (
          <View style={styles.dashContainer}>
            <Dash
              style={styles.dash}
              dashGap={19}
              dashLength={18.2}
              dashThickness={1}
              dashColor={"#ccc"}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default FotoSpread;
