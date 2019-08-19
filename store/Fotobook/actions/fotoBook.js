import * as actionTypes from './actionTypes'

export const updateFloatingfotoCoordinates = (coords) => ({
    type: actionTypes.UPDATE_FLOATING_FOTO_COORDINATES,
    coords
})


export const snapFotoSpread = (indexOfFotoSpread=0) => ({
    type: actionTypes.SNAP_FOTOSPREAD,
    activeFotoSpread: indexOfFotoSpread,
    activeFotoTemplate: 0,
}) 

export const addPickedDeviceImages = (fotos=[]) => ({
    type: actionTypes.ADD_PICKED_DEVICE_IMAGES,
    fotos
}) 

export const selectFotoFromGallery = (foto) => ({
    type: actionTypes.SELECT_FOTO_FROM_GALLERY,
    foto
})

export const activatePanresponderOnSelectedFoto = (setNativeEvent) => {
    return  {
        type: actionTypes.ACTIVATE_PANRESPONDER_ON_SELECTED_FOTO,
        nativeEvent: setNativeEvent,
        panResponderActivated: true,
        scrollOnFotoGalleryEnabled: false
    }
} 

export const setInitialCoordinatesForFloatingFoto = (x=0, y=0) => ({
    type: actionTypes.SET_INITIAL_COORDINATES_FOR_FLOATING_FOTO,
    leftCoordinateOfFloatingFoto: x,
    topCoordinateOfFloatingFoto: y,
})


export const updateTemplateOnFotospread = () => ({
    type: actionTypes.UPDATE_TEMPLATE_ON_FOTOSPREAD
})

export const updateFotosOfFotospread = () => {
    return {
        type: actionTypes.UPDATE_FOTOS_OF_FOTOSPREAD
    }
} 

// export const updateOffsetOfAnimatedFotospreadFoto = ({ xOffset = 0, yOffset = 0 } = {}) => ({
//     type: actionTypes.UPDATE_OFFSET_OF_ANIMATED_FOTOSPREAD_FOTO,
//     xOffset,
//     yOffset
// })

export const updateFotospreadLayout = ({ xOffset = 0, yOffset = 0 } = {}) => ({
    type: actionTypes.UPDATE_FOTOSPREAD_LAYOUT,
    xOffset,
    yOffset
})




