import React, { Component } from 'react'
import { View } from 'react-native'

import FotoGalleryButton from './FotoGalleryButton/FotoGalleryButton'
import styles from './FotoGalleryButtons.style'


export default class FotoGalleryButtons extends Component {

    render() {
        return (
            <View style={styles.buttonsWrapper}>
                <FotoGalleryButton
                    typeOfButton="fotoPicker"
                    icon={{iconName: "plus", color: "#A354F2"}} 
                />
                <FotoGalleryButton
                    typeOfButton="changeScreen" 
                    icon={{iconName: "check", color: "#fff"}} 
                    style={{ backgroundColor: '#ccc'}} 
                />
            </View>
        )
    }
}