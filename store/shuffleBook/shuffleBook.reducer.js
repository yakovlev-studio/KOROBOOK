import * as ShuffleBookActionTypes from "./shuffleBook.types";
import * as updateFns from "./shuffleBook.utils";
import { v4 } from "uuid";

const INITIAL_STATE = {
  activePhotoSpread: 0,
  selectedPhoto: null,
  photoSpreads: [
    {
      templateIndex: 0,
      photos: [],
      targetedFotoFrameIndex: null
    },
    {
      templateIndex: 0,
      photos: [],
      targetedFotoFrameIndex: null
    },
    {
      templateIndex: 0,
      photos: [],
      targetedFotoFrameIndex: null
    },
    {
      templateIndex: 0,
      photos: [],
      targetedFotoFrameIndex: null
    },
    {
      templateIndex: 0,
      photos: [],
      targetedFotoFrameIndex: null
    }
  ],
  // photoSpreads: [
  //   {
  //     templateIndex: 0,
  //     photos: {
  //       leftSideOfPhotoSpread: new Map(),
  //       rightSideOfPhotoSpread: new Map()
  //     }
  //   },
  //   {
  //     templateIndex: 0,
  //     photos: {
  //       leftSideOfPhotoSpread: new Map(),
  //       rightSideOfPhotoSpread: new Map()
  //     }
  //   }
  // ],
  leftEdgeOfDroppedPhoto: 0
};

const shuffleBookReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ShuffleBookActionTypes.SNAP_PHOTOSPREAD:
      return updateFns.snapPhotoSpread(state, payload);
    case ShuffleBookActionTypes.SAVE_PHOTOS:
      return updateFns.savePhotos(state, payload);
    case ShuffleBookActionTypes.SELECT_PHOTO_FROM_GALLERY:
      return updateFns.selectPhotoFromGallery(state, payload);
    case ShuffleBookActionTypes.SNAP_PHOTOTEMPLATE:
      return updateFns.snapPhotoTemplate(state);
    case ShuffleBookActionTypes.SAVE_LEFT_EDGE_OF_DROPPED_PHOTO:
      return updateFns.saveLeftEdgeOfDroppedPhoto(state, payload);
    case ShuffleBookActionTypes.SET_FRAME_DROPPED_PHOTO_LANDED_ON:
      return updateFns.setPhotoFrameDroppedPhotoLandedOn(state, payload);
    default:
      return state;
  }
};

export default shuffleBookReducer;
