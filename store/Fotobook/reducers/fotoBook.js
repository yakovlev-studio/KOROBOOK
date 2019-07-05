import fotoSpreadTemplates from 'korobook/static/fotoSpreadTemplates'
import { updateObject as updateState } from 'korobook/store/utility'
import * as actionTypes from 'korobook/store/Fotobook/actions/actionTypes'
import uuid from 'uuid'

import updateFotosOfActiveFotospread from 'korobook/utils/fotoBook/updateFotosOfActiveFotospread'
import updateTemplateOfFotospread from 'korobook/utils/fotoBook/updateTemplateOfFotospread'
import updateFotospreadLayout from 'korobook/utils/fotoBook/updateFotospreadLayout'

const initialState = {

    xAxisOffsetOfAnimatedFotospreadFoto: 0,
    yAxisOffsetOfAnimatedFotospreadFoto: 0,

    leftCoordinateOfFloatingFoto: 0,
    topCoordinateOfFloatingFoto: 0,

    activeFotoSpread: 0,
    activeFotoTemplate: 1,

    fotos: [],
    displayFotoGallery: false,
    
    selectedFoto: null,
    
    fotoSpreads: [
        {
            id: uuid.v4(),
            fotoSpreadTemplate: fotoSpreadTemplates[1],
            fotos: []
        },
        {
            id: uuid.v4(),
            fotoSpreadTemplate: fotoSpreadTemplates[1],
            fotos: []
        },
        {
            id: uuid.v4(),
            fotoSpreadTemplate: fotoSpreadTemplates[1],
            fotos: []
        },
        {
            id: uuid.v4(),
            fotoSpreadTemplate: fotoSpreadTemplates[1],
            fotos: []
        },
       
    ],


    // FLatList
    scrollOnFotoGalleryEnabled: true,

    // PanGesture
    nativeEvent: undefined,
    displayFloatingFotos: false,

    panResponderActivated: false,
}




const snapFotoSpread = (state, action) => {
    const updatedProps = {
        activeFotoSpread: action.activeFotoSpread,
        activeFotoTemplate: action.activeFotoTemplate,
    }

    return updateState(state, updatedProps)
}

const addPickedDeviceFotos = (state, action) => {
    const updatedFotos = action.fotos.map(i => ({
        key: uuid.v4(), 
        uri: i.path, 
        // width: i.width, 
        // height: i.height, 
        mime: i.mime,
        isFloating: false
    }))
    const updatedProps = {
        fotos: [...state.fotos, ...updatedFotos],
        displayFotoGallery: true
    }
    return updateState(state, updatedProps)

}

const selectFotoFromGallery = (state, { foto }) => {
    return updateState(state, { selectedFoto: foto })
}

const activatePanResponder = (state, action) => {
    const updatedProps = {
        nativeEvent: action.nativeEvent,
        panResponderActivated: true,
        scrollOnFotoGalleryEnabled: false
    }
    return updateState(state, updatedProps)
}

const setCoordinatesForSelectedFoto = (state, action) => {
    const updatedProps = {
        leftCoordinateOfFloatingFoto: action.leftCoordinateOfFloatingFoto,
        topCoordinateOfFloatingFoto: action.topCoordinateOfFloatingFoto
    }
    return updateState(state, updatedProps)
}


const updateTemplateOnFotospread = (state) => {
    const { updatedActiveFotoTemplate,
            updatedFotoSpreads 
        } = updateTemplateOfFotospread({...state})
    const updatedProps = {
        activeFotoTemplate: updatedActiveFotoTemplate,
        fotoSpreads: [...updatedFotoSpreads]
    }

    return updateState(state, updatedProps)
};



const updateFotoSpreadFotos = (state, action) => {
    const updatedFotoSpread = updateFotosOfActiveFotospread({...state})

    const updatedFotoSpreads = state.fotoSpreads.map(fotoSpread => {
        if(fotoSpread.id === updatedFotoSpread.id){
            return {...fotoSpread, fotos: updatedFotoSpread.fotos}
        }
        return fotoSpread
    })
    
    const updatedProps = {
        panResponderActivated: false,
        nativeEvent: undefined,
        scrollOnFotoGalleryEnabled: true, 
        fotos: state.fotos.filter(foto => foto.key !== state.selectedFoto.key),
        displayFloatingFotos: true,
        // fotoSpreads: [...state.fotoSpreads, updatedFotoSpread] 
        fotoSpreads: updatedFotoSpreads
    }
    return updateState(state, updatedProps)

}






const updateFloatingfotoCoordinates = (state, action) => {
    const { coords: { leftCoordinateOfFloatingFoto, topCoordinateOfFloatingFoto } } = action
    const updatedProps = {
        leftCoordinateOfFloatingFoto,
        topCoordinateOfFloatingFoto, 
    }

    return updateState(state, updatedProps)
}

const configureFotospreadLayout = (state, action) => {
    const { xOffset, yOffset, indexOfFloatingFoto } = action
    const updatedFotoSpread = updateFotospreadLayout({...state}, { xOffset, yOffset, indexOfFloatingFoto })
    // console.log("updatedFotoSpread - ", updatedFotoSpread)

    const updatedFotoSpreads = state.fotoSpreads.map(fotoSpread => {
        if(fotoSpread.id === updatedFotoSpread.id){
            return {...fotoSpread, fotos: updatedFotoSpread.fotos}
        }
        return fotoSpread
    })

    const updatedProps = {
        fotoSpreads: updatedFotoSpreads
    }


    return updateState(state, updatedProps)
}



export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SNAP_FOTOSPREAD: return snapFotoSpread(state, action)
        case actionTypes.ADD_PICKED_DEVICE_IMAGES: return addPickedDeviceFotos(state, action)
        case actionTypes.SELECT_FOTO_FROM_GALLERY: return selectFotoFromGallery(state, action)
        case actionTypes.ACTIVATE_PANRESPONDER_ON_SELECTED_FOTO: return activatePanResponder(state, action)
        case actionTypes.SET_INITIAL_COORDINATES_FOR_FLOATING_FOTO: return setCoordinatesForSelectedFoto(state, action)
        case actionTypes.UPDATE_TEMPLATE_ON_FOTOSPREAD: return updateTemplateOnFotospread(state)
        case actionTypes.UPDATE_FOTOSPREAD_FOTOS: return updateFotoSpreadFotos(state, action)
        case actionTypes.UPDATE_FLOATING_FOTO_COORDINATES: return updateFloatingfotoCoordinates(state, action)
        case actionTypes.UPDATE_FOTOSPREAD_LAYOUT: return configureFotospreadLayout(state, action)

        default: return state
    }
}
