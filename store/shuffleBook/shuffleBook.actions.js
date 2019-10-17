import * as actionTypes from "./shuffleBook.types";

const snapPhotoSpread = activePhotoSpread => ({
  type: actionTypes.SNAP_PHOTOSPREAD,
  payload: {
    activePhotoSpread,
    activePhotoTemplate: 0
  }
});

const snapPhotoTemplate = () => ({
  type: actionTypes.SNAP_PHOTOTEMPLATE
});

const savePhotos = (photos = []) => ({
  type: actionTypes.SAVE_PHOTOS,
  payload: photos
});

const selectPhotoFromGallery = photo => ({
  type: actionTypes.SELECT_PHOTO_FROM_GALLERY,
  payload: photo
});

const saveLeftEdgeOfDroppedPhoto = coord => ({
  type: actionTypes.SAVE_LEFT_EDGE_OF_DROPPED_PHOTO,
  payload: coord
});

const setPhotoFrameDroppedPhotoLandedOn = indexOfFotoFrame => ({
  type: actionTypes.SET_FRAME_DROPPED_PHOTO_LANDED_ON,
  payload: indexOfFotoFrame
});

export {
  snapPhotoSpread,
  snapPhotoTemplate,
  savePhotos,
  selectPhotoFromGallery,
  saveLeftEdgeOfDroppedPhoto,
  setPhotoFrameDroppedPhotoLandedOn
};
