import React, { Component } from "react";
import { Animated, PanResponder, Text } from "react-native";
import FotoGalleryContext from "korobook/contexts/FotoGallery";
import { Scale } from "korobook/animations/Scale";
import { viewportMiddlePoint } from "korobook/components/FotoSpreadsSlider/FotoSpread/FotoSpread.style";
import { scaleSize } from "korobook/animations/Scale";
import * as actions from "korobook/store/shuffleBook/shuffleBook.actions";
import { wp } from "korobook/utils/utils";
import {
  isPhotoFallsInTargetArea,
  findCellDroppedPhotoLandedOn,
  findFotoFrameMappedToTargetedCell
} from "korobook/utils/lib";
import { fotoSpreadTemplates } from "korobook/data/FotoSpreadTemplates";

// redux
import { connect } from "react-redux";

export class Draggable extends Component {
  state = {
    nativeEvent: null,
    scrollEnabled: true,
    selectedFotoUri: "",
    activeFotoFrame: null
  };

  x0 = 0;
  y0 = 0;

  componentDidMount() {}

  _panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,

    onPanResponderGrant: (evt, gestureState) => {
      // The gesture has started. Show visual feedback so the user knows
      // what is happening!
      // gestureState.d{x,y} will be set to zero now
    },
    onPanResponderMove: (evt, gestureState) => {
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      this._previousLeft = evt.nativeEvent.pageX - 0;
      this._previousTop = evt.nativeEvent.pageY - 100;
      let heightOfFotoGalleryItem = wp(16.6666667);
      // console.log(`_previousTop - ${this._previousTop + heightOfFotoGalleryItem}`);
      this.y0 = this._previousTop + heightOfFotoGalleryItem;
      this._updateNativeStyles();
    },
    onPanResponderTerminationRequest: (evt, gestureState) => true,
    onPanResponderRelease: ({ nativeEvent }, gestureState) => {
      this._previousLeft += gestureState.dx;
      this._previousTop += gestureState.dy;
      let widthOfFotoGalleryItem = wp(16.6666667);

      this.x0 =
        nativeEvent.pageX - (widthOfFotoGalleryItem * scaleSize - widthOfFotoGalleryItem) / 2;

      // console.log(`widthOfFotoGalleryItem - ${widthOfFotoGalleryItem}`);
      // console.log(`y0 - ${this.y0}`);
      // console.log(`x0 - ${this.x0}`);

      this.props.setLeftEdgeOfDroppedPhotoHandler(this.x0);

      let coordinates = {
        x0: this.x0,
        y0: this.y0
      };

      if (isPhotoFallsInTargetArea(coordinates, this.props.shuffleBook)) {
        // Значит фотка попала в контейнер

        var cell = findCellDroppedPhotoLandedOn(this.props.shuffleBook, coordinates);
        var targetedFotoFrameIndex = findFotoFrameMappedToTargetedCell(
          this.props.shuffleBook,
          cell,
          coordinates
        );
        this.props.setPhotoFrameDroppedPhotoLandedOnHandler(targetedFotoFrameIndex);
        // console.log(`Key of fotoFrame: `);
        // console.log(activeFotoFrame);
      } else {
        console.log("фотка не попала");
      }

      this.setState({ nativeEvent: undefined, scrollEnabled: true });
    },
    onPanResponderTerminate: (evt, gestureState) => {
      // Another component has become the responder, so this gesture
      // should be cancelled
    },
    onShouldBlockNativeResponder: (evt, gestureState) => {
      // Returns whether this component should block native components from becoming the JS
      // responder. Returns true by default. Is currently only supported on android.
      return true;
    }
  });

  _scaleInAnimated = new Animated.Value(0);

  _previousLeft = 0;
  _previousTop = 0;
  _floatingStyles = {
    style: {
      left: this._previousLeft,
      top: this._previousTop,
      position: "absolute",
      width: wp(16.666667),
      height: wp(16.666667),
      zIndex: 2
    }
  };

  getDragElement = selectedFotoUri => {
    if (!this.state.nativeEvent) {
      return null;
    }
    return (
      <Animated.Image
        source={{ uri: selectedFotoUri }}
        style={[
          this._floatingStyles.style,
          {
            top: this._previousTop,
            left: this._previousLeft
          },
          Scale.getScaleTransformationStyle(this._scaleInAnimated)
        ]}
        ref={floating => {
          this.floating = floating;
        }}
      ></Animated.Image>
    );
  };

  handleLongPress = event => {
    this.setState({
      nativeEvent: event.nativeEvent,
      scrollEnabled: false
    });
    Scale.onPressAnimation(this._scaleInAnimated);
  };

  handlePressIn = (event, selectedFotoUri) => {
    this.setState({ selectedFotoUri });
    this._previousLeft = event.nativeEvent.pageX - 0;
    this._previousTop = event.nativeEvent.pageY - 100;
  };

  _updateNativeStyles = () => {
    this.floating &&
      this.floating.setNativeProps({
        style: { left: this._previousLeft, top: this._previousTop }
      });
  };

  render() {
    return (
      <FotoGalleryContext.Provider
        value={{
          ...this.state,
          panHandlers: this._panResponder.panHandlers,
          handlePressIn: this.handlePressIn,
          handleLongPress: this.handleLongPress
        }}
      >
        {this.props.children}
        {this.getDragElement(this.state.selectedFotoUri)}
      </FotoGalleryContext.Provider>
    );
  }
}

const mapStateToProps = ({ shuffleBook }) => ({
  shuffleBook: shuffleBook,
  leftEdgeOfDroppedPhoto: shuffleBook.leftEdgeOfDroppedPhoto,
  photoSpreads: shuffleBook.photoSpreads,
  activePhotoSpread: shuffleBook.activePhotoSpread
});

const mapDispatchToProps = dispatch => ({
  setLeftEdgeOfDroppedPhotoHandler: edgePoint =>
    dispatch(actions.saveLeftEdgeOfDroppedPhoto(edgePoint)),
  setPhotoFrameDroppedPhotoLandedOnHandler: index =>
    dispatch(actions.setPhotoFrameDroppedPhotoLandedOn(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Draggable);
