import { updateObject as updateState } from "korobook/utils/utils";

const snapPhotoSpread = (state, { activePhotoSpread, activePhotoTemplate }) => {
  return updateState(state, {
    activePhotoSpread,
    activePhotoTemplate
  });
};

const savePhotos = (state, payload) => {
  return updateState(state, { photos: payload });
};

const selectPhotoFromGallery = (state, payload) => updateState(state, { selectedPhoto: payload });

const snapPhotoTemplate = state => {
  return updateState(state, {
    photoSpreads: state.photoSpreads.map((photoSpread, index) => {
      if (index === state.activePhotoSpread) {
        photoSpread.templateIndex += 1;
      }
      return photoSpread;
    })
  });
};

const saveLeftEdgeOfDroppedPhoto = (state, payload) =>
  updateState(state, { leftEdgeOfDroppedPhoto: payload });

const setPhotoFrameDroppedPhotoLandedOn = (state, payload) => {
  return updateState(state, {
    photoSpreads: state.photoSpreads.map((photoSpread, index) => {
      if (index === state.activePhotoSpread) {
        photoSpread.targetedFotoFrameIndex = payload;
      }
      return photoSpread;
    })
  });
};

export {
  snapPhotoSpread,
  savePhotos,
  selectPhotoFromGallery,
  snapPhotoTemplate,
  saveLeftEdgeOfDroppedPhoto,
  setPhotoFrameDroppedPhotoLandedOn
};
