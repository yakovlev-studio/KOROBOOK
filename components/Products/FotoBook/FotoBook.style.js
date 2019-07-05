import { StyleSheet } from 'react-native';

import { viewportHeight, viewportWidth, calculatePercentOfTotal } from 'korobook/utils/utils'

export const slideHeight = viewportHeight * 0.34; 
export const slideWidth = viewportWidth * 0.9

const imageGalleryWidth =  calculatePercentOfTotal(80, viewportWidth)
const addImageButtonWidth = calculatePercentOfTotal(20, viewportWidth)


const imageGalleryItemWidth = calculatePercentOfTotal(20, viewportWidth)
const imageGalleryItemHeight = calculatePercentOfTotal(15, viewportHeight)


export default StyleSheet.create({
    safeArea: {
        flex: 1
    },
    container: {
        flex: 1
    },
    scrollview: {
        flex: 1
    },

    image: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#ccc'
    },



// ImageGallery Component
    imageGalleryItemsWrapper: {
        width: imageGalleryWidth,
        height: "100%",
        borderWidth: 1,
        borderColor: '#ccc'
    },
    addImageButtonWrapper: {
        width: addImageButtonWidth,
        height: "100%",
    },


    galleryImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        width: imageGalleryItemWidth,
        height: imageGalleryItemHeight,
       
    },

    imagesWrapper: {
        flexDirection: "row"
    },
    wrapper: {
        flexDirection: 'row'
    },

    floatingFoto: {
        left: 0,
        top: 0,
        position: "absolute",
        height: 80,
        width: 80,
        zIndex: 100
    },
    galleryListWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 80
    }
 
});
